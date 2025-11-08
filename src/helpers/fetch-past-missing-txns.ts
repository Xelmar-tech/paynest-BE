/// <reference path="../types/logs.d.ts" />

import { type Address, parseAbiItem } from "viem";
import { pbClient } from "../utils/config";
import addTransaction from "../core/transaction";
import db from "../db";
import { getTxBlock } from "./fix-transaction-dates";
import { withRetry } from "../utils";

export default async function fetchPastMissingTxns() {
  const { tx_id } = await withRetry(() =>
    db.selectFrom("transaction").select("tx_id").orderBy("created_at", "desc").limit(1).executeTakeFirstOrThrow()
  );
  const blockNumber = await getTxBlock(tx_id as Address);

  const logs = await pbClient.getLogs({
    event: parseAbiItem(
      "event ScheduleExecuted(string username, bytes32 indexed scheduleId, address indexed token, uint256 amount, uint256 periods, address indexed recipient)"
    ),
    strict: true,
    fromBlock: blockNumber + BigInt(1),
  });

  for (const log of logs) {
    const { args, address, transactionHash, eventName } = log;
    await addTransaction({ args, address, transactionHash, eventName });
  }
}
