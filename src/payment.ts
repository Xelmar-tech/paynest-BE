/// <reference path="./types/chains.d.ts" />

import { getContract } from "viem";
import DB from "./utils/db";
import { OrganizationABI } from "./utils/abi";
import { PaymentKey } from "./utils/constants";
import { createPubClient, getChain } from "./utils/config";
import { privateKeyToAccount } from "viem/accounts";

async function getConsts(network: network_type) {
  const ADMIN = privateKeyToAccount(PaymentKey);
  const chain = getChain(network);
  const pubClient = createPubClient(network);
  const gas = await pubClient.estimateFeesPerGas({ chain });
  const CONSTS = { ...gas, chain, account: ADMIN } as const;
  return { CONSTS, gas, pubClient };
}

export default async function payments(network: network_type) {
  const db = new DB();

  const schedules = await db.getPendingSchedules()
  if (schedules.length === 0) return

  const { CONSTS, pubClient } = await getConsts(network);

  for (const { org_id, username } of schedules) {
    const org_ = await db.getOrg(org_id)
    const ORG = getContract({
      address: org_.address,
      abi: OrganizationABI,
      client: pubClient
    })
    await ORG.write.requestSchedulePayout([username], CONSTS)
  }
}
