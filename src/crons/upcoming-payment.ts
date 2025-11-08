import { getBalance } from "../utils/onchain-utils";
import { getAddressByToken } from "../utils/token";
import { warnLowBalance } from "../email";
import db from "../db";
import { withRetry } from "../utils";

async function getSchedules() {
  const now = Math.floor(Date.now() / 1000);
  const rows = await db
    .selectFrom("schedule")
    .innerJoin("organization", "organization.id", "schedule.org_id")
    .select([
      "schedule.id",
      "schedule.amount",
      "schedule.asset",
      "schedule.network",

      "organization.owner as org_owner",
      "organization.name as org_name",
      "organization.id as org_id",
      "organization.wallet as org_wallet",
    ])
    .where("schedule.active", "=", true)
    .where("nextPayout", ">=", now.toString())
    .where("nextPayout", "<=", (now + 3600).toString())
    .execute();

  const schedules = rows.map((r) => ({
    id: r.id,
    amount: r.amount,
    asset: r.asset,
    network: r.network,
    org: {
      owner: r.org_owner,
      name: r.org_name,
      id: r.org_id,
      wallet: r.org_wallet,
    },
  }));

  return schedules;
}

export default async function upcomingPayments() {
  const schedules = await withRetry(() => getSchedules());
  if (schedules.length === 0) return;

  for (const { amount, asset, network, org } of schedules) {
    const owner = await db
      .selectFrom("user")
      .select("email")
      .where("username", "=", org.owner)
      .executeTakeFirstOrThrow();

    const token = getAddressByToken(network, asset);
    if (!token) continue;

    const balance = await getBalance(token, org.wallet as `0x${string}`);
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
