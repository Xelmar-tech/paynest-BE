/// <reference path="./types/chains.d.ts" />

import { getContract } from "viem";
import { db } from "./utils/db";
import { paymentsPluginAbi } from "./utils/abi";
import { getConsts } from "./utils/constants";
import { getBalance } from "./utils";
import { getAddressByToken } from "./utils/token";
import { warnLowBalance } from "./utils/email";

export default async function upcomingPayments(network: network_type) {
  const schedules = await db.getUpcomingSchedules();
  if (schedules.length === 0) return;

  const { pubClient } = await getConsts(network);

  for (const { org_id, amount, asset, network } of schedules) {
    const org = await db.getOrg(org_id);
    if (!org) {
      console.error(`Organization with Org ID ${org_id}, couldn't be found`);
      continue;
    }

    const owner = await db.getUserByUsername(org.owner);
    if (!owner) {
      console.error(`Organization owner with username ${org.owner}, couldn't be found`);
      continue;
    }

    const token = getAddressByToken(network, asset);
    if (!token) continue;

    const balance = await getBalance(pubClient, token, org.wallet);
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
