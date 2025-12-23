import { wsClient } from "./utils/config";
import { paymentsPluginAbi } from "./constants/abi";
import redis from "./lib/redis";
import { event, EVENT_NAME, REDIS_KEY } from "./lib/event";
import { replacer } from "./utils";

const EVENT = [
  paymentsPluginAbi[43],
  paymentsPluginAbi[45],
  paymentsPluginAbi[48],
  paymentsPluginAbi[50],
] as const;

const TRANSACTION = [
  paymentsPluginAbi[49],
  paymentsPluginAbi[51],
  paymentsPluginAbi[44],
] as const;

export default function watch_events(fromBlock: number) {
  wsClient.watchEvent({
    events: [...EVENT, ...TRANSACTION],
    strict: true,
    fromBlock: BigInt(fromBlock),
    onLogs: async (logs) => {
      for (const log of logs) {
        const { args, address, transactionHash, eventName, logIndex } = log;
        const params = { args, address, transactionHash, eventName, logIndex };

        const txKey = `${EVENT_NAME.TRANSACTION}:${transactionHash}:${logIndex}`;
        const eventKey = `${EVENT_NAME.EVENT}:${transactionHash}:${logIndex}`;

        console.log(eventName, logIndex);

        switch (eventName) {
          case "InvoicePaid":
            await redis.set(txKey, JSON.stringify(params, replacer));
            event.emit(EVENT_NAME.TRANSACTION, params);
            await redis.set(eventKey, JSON.stringify(params, replacer));
            event.emit(EVENT_NAME.EVENT, params);
            break;

          case "ScheduleExecuted":
          case "StreamExecuted":
            await redis.set(txKey, JSON.stringify(params, replacer));
            event.emit(EVENT_NAME.TRANSACTION, params);
            break;

          case "InvoiceCreated":
          case "InvoiceRejected":
          case "ScheduleCreated":
          case "StreamCreated":
            await redis.set(eventKey, JSON.stringify(params, replacer));
            event.emit(EVENT_NAME.EVENT, params);
            break;

          default:
            console.log(eventName, "Event skipped");
            break;
        }

        await redis.set(REDIS_KEY.WATCH_EVENT, log.blockNumber.toString());
      }
    },
    onError: (error) => {
      console.error("Error in watcher", error);
    },
  });
}
