/// <reference path="./types/chains.d.ts" />

import { getContract } from "viem";
import { db } from "./utils/db";
import { paymentsPluginAbi } from "./utils/abi";
import { getConsts } from "./utils/constants";
import { getBalance } from "./utils";
import { getAddressByToken } from "./utils/token";
import { informPaymentDelay, warnFailedPayment } from "./utils/email";

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
      const [owner, user] = await Promise.all([db.getUserByUsername(org.owner), db.getUserByUsername(username)]);
      if (!owner?.email || !user?.email) {
        console.error(
          `Organization owner with username ${org.owner} or user with username ${username}, couldn't be found or email is null`
        );
        continue;
      }
      const params = { orgName: org.name, orgId: org.id, email: owner.email };
      await Promise.all([
        warnFailedPayment(params),
        informPaymentDelay({ ...params, email: user.email, recipient: user.name || username }),
      ]);
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
