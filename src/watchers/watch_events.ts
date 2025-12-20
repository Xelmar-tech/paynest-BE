import { wsClient } from "../utils/config";
import { paymentsPluginAbi } from "../constants/abi";
import redis from "../lib/redis";
import { event, EVENT_NAME } from "../lib/event";
import { replacer } from "../utils";

export default function watch_events() {
  wsClient.watchEvent({
    events: [
      paymentsPluginAbi[43],
      paymentsPluginAbi[45],
      paymentsPluginAbi[48],
      paymentsPluginAbi[50],
    ],
    strict: false,
    fromBlock: BigInt(39698187),
    onLogs: async (logs) => {
      for (const log of logs) {
        const { args, address, transactionHash, eventName } = log;
        console.log(args, eventName);
        const params = { args, address, transactionHash, eventName };
        await redis.set(
          `${EVENT_NAME.EVENT}:${transactionHash}`,
          JSON.stringify(params, replacer)
        );
        event.emit(EVENT_NAME.EVENT, params);
      }
    },
  });
}
