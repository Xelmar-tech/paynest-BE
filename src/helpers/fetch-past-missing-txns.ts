/// <reference path="../types/logs.d.ts" />

import { type Address, parseAbiItem } from "viem";
import { pbClient } from "../utils/config";
import addTransaction from "../core/transaction";
import db from "../db";
import { getTxBlock } from "./onchain-helpers";
import { withRetry } from "../utils";
import { paymentsPluginAbi } from "../constants/abi";

export default async function fetchPastMissingTxns() {
  const { tx_id } = await withRetry(() =>
    db.selectFrom("transaction").select("tx_id").orderBy("created_at", "desc").limit(1).executeTakeFirstOrThrow()
  );
  const blockNumber = await getTxBlock(tx_id as Address);

  const logs = await pbClient.getLogs({
    events: [paymentsPluginAbi[49], paymentsPluginAbi[51]],
    strict: true,
    fromBlock: blockNumber + BigInt(1),
  });

  for (const log of logs) {
    const { args, address, transactionHash, eventName } = log;
    await addTransaction({ args, address, transactionHash, eventName });
  }
}
