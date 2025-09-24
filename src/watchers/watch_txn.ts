/// <reference path="../types/chains.d.ts" />
/// <reference path="../types/logs.d.ts" />

import { formatUnits, parseAbi, keccak256, toBytes, getContract, decodeEventLog } from "viem";
import { db } from "../utils/db";
import { createPubClient, type Client } from "../utils/config";
import { getAddressByToken } from "../utils/token";
import { getDecimals, StreamState } from "../utils/onchain-utils";
import { llamaPayAbi, paymentsPluginAbi } from "../constants/abi";

const withdrawTopic = keccak256(toBytes("Withdraw(address,address,uint216,bytes32,uint256)"));
// const transferTopic = keccak256(toBytes("Transfer(address,address,uint256)"));

export default async function watch_transactions(network: network_type) {
  const client = createPubClient(network);
  client.watchEvent({
    events: parseAbi([
      "event ScheduleExecuted(string username, bytes32 indexed scheduleId, address indexed token, uint256 amount, uint256 periods, address indexed recipient)",
      "event StreamExecuted(string username, bytes32 streamId, address token, address recipient)",
      "event StreamMigrated(string username, bytes32 indexed streamId, address oldRecipient, address indexed newRecipient)",
      "event StreamStateChanged(string username, bytes32 indexed streamId, uint8 oldState, uint8 newState)",
      "event FlowRateUpdated(string username, bytes32 indexed streamId, uint216 oldAmountPerSec, uint216 newAmountPerSec)",
    ]),
    strict: true,
    fromBlock: BigInt(34125433),
    onLogs: async (logs) => {
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
          db.addTransaction(txn),
          updatePayment(client, address, { username, payout: Number(_payout), id: _id }),
          db.addUserTP(username, Number(_payout)),
        ]);
      }
    },
  });
}

async function getScheduleInfo(client: Client, args: ScheduleExecutedLogArgs) {
  const [decimals, schedule] = await Promise.all([getDecimals(client, args.token), db.getSchedule(args.scheduleId)]);
  if (!schedule) return;
  const payout = formatUnits(args.amount, decimals);
  return { payout, recipient: args.recipient, orgId: schedule.org_id, asset: schedule.asset };
}

async function getStreamInfo(client: Client, hash: Address, id: Address) {
  const [{ logs }, stream] = await Promise.all([
    client.getTransactionReceipt({
      hash,
    }),
    db.getStream(id),
  ]);

  if (!stream) return;
  const token = getAddressByToken(stream.network, stream.asset);
  if (!token) return;

  const decimals = await getDecimals(client, token);

  const [withdraw] = logs
    .filter((log) => log.topics[0] === withdrawTopic)
    .map((log) =>
      decodeEventLog({
        abi: llamaPayAbi,
        data: log.data,
        topics: log.topics,
      })
    );

  const payout = formatUnits(withdraw.args.amount, decimals);
  return { payout, recipient: withdraw.args.to, orgId: stream.org_id, asset: stream.asset };
}

async function updateSchedule(
  client: Client,
  pluginAddr: Address,
  data: { username: string; payout: number; id: Address }
) {
  const plugin = getContract({
    address: pluginAddr,
    abi: paymentsPluginAbi,
    client,
  });

  const schedule = await plugin.read.getSchedule([data.username, data.id]);

  const updateFields = {
    nextPayout: schedule.nextPayout,
    active: schedule.active,
    payout: data.payout,
  };

  // console.log(updateFields, schedule);

  await db.updatePaymentModel("schedule", data.id, updateFields);
}

async function updateStream(
  client: Client,
  pluginAddr: Address,
  data: { username: string; payout: number; id: Address }
) {
  const plugin = getContract({
    address: pluginAddr,
    abi: paymentsPluginAbi,
    client,
  });

  const stream = await plugin.read.getStream([data.username, data.id]);
  const activeState = stream.state === StreamState.Active;

  const updateFields = {
    lastPayout: Math.floor(new Date().getTime() / 1000),
    active: activeState,
    payout: data.payout,
    state: activeState ? "active" : stream.state === StreamState.Paused ? "paused" : "cancelled",
  };

  await db.updatePaymentModel("stream", data.id, updateFields);
}

export { updateSchedule, updateStream, getScheduleInfo, getStreamInfo };
