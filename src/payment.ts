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
    if (!org_) return;
    const ORG = getContract({
      address: org_.wallet,
      abi: OrganizationABI,
      client: pubClient,
    });
    await ORG.write.requestSchedulePayout([username], CONSTS);
  }
}
