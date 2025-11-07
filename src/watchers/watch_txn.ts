/// <reference path="../types/logs.d.ts" />

import { parseAbi } from "viem";
import { wsClient } from "../utils/config";
import redis from "../lib/redis";
import { event, EVENT_NAME } from "../lib/event";
import { replacer } from "../utils";

export default async function watch_transactions() {
  wsClient.watchEvent({
    events: parseAbi([
      "event ScheduleExecuted(string username, bytes32 indexed scheduleId, address indexed token, uint256 amount, uint256 periods, address indexed recipient)",
      "event StreamExecuted(string username, bytes32 streamId, address token, address recipient)",
      "event StreamMigrated(string username, bytes32 indexed streamId, address oldRecipient, address indexed newRecipient)",
      "event StreamStateChanged(string username, bytes32 indexed streamId, uint8 oldState, uint8 newState)",
      "event FlowRateUpdated(string username, bytes32 indexed streamId, uint216 oldAmountPerSec, uint216 newAmountPerSec)",
    ]),
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
