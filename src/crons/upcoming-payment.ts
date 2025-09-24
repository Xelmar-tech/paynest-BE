import { getConsts } from "../constants";
import { getBalance } from "../utils/onchain-utils";
import { getAddressByToken } from "../utils/token";
import { warnLowBalance } from "../email";
import prisma from "../lib/prisma";

export default async function upcomingPayments() {
  const now = Math.floor(Date.now() / 1000);
  const schedules = await prisma.schedule.findMany({
    where: {
      nextPayout: {
        gte: now,
        lte: now + 3600,
      },
      active: true,
    },
    select: {
      id: true,
      amount: true,
      asset: true,
      network: true,
      org: {
        select: {
          owner: true,
          name: true,
          id: true,
          wallet: true,
        },
      },
    },
  });
  if (schedules.length === 0) return;

  const { pubClient } = await getConsts("Base");

  for (const { amount, asset, network, org } of schedules) {
    const owner = await prisma.user.findUniqueOrThrow({ where: { username: org.owner }, select: { email: true } });

    const token = getAddressByToken(network, asset);
    if (!token) continue;

    const balance = await getBalance(pubClient, token, org.wallet as `0x${string}`);
    if (balance < Number(amount)) {
      if (owner.email === null) {
        console.error(`Cannot notify ${org.name} owner with username ${org.owner}, email is null`);
      } else {
        const params = { orgName: org.name, orgId: org.id, email: owner.email };
        await warnLowBalance(params);
      }
    }
  }
}
