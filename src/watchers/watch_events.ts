import { createWSClient } from "../utils/config";
import { paymentsPluginAbi } from "../constants/abi";
import redis from "../lib/redis";
import { event, EVENT_NAME } from "../lib/event";

export default function watch_events() {
  const client = createWSClient("Base");

  client.watchEvent({
    // events: parseAbi([
    //   "event ScheduleCreated(string username, bytes32 indexed scheduleId, address indexed token, uint256 amount, uint8 interval, address indexed recipient, bool isOneTime, uint40 firstPaymentDate)",
    // ]),
    event: paymentsPluginAbi[44],
    strict: true,
    fromBlock: BigInt(35980400),
    onLogs: async (logs) => {
      console.log(logs.length, "Created Schedules logs from event watcher");
      for (const log of logs) {
        const { args, address, transactionHash } = log;
        const params = { args, address, transactionHash };
        await redis.set(`${EVENT_NAME.SCHEDULE_CREATED}:${transactionHash}`, JSON.stringify(params));
        event.emit(EVENT_NAME.SCHEDULE_CREATED, params);
      }
    },
  });
}
