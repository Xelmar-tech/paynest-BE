import { ContractFunctionExecutionError, getContract } from "viem";
import { paymentsPluginAbi } from "../constants/abi";
import { getConsts } from "../constants";
import { getBalance } from "../utils/onchain-utils";
import { getAddressByToken } from "../utils/token";
import { informPaymentDelay, warnFailedPayment } from "../email";
import prisma from "../lib/prisma";
import { organization } from "../generated/prisma";

async function loadUpcomingSchedules(now: number) {
  const schedules = await prisma.schedule.findMany({
    where: {
      nextPayout: {
        lte: now + 600,
      },
      active: true,
    },
    orderBy: { nextPayout: "asc" },
    select: { id: true, nextPayout: true },
  });

  return schedules;
}

async function executeSchedulePayment(id: `0x${string}`) {
  const { username, asset, network, amount, org } = await prisma.schedule.findUniqueOrThrow({
    where: { id },
    select: {
      username: true,
      asset: true,
      amount: true,
      network: true,
      org: { select: { name: true, owner: true, wallet: true, plugin: true, id: true } },
    },
  });

  const { CONSTS, pubClient } = await getConsts(network);

  const token = getAddressByToken(network, asset);
  if (!token) return;

  const balance = await getBalance(pubClient, token, org.wallet as `0x${string}`);
  if (balance < Number(amount)) return await handleLowBalance(org, username);

  const plugin = getContract({
    address: org.plugin as `0x${string}`,
    abi: paymentsPluginAbi,
    client: pubClient,
  });

  try {
    await plugin.simulate.executeSchedule([username, id]);
  } catch (error) {
    return await handleSimulationError(error, id, username, org.name); // skip this user as simulation fails
  }

  await plugin.write.executeSchedule([username, id], CONSTS);
}

async function handleLowBalance(org: Pick<organization, "owner" | "name" | "id">, username: string) {
  const [owner, user] = await Promise.all([
    prisma.user.findUniqueOrThrow({ where: { username: org.owner }, select: { email: true } }),
    prisma.user.findUniqueOrThrow({ where: { username }, select: { email: true, name: true } }),
  ]);

  if (!owner?.email || !user?.email) {
    console.error(
      `Organization owner with username ${org.owner} or user with username ${username}, couldn't be found or email is null`
    );
    return;
  }

  const params = { orgName: org.name, orgId: org.id, email: owner.email };
  await Promise.all([
    warnFailedPayment(params),
    informPaymentDelay({
      ...params,
      email: user.email,
      recipient: user.name || username,
    }),
  ]);
}

async function handleSimulationError(error: unknown, id: string, username: string, orgName: string) {
  if (error instanceof ContractFunctionExecutionError) {
    const cause: string = (error.cause as any).data.errorName;
    if (cause === "ScheduleNotActive") {
      await prisma.schedule.update({ where: { id }, data: { active: false } });
    } else {
      console.error(`${error.cause.shortMessage}\n${error.cause.metaMessages?.[0]}`);
    }
  } else {
    const errorMessage = (error as any).metaMessages.join("\n");
    console.error(`Simulation failed for ${username} on Org ${orgName}:\n${errorMessage}`);
  }
}

export default async function scheduleUpcomingPayouts() {
  const nowMs = Date.now();
  const now = Math.floor(nowMs / 1000);
  const schedules = await loadUpcomingSchedules(now);

  for (const s of schedules) {
    const runAt = Number(s.nextPayout) * 1000;
    const delay = runAt - nowMs;

    if (delay <= 0) await executeSchedulePayment(s.id as `0x${string}`);
    else setTimeout(() => executeSchedulePayment(s.id as `0x${string}`), delay);
  }
}
