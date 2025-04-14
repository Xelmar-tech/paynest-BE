import { formatUnits, getContract, parseUnits } from "viem";
import payments from "./payment";
import transactions, { getDecimals } from "./transactions";
import db from "./utils/db";
import OrganizationABI from "./utils/abi";
import { getConsts } from "./utils/constants";

async function testStevenSchedules() {
  const s = await db.getSchedules();
  const steven_schedules = s.filter((s) => s.username === "steven");
  const { pubClient } = await getConsts("Base");

  for (const steven_schedule of steven_schedules) {
    const org_ = await db.getOrg(steven_schedule.org_id);
    if (!org_) {
      console.error(`Organization with Org ID ${steven_schedule.org_id} couldn't be found`);
      continue;
    }

    const ORG = getContract({
      address: org_.wallet,
      abi: OrganizationABI,
      client: pubClient,
    });

    const schedule = await ORG.read.getSchedule(["steven"]);
    console.log(`
    Blockchain Schedule for ${org_.name}:
     - Next Payout: ${schedule.nextPayout}
     - Is One Time Payment: ${schedule.isOneTime}
     - Is Active: ${schedule.active}  
      
    Database Schedule for ${org_.name}:
     - Next Payout: ${steven_schedule.nextPayout}
     - Is One Time Payment: ${steven_schedule.isOneTime}
     - Is Active: ${steven_schedule.active}      
      `);
  }
}
async function testStevenStreams() {
  const s = await db.getStreams();
  const steven_streams = s.filter((s) => s.username === "steven");
  const { pubClient } = await getConsts("Base");

  for (const steven_stream of steven_streams) {
    const org_ = await db.getOrg(steven_stream.org_id);
    if (!org_) {
      console.error(`Organization with Org ID ${steven_stream.org_id} couldn't be found`);
      continue;
    }

    const ORG = getContract({
      address: org_.wallet,
      abi: OrganizationABI,
      client: pubClient,
    });

    const stream = await ORG.read.getStream(["steven"]);
    const decimals = await getDecimals(pubClient, stream.token);
    const amount = formatUnits(stream.amount, decimals);
    console.log(`
    Blockchain Schedule for ${org_.name}:
     - Last Payout: ${stream.lastPayout}
     - Amount/Sec: ${amount} ${steven_stream.asset}
     - Is Active: ${stream.active}  
      
    Database Schedule for ${org_.name}:
     - Last Payout: ${steven_stream.lastPayout}
     - Amount/Sec: ${steven_stream.amount} ${steven_stream.asset}
     - Is Active: ${steven_stream.active}      
      `);
  }
}

async function main() {
  // await payments("Base");
  await testStevenStreams();
}
main();
