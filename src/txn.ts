/// <reference path="./types/chains.d.ts" />

import { formatUnits, parseAbi } from "viem";
import db from "./utils/db";
import { createPubClient } from "./utils/config";
import { getTokenByAddress } from "./utils/token";
import { getDecimals } from "./utils";
import { updateSchedule, updateStream } from "./watch_txn";

export default async function transactions(network: network_type) {
  const client = createPubClient(network);
  const logs = await client.getLogs({
    events: parseAbi([
      "event StreamPayout(string username,address token,uint256 amount)",
      "event SchedulePayout(string username,address token,uint256 amount)",
    ]),
    strict: true,
    fromBlock: "earliest", // BigInt(26040510),
    toBlock: "latest",
  });

  console.log(`Found ${logs.length} logs`);

  for (const log of logs) {
    const { args, address, eventName, transactionHash } = log;
    const { username, token, amount } = args;

    const [org, decimals] = await Promise.all([db.getOrgByWallet(address), getDecimals(client, token)]);
    if (!org) {
      console.error(`❌ No organization found for address: ${address}`);
      continue;
    }

    const payout = formatUnits(amount, decimals);
    const asset = getTokenByAddress(network, token);
    if (!asset) {
      console.error(`❌ No asset found for token: ${token}`);
      continue;
    }

    const updatePayment = eventName === "SchedulePayout" ? updateSchedule : updateStream;
    const tx = {
      recipient: username,
      amount: payout,
      tx_id: transactionHash,
      org_id: org.id,
      network,
      asset,
    };

    try {
      await db.addTransaction(tx);

      // If it reaches here, transaction is new – proceed with updates
      await Promise.all([db.addUserTP(username, Number(payout)), updatePayment(username, org, Number(payout))]);
    } catch (error) {
      if (isUniqueConstraintError(error)) {
        // Duplicate tx_id – transaction already indexed, skip
        console.log(`Transaction ${transactionHash} already exists. Skipping.`);
      } else {
        // Unexpected error – rethrow or log
        console.error("Unexpected DB error:", error);
        throw error;
      }
    }

    console.log(`${username} has claimed $${payout.slice(0, 6)}${asset} in a ${eventName} from ${org.name}\n`);
  }
}
function isUniqueConstraintError(error: any): boolean {
  return (
    error.code === "23505" || error.constraint?.includes("tx_id") // PG raw SQL
  );
}
