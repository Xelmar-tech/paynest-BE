/// <reference path="../types/logs.d.ts" />

import {
  formatUnits,
  parseAbi,
  keccak256,
  toBytes,
  getContract,
  decodeEventLog,
  type Address,
} from "viem";
import { createPubClient, type Client } from "../utils/config";
import { getAddressByToken } from "../utils/token";
import { getDecimals, StreamState } from "../utils/onchain-utils";
import { llamaPayAbi, paymentsPluginAbi } from "../constants/abi";
import prisma from "../lib/prisma";
import { stream_state } from "../generated/prisma";

const withdrawTopic = keccak256(
  toBytes("Withdraw(address,address,uint216,bytes32,uint256)")
);
// const transferTopic = keccak256(toBytes("Transfer(address,address,uint256)"));

export default async function watch_transactions() {
  const client = createPubClient("Base");

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

        const txn = {
          tx_id: transactionHash,
          network: "Base",
          amount: info.payout,
          asset: info.asset,
          recipient: info.recipient,
          org_id: info.orgId,
          username,
          schedule_id:
            eventName === "ScheduleExecuted" ? args.scheduleId : null,
          stream_id: eventName !== "ScheduleExecuted" ? args.streamId : null,
        } as const;

        const updatePayment =
          eventName === "ScheduleExecuted" ? updateSchedule : updateStream;
        // if stream state changed to active, payout should be 0 because it was cancelled and is restarting
        const _payout =
          eventName === "StreamStateChanged"
            ? args.newState === StreamState.Active
              ? "0"
              : info.payout
            : info.payout;
        const _id =
          eventName === "ScheduleExecuted" ? args.scheduleId : args.streamId;

        await Promise.all([
          prisma.transaction.create({ data: txn }),
          updatePayment(client, address, {
            username,
            payout: Number(_payout),
            id: _id,
          }),
          prisma.user.update({
            where: { username },
            data: { total_payout: { increment: Number(_payout) } },
          }),
        ]);
      }
    },
  });
}

async function getScheduleInfo(client: Client, args: ScheduleExecutedLogArgs) {
  try {
    const [{ org_id, asset }, decimals] = await Promise.all([
      prisma.schedule.findUniqueOrThrow({
        where: { id: args.scheduleId },
        select: { org_id: true, asset: true },
      }),
      getDecimals(client, args.token),
    ]);

    const payout = formatUnits(args.amount, decimals);
    return { payout, recipient: args.recipient, orgId: org_id, asset };
  } catch (error) {
    console.error("Error in getScheduleInfo", error);
    return;
  }
}

async function getStreamInfo(client: Client, hash: Address, id: Address) {
  try {
    const [{ logs }, { org_id, asset, network }] = await Promise.all([
      client.getTransactionReceipt({
        hash,
      }),
      prisma.stream.findUniqueOrThrow({
        where: { id },
        select: { org_id: true, asset: true, network: true },
      }),
    ]);

    const token = getAddressByToken(network, asset);
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
    return { payout, recipient: withdraw.args.to, orgId: org_id, asset };
  } catch (error) {
    console.error("Error in getStreamInfo", error);
    return;
  }
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

  await prisma.schedule.update({
    where: { id: data.id },
    data: updateFields,
  });
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
    state: activeState
      ? stream_state.active
      : stream.state === StreamState.Paused
      ? stream_state.paused
      : stream_state.cancelled,
  };

  await prisma.stream.update({
    where: { id: data.id },
    data: updateFields,
  });
}

export { updateSchedule, updateStream, getScheduleInfo, getStreamInfo };
