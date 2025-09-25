/// <reference path="../types/logs.d.ts" />

import { parseAbiItem } from "viem";
import { createPubClient } from "../utils/config";
import { getScheduleInfo, updateSchedule } from "../watchers/watch_txn";
import prisma from "../lib/prisma";
import type { network_type } from "../generated/prisma";

export default async function fetchPastMissingTxns(network: network_type) {
  const client = createPubClient(network);
  const logs = await client.getLogs({
    event: parseAbiItem(
      "event ScheduleExecuted(string username, bytes32 indexed scheduleId, address indexed token, uint256 amount, uint256 periods, address indexed recipient)"
    ),
    strict: true,
    fromBlock: BigInt(35543528),
  });

  console.log("Fetched logs", logs.length);

  for (const log of logs) {
    const { args, address, transactionHash } = log;
    const existingTx = await prisma.transaction.findUnique({
      where: { tx_id: transactionHash },
      select: { tx_id: true },
    });
    if (existingTx) continue;

    const { username, scheduleId } = args;
    const info = await getScheduleInfo(client, args);

    if (!info) {
      console.log("No schedule info found for given args", args);

      continue;
    }

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
    } as const;

    const payout = Number(info.payout);

    await Promise.all([
      updateSchedule(client, address, { username, payout, id: scheduleId }),
      prisma.transaction.create({ data: txn }),
      prisma.user.update({
        where: { username },
        data: { total_payout: { increment: payout } },
      }),
    ]);
  }
}
