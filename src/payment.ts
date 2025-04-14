/// <reference path="./types/chains.d.ts" />

import { getContract } from "viem";
import db from "./utils/db";
import OrganizationABI from "./utils/abi";
import { getConsts } from "./utils/constants";

export default async function payments(network: network_type) {
  const schedules = await db.getPendingSchedules();
  if (schedules.length === 0) return;

  const { CONSTS, pubClient } = await getConsts(network);

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

    try {
      await ORG.simulate.requestSchedulePayout([username]);
    } catch (error) {
      if ((error as any).metaMessages) {
        const errorMessage = (error as any).metaMessages.join("\n");
        console.error(`Simulation failed for ${username} on Org ${org_.name}:\n${errorMessage}`);
      } else {
        console.error(`Simulation failed for ${username} on Org ${org_.name}`);
      }
      const { nextPayout, isOneTime, active } = await ORG.read.getSchedule([username]);
      console.info("Updating DB to match Blockchain records...");

      await db.updateSchedule(username, org_id, nextPayout, isOneTime, active);
      continue; // skip this user if simulation fails
    }

    try {
      const hash = await ORG.write.requestSchedulePayout([username], CONSTS);
      await pubClient.waitForTransactionReceipt({
        hash,
        confirmations: 10,
      });

      const { nextPayout, isOneTime, active } = await ORG.read.getSchedule([username]);
      await db.updateSchedule(username, org_id, nextPayout, isOneTime, active);
    } catch {
      continue;
    }
  }
}
