import { parseAbi } from "viem";
import { createPubClient } from "./utils/config";
import { getScheduleInfo, getStreamInfo, updateSchedule, updateStream } from "./watch_txn";
import { StreamState } from "./utils";
import db from "./utils/db";

async function main() {
  const client = createPubClient("Base");
  const logs = await client.getLogs({
    events: parseAbi([
      "event ScheduleExecuted(string username, bytes32 indexed scheduleId, address indexed token, uint256 amount, uint256 periods, address indexed recipient)",
      "event StreamExecuted(string username, bytes32 streamId, address token, address recipient)",
      "event StreamMigrated(string username, bytes32 indexed streamId, address oldRecipient, address indexed newRecipient)",
      "event StreamStateChanged(string username, bytes32 indexed streamId, uint8 oldState, uint8 newState)",
      "event FlowRateUpdated(string username, bytes32 indexed streamId, uint216 oldAmountPerSec, uint216 newAmountPerSec)",
    ]),
    strict: true,
    fromBlock: BigInt(34125433),
    toBlock: BigInt(34125436),
  });

  for (const log of logs) {
    const { args, address, transactionHash, eventName } = log;
    const { username } = args;
    const info =
      eventName === "ScheduleExecuted"
        ? await getScheduleInfo(client, args)
        : await getStreamInfo(client, transactionHash, args.streamId);

    if (!info) continue;

    const txn: Transaction = {
      tx_id: transactionHash,
      network: "Base",
      amount: info.payout,
      asset: info.asset,
      recipient: info.recipient,
      org_id: info.orgId,
      username,
      schedule_id: eventName === "ScheduleExecuted" ? args.scheduleId : null,
      stream_id: eventName !== "ScheduleExecuted" ? args.streamId : null,
    };

    const updatePayment = eventName === "ScheduleExecuted" ? updateSchedule : updateStream;
    // if stream state changed to active, payout should be 0 because it was cancelled and is restarting
    const _payout =
      eventName === "StreamStateChanged" ? (args.newState === StreamState.Active ? "0" : info.payout) : info.payout;
    const _id = eventName === "ScheduleExecuted" ? args.scheduleId : args.streamId;

    await Promise.all([
      //   db.addTransaction(txn),
      // updatePayment(client, address, { username, payout: Number(_payout), id: _id }),
      //   db.addUserTP(username, Number(_payout)),
    ]);

    // console.log("Done");
  }
}
main();
