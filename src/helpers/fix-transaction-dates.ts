import type { Address } from "viem";
import { pbClient } from "../utils/config";
import db from "../db";

async function getTxBlock(txHash: Address) {
  const tx = await pbClient.getTransaction({ hash: txHash });
  if (!tx.blockNumber) throw new Error("Transaction not yet mined");

  return tx.blockNumber;
}

async function getTxDate(txHash: Address) {
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
    const date = await getTxDate(txn.tx_id as Address);
    await db.updateTable("transaction").set({ created_at: date }).where("tx_id", "=", txn.tx_id).execute();
  }
}

export { getTxDate, fixTransactionDate, getTxBlock };
