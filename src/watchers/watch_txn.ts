/// <reference path="../types/logs.d.ts" />

import { wsClient } from "../utils/config";
import redis from "../lib/redis";
import { event, EVENT_NAME } from "../lib/event";
import { replacer } from "../utils";
import { paymentsPluginAbi } from "../constants/abi";

export default async function watch_transactions() {
  wsClient.watchEvent({
    events: [paymentsPluginAbi[49], paymentsPluginAbi[51], paymentsPluginAbi[44]],
    strict: true,
    fromBlock: BigInt(36456334),
    onLogs: async (logs) => {
      for (const log of logs) {
        const { args, address, transactionHash, eventName } = log;
        const params = { transactionHash, args, address, eventName };
        await redis.set(`${EVENT_NAME.TRANSACTION}:${transactionHash}`, JSON.stringify(params, replacer));
        event.emit(EVENT_NAME.TRANSACTION, params);
      }
    },
  });
}
