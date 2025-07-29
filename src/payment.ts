/// <reference path="./types/chains.d.ts" />

import { getContract } from "viem";
import db from "./utils/db";
import { paymentsPluginAbi } from "./utils/abi";
import { getConsts } from "./utils/constants";
import { getBalance } from "./utils";
import { getAddressByToken } from "./utils/token";

export default async function payments(network: network_type) {
  const schedules = await db.getPendingSchedules();
  if (schedules.length === 0) return;

  const { CONSTS, pubClient } = await getConsts(network);

  for (const { org_id, username, amount, asset, id, network } of schedules) {
    const org = await db.getOrg(org_id);
    if (!org) {
      console.error(`Organization with Org ID ${org_id} couldn't be found`);
      continue;
    }

    const token = getAddressByToken(network, asset);
    if (!token) continue;
    const balance = await getBalance(pubClient, token, org.wallet);

    if (balance < Number(amount)) {
      console.warn(
        `The Organization wallet of ${org.name} has insufficient ${asset} to pay ${username} his scheduled ${Number(
          amount
        )}${asset}\nPlease top up the wallet in order to pay!`
      );
      continue;
    }

    const plugin = getContract({
      address: org.plugin,
      abi: paymentsPluginAbi,
      client: pubClient,
    });

    try {
      await plugin.simulate.executeSchedule([username, id]);
    } catch (error) {
      if ((error as any).metaMessages) {
        const errorMessage = (error as any).metaMessages.join("\n");
        console.error(`Simulation failed for ${username} on Org ${org.name}:\n${errorMessage}`);
      } else {
        console.error(`Simulation failed for ${username} on Org ${org.name}~ ${JSON.stringify(error, null, 2)}`);
      }
      continue; // skip this user if simulation fails
    }

    try {
      await plugin.write.executeSchedule([username, id], CONSTS);
    } catch {
      continue;
    }
  }
}
