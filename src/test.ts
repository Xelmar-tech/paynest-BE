import { decodeEventLog, formatUnits, parseAbi } from "viem";
import { createPubClient } from "./utils/config";
import watch_transactions from "./watch_txn";

async function main() {
  // const client = createPubClient("Base");
  // const [log] = await client.getLogs({
  //   events: parseAbi([
  //     "event ScheduleExecuted(string username, bytes32 indexed scheduleId, address indexed token, uint256 amount, uint256 periods, address indexed recipient)",
  //     "event StreamStateChanged(string username, bytes32 indexed streamId, uint8 oldState, uint8 newState)",
  //     "event FlowRateUpdated(string username, bytes32 indexed streamId, uint216 oldAmountPerSec, uint216 newAmountPerSec)",
  //   ]),
  //   strict: true,
  //   fromBlock: BigInt(33456608),
  //   toBlock: BigInt(33456628),
  // });

  watch_transactions("Base");
}
main();
