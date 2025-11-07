/// <reference path="../types/logs.d.ts" />

import { parseAbiItem } from "viem";
import { pbClient } from "../utils/config";
import { getScheduleInfo, updateSchedule } from "../core/transaction";
import type { network_type } from "../db/types";
import { getTxDate } from "./fix-transaction-dates";
import db from "../db";

export default async function fetchPastMissingTxns(network: network_type) {
  const logs = await pbClient.getLogs({
    event: parseAbiItem(
      "event ScheduleExecuted(string username, bytes32 indexed scheduleId, address indexed token, uint256 amount, uint256 periods, address indexed recipient)"
    ),
    strict: true,
    fromBlock: BigInt(36444428),
  });

  for (const log of logs) {
    const { args, address, transactionHash } = log;

    const existingTx = await db
      .selectFrom("transaction")
      .select("tx_id")
      .where("tx_id", "=", transactionHash)
      .executeTakeFirst();
    if (existingTx) continue;

    const { username, scheduleId } = args;
    const info = await getScheduleInfo(pbClient, args);

    if (!info) continue;

    const date = await getTxDate(transactionHash, pbClient);
    const txn = {
      tx_id: transactionHash,
      network: "Base",
      amount: info.payout,
      asset: info.asset,
      recipient: info.recipient,
      org_id: info.orgId,
      username,
      schedule_id: scheduleId,
      stream_id: null,
      created_at: date,
    } as const;

    const payout = Number(info.payout);

    await db.transaction().execute(async (tx) => {
      await tx.insertInto("transaction").values(txn).execute();

      await updateSchedule(
        pbClient,
        address,
        {
          username,
          payout,
          id: scheduleId,
        },
        tx
      );

      await tx
        .updateTable("user")
        .set((eb) => ({ total_payout: eb("total_payout", "+", payout.toString()) }))
        .where("username", "=", username)
        .execute();
    });
  }
}
