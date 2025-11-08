/// <reference path="../types/logs.d.ts" />

import { formatUnits, keccak256, toBytes, getContract, decodeEventLog, type Address } from "viem";
import { pbClient } from "../utils/config";
import { getAddressByToken } from "../utils/token";
import { getDecimals, StreamState } from "../utils/onchain-utils";
import { llamaPayAbi, paymentsPluginAbi } from "../constants/abi";
import type { DB } from "../db/db";
import { stream_state } from "../db/enums";
import { getTxDate } from "../helpers/fix-transaction-dates";
import type { Transaction } from "kysely";
import db from "../db";

const withdrawTopic = keccak256(toBytes("Withdraw(address,address,uint216,bytes32,uint256)"));
// const transferTopic = keccak256(toBytes("Transfer(address,address,uint256)"));

// type PrismaTxType = Omit<
//   PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>,
//   "$connect" | "$disconnect" | "$on" | "$transaction" | "$extends"
// >;

export default async function addTransaction({ args, address, transactionHash, eventName }: TransactionLog) {
  const { username } = args;

  try {
    const info = !("streamId" in args)
      ? await getScheduleInfo(pbClient, args)
      : await getStreamInfo(pbClient, transactionHash, args.streamId);

    if (!info) return false;

    const date = await getTxDate(transactionHash, pbClient);
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

    await db.transaction().execute(async (tx) => {
      await tx.insertInto("transaction").values(txn).execute();

      await updatePayment(
        pbClient,
        address,
        {
          username,
          payout: Number(_payout),
          id: _id,
        },
        tx
      );

      await tx
        .updateTable("user")
        .set((eb) => ({ total_payout: eb("total_payout", "+", _payout) }))
        .where("username", "=", username)
        .execute();
    });
    return true;
  } catch (error) {
    console.error("Error in addTransaction", error);
    return false;
  }
}

async function getScheduleInfo(client: typeof pbClient, args: ScheduleExecutedArgs) {
  try {
    const [{ org_id, asset }, decimals] = await Promise.all([
      db.selectFrom("schedule").select(["asset", "org_id"]).where("id", "=", args.scheduleId).executeTakeFirstOrThrow(),
      getDecimals(client, args.token),
    ]);

    const payout = formatUnits(args.amount, decimals);
    return { payout, recipient: args.recipient, orgId: org_id, asset };
  } catch (error) {
    console.error("Error in getScheduleInfo", error);
    return;
  }
}

async function getStreamInfo(client: typeof pbClient, hash: Address, id: Address) {
  try {
    const [{ logs }, { org_id, asset, network }] = await Promise.all([
      client.getTransactionReceipt({
        hash,
      }),
      db.selectFrom("stream").select(["org_id", "asset", "network"]).where("id", "=", id).executeTakeFirstOrThrow(),
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
  client: typeof pbClient,
  pluginAddr: Address,
  data: { username: string; payout: number; id: Address },
  tx: Transaction<DB>
) {
  const plugin = getContract({
    address: pluginAddr,
    abi: paymentsPluginAbi,
    client,
  });

  const schedule = await plugin.read.getSchedule([data.username, data.id]);

  const updateFields = {
    nextPayout: schedule.nextPayout.toString(),
    active: schedule.active,
    payout: data.payout.toString(),
  };

  await tx.updateTable("schedule").set(updateFields).where("id", "=", data.id).execute();
}

async function updateStream(
  client: typeof pbClient,
  pluginAddr: Address,
  data: { username: string; payout: number; id: Address },
  tx: Transaction<DB>
) {
  const plugin = getContract({
    address: pluginAddr,
    abi: paymentsPluginAbi,
    client,
  });

  const stream = await plugin.read.getStream([data.username, data.id]);
  const activeState = stream.state === StreamState.Active;

  const updateFields = {
    lastPayout: Math.floor(new Date().getTime() / 1000).toString(),
    active: activeState,
    payout: data.payout.toString(),
    state: activeState
      ? stream_state.active
      : stream.state === StreamState.Paused
      ? stream_state.paused
      : stream_state.cancelled,
  };

  await tx.updateTable("stream").set(updateFields).where("id", "=", data.id).execute();
}

export { updateSchedule, updateStream, getScheduleInfo, getStreamInfo };
