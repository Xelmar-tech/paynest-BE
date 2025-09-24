/// <reference path="../types/chains.d.ts" />
/// <reference path="../types/logs.d.ts" />

import { parseAbiItem } from "viem";
import { db } from "../utils/db";
import { createPubClient } from "../utils/config";
import { getScheduleInfo, updateSchedule } from "../watchers/watch_txn";

export default async function fetchPastMissingTxns(network: network_type) {
  const client = createPubClient(network);
  const logs = await client.getLogs({
    event: parseAbiItem(
      "event ScheduleExecuted(string username, bytes32 indexed scheduleId, address indexed token, uint256 amount, uint256 periods, address indexed recipient)"
    ),
    strict: true,
    fromBlock: BigInt(35543528),
  });

  console.log("Fetched logs", logs.length);

  for (const log of logs) {
    const { args, address, transactionHash } = log;
    const existingTx = await db.getTransaction(transactionHash);
    if (existingTx) continue;

    const { username, scheduleId } = args;
    const info = await getScheduleInfo(client, args);

    if (!info) {
      console.log("No schedule info found for given args", args);

      continue;
    }

    const txn: Transaction = {
      tx_id: transactionHash,
      network: "Base",
      amount: info.payout,
      asset: info.asset,
      recipient: info.recipient,
      org_id: info.orgId,
      username,
      schedule_id: scheduleId,
      stream_id: null,
    };

    const payout = Number(info.payout);

    await Promise.all([
      db.addTransaction(txn),
      updateSchedule(client, address, { username, payout, id: scheduleId }),
      db.addUserTP(username, payout),
    ]);
  }
}
