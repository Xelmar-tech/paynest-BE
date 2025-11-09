import { ContractFunctionExecutionError, getContract } from "viem";
import { paymentsPluginAbi } from "../constants/abi";
import { getConsts } from "../constants";
import { getBalance } from "../utils/onchain-utils";
import { getAddressByToken } from "../utils/token";
import { informPaymentDelay, warnFailedPayment } from "../email";
import type { Organization } from "../db/types";
import db from "../db";
import { pbClient } from "../utils/config";
import { withRetry } from "../utils";

async function loadUpcomingSchedules(now: number) {
  const schedules = await db
    .selectFrom("schedule")
    .select(["id", "nextPayout"])
    .where("nextPayout", "<=", (now + 600).toString()) // because Decimal → string
    .where("active", "=", true)
    .orderBy("nextPayout", "asc")
    .execute();

  return schedules;
}

async function getScheduleAndOrgByScheduleId(id: `0x${string}`) {
  const row = await db
    .selectFrom("schedule")
    .innerJoin("organization", "organization.id", "schedule.org_id")
    .select([
      "schedule.username",
      "schedule.asset",
      "schedule.amount",
      "schedule.network",

      // organization fields
      "organization.name as org_name",
      "organization.owner as org_owner",
      "organization.wallet as org_wallet",
      "organization.plugin as org_plugin",
      "organization.id as org_id",
    ])
    .where("schedule.id", "=", id)
    .executeTakeFirst();

  if (!row) throw new Error("Schedule not found");

  return {
    username: row.username,
    asset: row.asset,
    amount: row.amount,
    network: row.network,
    org: {
      name: row.org_name,
      owner: row.org_owner,
      wallet: row.org_wallet,
      plugin: row.org_plugin,
      id: row.org_id,
    },
  };
}

async function executeSchedulePayment(id: `0x${string}`) {
  const { username, asset, network, amount, org } = await getScheduleAndOrgByScheduleId(id);
  const CONSTS = await getConsts(network);

  const token = getAddressByToken(network, asset);
  if (!token) return;

  const balance = await getBalance(token, org.wallet as `0x${string}`);
  if (balance < Number(amount)) return await handleLowBalance(org, username);

  const plugin = getContract({
    address: org.plugin as `0x${string}`,
    abi: paymentsPluginAbi,
    client: pbClient,
  });

  try {
    await plugin.simulate.executeSchedule([id]);
  } catch (error) {
    // console.log(error, "simulate error");
    return await handleSimulationError(error, id, username, org.name); // skip this user as simulation fails
  }

  await plugin.write.executeSchedule([id], CONSTS);
}

async function handleLowBalance(org: Pick<Organization, "owner" | "name" | "id">, username: string) {
  const [owner, user] = await Promise.all([
    db.selectFrom("user").select("email").where("username", "=", org.owner).executeTakeFirstOrThrow(),
    db.selectFrom("user").select(["email", "name"]).where("username", "=", username).executeTakeFirstOrThrow(),
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
      await db.updateTable("schedule").set({ active: false }).where("id", "=", id).execute();
    } else {
      console.error(`${error.cause.shortMessage}\n${error.cause.metaMessages?.[0]}`);
    }
  } else {
    const errorMessage = (error as any).metaMessages.join("\n");
    console.error(`Simulation failed for ${username} on Org ${orgName}:\n${errorMessage}`);
  }
}

export default async function paySchedulePayouts() {
  const nowMs = Date.now();
  const now = Math.floor(nowMs / 1000);
  const schedules = await withRetry(() => loadUpcomingSchedules(now));

  for (const s of schedules) {
    const runAt = Number(s.nextPayout) * 1000;
    const delay = runAt - nowMs;

    if (delay <= 0) await executeSchedulePayment(s.id as `0x${string}`);
    else setTimeout(() => executeSchedulePayment(s.id as `0x${string}`), delay);
  }
}
