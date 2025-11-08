/// <reference path="../types/logs.d.ts" />

import { formatUnits, getContract, type Address } from "viem";
import { pbClient } from "../utils/config";
import { getTokenByAddress } from "../utils/token";
import { StreamState } from "../utils/onchain-utils";
import { paymentsPluginAbi } from "../constants/abi";
import type { DB, Token } from "../db/types";
import { NetworkType, StreamState as stream_state } from "../db/types";
import { getTxDate } from "../helpers/fix-transaction-dates";
import type { Transaction } from "kysely";
import db from "../db";
import { withRetry } from "../utils";

export default async function addTransaction({ args, address, transactionHash, eventName }: TransactionLog) {
  const { username, token, recipient, amount } = args;
  try {
    const existingTx = await withRetry(() =>
      db.selectFrom("transaction").select("tx_id").where("tx_id", "=", transactionHash).executeTakeFirst()
    );
    if (existingTx) return true;

    const asset = getTokenByAddress(NetworkType.BASE, token);
    if (!asset) throw new Error(`${token} has no asset for the BASE network, transaction not supported for storage`);

    const table = eventName === "ScheduleExecuted" ? "schedule" : "stream";
    const id =
      eventName === "ScheduleExecuted"
        ? (args as ScheduleExecutedArgs).scheduleId
        : (args as StreamExecutedArgs).streamId;
    const { org_id } = await db.selectFrom(table).select("org_id").where("id", "=", id).executeTakeFirstOrThrow();

    const date = await getTxDate(transactionHash);
    const payout = formatUnits(amount, 6);

    const txn = {
      tx_id: transactionHash,
      network: NetworkType.BASE,
      amount: payout,
      asset: asset as Token,
      recipient,
      org_id,
      username,
      schedule_id: eventName === "ScheduleExecuted" ? (args as ScheduleExecutedArgs).scheduleId : null,
      stream_id: eventName === "StreamExecuted" ? (args as StreamExecutedArgs).streamId : null,
      created_at: date,
    };

    const updatePayment = eventName === "ScheduleExecuted" ? updateSchedule : updateStream;

    await db.transaction().execute(async (tx) => {
      await tx.insertInto("transaction").values(txn).execute();

      await updatePayment(address, payout, id, tx);

      await tx
        .updateTable("user")
        .set((eb) => ({ total_payout: eb("total_payout", "+", payout) }))
        .where("username", "=", username)
        .execute();
    });
    return true;
  } catch (error) {
    console.error("Error in addTransaction", error);
    return false;
  }
}

async function updateSchedule(plugin: Address, payout: string, id: Address, tx: Transaction<DB>) {
  const pluginContract = getContract({
    address: plugin,
    abi: paymentsPluginAbi,
    client: pbClient,
  });

  const schedule = await pluginContract.read.getSchedule([id]);

  const updateFields = {
    nextPayout: schedule.nextPayout.toString(),
    active: schedule.active,
  };

  await tx
    .updateTable("schedule")
    .set((eb) => ({ ...updateFields, payout: eb("payout", "+", payout) }))
    .where("id", "=", id)
    .execute();
}

async function updateStream(plugin: Address, payout: string, id: Address, tx: Transaction<DB>) {
  const pluginContract = getContract({
    address: plugin,
    abi: paymentsPluginAbi,
    client: pbClient,
  });

  const stream = await pluginContract.read.getStream([id]);
  const activeState = stream.state === StreamState.Active;

  const updateFields = {
    lastPayout: Math.floor(new Date().getTime() / 1000).toString(),
    active: activeState,
    state: activeState
      ? stream_state.ACTIVE
      : stream.state === StreamState.Paused
      ? stream_state.PAUSED
      : stream_state.CANCELLED,
  };

  await tx
    .updateTable("stream")
    .set((eb) => ({ ...updateFields, payout: eb("payout", "+", payout) }))
    .where("id", "=", id)
    .execute();
}
