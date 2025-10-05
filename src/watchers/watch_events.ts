import { createWSClient } from "../utils/config";
import { paymentsPluginAbi } from "../constants/abi";
import redis from "../lib/redis";
import { event, EVENT_NAME } from "../lib/event";
import { replacer } from "../utils";

export default function watch_events() {
  const client = createWSClient("Base");

  client.watchEvent({
    event: paymentsPluginAbi[44],
    strict: true,
    fromBlock: BigInt(36456334),
    onLogs: async (logs) => {
      for (const log of logs) {
        const { args, address, transactionHash } = log;
        const params = { args, address, transactionHash };
        await redis.set(`${EVENT_NAME.SCHEDULE_CREATED}:${transactionHash}`, JSON.stringify(params, replacer));
        event.emit(EVENT_NAME.SCHEDULE_CREATED, params);
      }
    },
  });
}
