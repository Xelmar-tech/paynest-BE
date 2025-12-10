import type { Address } from "viem";
import { pbClient } from "../utils/config";
import db from "../db";

async function getTxBlock(txHash: Address) {
  const tx = await pbClient.getTransaction({ hash: txHash });
  if (!tx.blockNumber) throw new Error("Transaction not yet mined");

  return tx.blockNumber;
}

async function getTxDate(txHash: Address, useNow: boolean = false) {
  if (useNow) return new Date();

  const blockNumber = await getTxBlock(txHash);
  const block = await pbClient.getBlock({ blockNumber });
  const date = new Date(Number(block.timestamp) * 1000);

  return date;
}

async function fixTransactionDate() {
  const txns = await db
    .selectFrom("transaction")
    .select(["tx_id", "created_at"])
    .orderBy("created_at", "desc")
    .execute();

  for (const txn of txns) {
    const date = await getTxDate(txn.tx_id as Address, false);
    await db.updateTable("transaction").set({ created_at: date }).where("tx_id", "=", txn.tx_id).execute();
  }
}

const DAY = 24 * 60 * 60;
async function getBlock24hAgo(latestBlock: bigint) {
  const now = Math.floor(Date.now() / 1000);
  const targetTimestamp = now - DAY;

  // Rough guess: Base ~2 sec block time
  let estimatedBlock = latestBlock - BigInt(DAY / 2);
  if (estimatedBlock < 0) estimatedBlock = BigInt(0);

  // Binary search to refine
  let low = BigInt(0);
  let high = latestBlock;
  let best = estimatedBlock;

  while (low <= high) {
    const mid = (low + high) >> BigInt(1);
    const block = await pbClient.getBlock({ blockNumber: mid });

    if (!block?.timestamp) break;

    if (block.timestamp > targetTimestamp) {
      high = mid - BigInt(1);
    } else {
      best = mid;
      low = mid + BigInt(1);
    }
  }

  return best;
}

export { getTxDate, fixTransactionDate, getTxBlock, getBlock24hAgo };
