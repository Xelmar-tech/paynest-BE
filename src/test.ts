import { formatUnits, getContract, parseUnits } from "viem";
import payments from "./payment";
import transactions from "./txn";
import db from "./utils/db";
import OrganizationABI from "./utils/abi";
import { getConsts } from "./utils/constants";
import { getDecimals } from "./utils";

async function testStevenSchedules() {
  const schedules = await db.getSchedules();
  const { pubClient } = await getConsts("Base");

  for (const { org_id, username } of schedules) {
    const org_ = await db.getOrg(org_id);
    if (!org_) {
      console.error(`Organization with Org ID ${org_id} couldn't be found`);
      continue;
    }

    const ORG = getContract({
      address: org_.wallet,
      abi: OrganizationABI,
      client: pubClient,
    });

    const schedule = await ORG.read.getSchedule([username]);
    const decimals = await getDecimals(pubClient, schedule.token);
    const amount = formatUnits(schedule.amount, decimals);

    await db.updateScheduleAmount(username, org_id, Number(amount));
  }
}
async function testStevenStreams() {
  const streams = await db.getStreams();
  const { pubClient } = await getConsts("Base");

  for (const { org_id, username, asset, ...stream_ } of streams) {
    const org_ = await db.getOrg(org_id);
    if (!org_) {
      console.error(`Organization with Org ID ${org_id} couldn't be found`);
      continue;
    }

    const ORG = getContract({
      address: org_.wallet,
      abi: OrganizationABI,
      client: pubClient,
    });

    const stream = await ORG.read.getStream([username]);
    const decimals = await getDecimals(pubClient, stream.token);
    const amount = formatUnits(stream.amount, decimals);

    await db.updateStreamAmount(username, org_id, Number(amount));
  }
}

async function main() {
  await transactions("Base");
  // await testStevenSchedules();
}
main();
