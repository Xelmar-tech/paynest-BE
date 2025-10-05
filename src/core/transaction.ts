/// <reference path="../types/logs.d.ts" />

import { formatUnits, keccak256, toBytes, getContract, decodeEventLog, type Address } from "viem";
import { createPubClient, type Client } from "../utils/config";
import { getAddressByToken } from "../utils/token";
import { getDecimals, StreamState } from "../utils/onchain-utils";
import { llamaPayAbi, paymentsPluginAbi } from "../constants/abi";
import prisma from "../lib/prisma";
import { Prisma, PrismaClient, stream_state } from "../generated/prisma";
import { getTxDate } from "../helpers/fix-transaction-dates";
import { DefaultArgs } from "../generated/prisma/runtime/library";

const withdrawTopic = keccak256(toBytes("Withdraw(address,address,uint216,bytes32,uint256)"));
// const transferTopic = keccak256(toBytes("Transfer(address,address,uint256)"));

type PrismaTxType = Omit<
  PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>,
  "$connect" | "$disconnect" | "$on" | "$transaction" | "$extends"
>;

export default async function addTransaction({ args, address, transactionHash, eventName }: TransactionLog) {
  const client = createPubClient("Base");
  const { username } = args;

  try {
    const info = !("streamId" in args)
      ? await getScheduleInfo(client, args)
      : await getStreamInfo(client, transactionHash, args.streamId);

    if (!info) return false;

    const date = await getTxDate(transactionHash, client);
    const txn = {
      tx_id: transactionHash,
      network: "Base",
      amount: info.payout,
      asset: info.asset,
      recipient: info.recipient,
      org_id: info.orgId,
      username,
      schedule_id: eventName === "ScheduleExecuted" ? (args as ScheduleExecutedArgs).scheduleId : null,
      stream_id: eventName !== "ScheduleExecuted" ? (args as StreamExecutedArgs).streamId : null,
      created_at: date,
    } as const;

    const updatePayment = eventName === "ScheduleExecuted" ? updateSchedule : updateStream;
    // if stream state changed to active, payout should be 0 because it was cancelled and is restarting
    const _payout =
      eventName === "StreamStateChanged"
        ? (args as StreamStateChangedArgs).newState === StreamState.Active
          ? "0"
          : info.payout
        : info.payout;
    const _id =
      eventName === "ScheduleExecuted"
        ? (args as ScheduleExecutedArgs).scheduleId
        : (args as StreamExecutedArgs).streamId;

    await prisma.$transaction(async (tx) => {
      await tx.transaction.create({ data: txn });

      await updatePayment(
        client,
        address,
        {
          username,
          payout: Number(_payout),
          id: _id,
        },
        tx
      );

      await tx.user.update({
        where: { username },
        data: { total_payout: { increment: Number(_payout) } },
      });
    });
    return true;
  } catch (error) {
    console.error("Error in addTransaction", error);
    return false;
  }
}

async function getScheduleInfo(client: Client, args: ScheduleExecutedArgs) {
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
  data: { username: string; payout: number; id: Address },
  tx: PrismaTxType
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

  await tx.schedule.update({
    where: { id: data.id },
    data: updateFields,
  });
}

async function updateStream(
  client: Client,
  pluginAddr: Address,
  data: { username: string; payout: number; id: Address },
  tx: PrismaTxType
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

  await tx.stream.update({
    where: { id: data.id },
    data: updateFields,
  });
}

export { updateSchedule, updateStream, getScheduleInfo, getStreamInfo };
