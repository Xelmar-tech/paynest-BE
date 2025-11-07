import type { Address } from "viem";
import { pbClient } from "../utils/config";
import db from "../db";

async function getTxDate(txHash: Address, client: typeof pbClient) {
  const tx = await client.getTransaction({ hash: txHash });
  if (!tx.blockNumber) {
    throw new Error("Transaction not yet mined");
  }

  const block = await client.getBlock({ blockNumber: tx.blockNumber });
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
    const date = await getTxDate(txn.tx_id as Address, pbClient);
    await db.updateTable("transaction").set({ created_at: date }).where("tx_id", "=", txn.tx_id).execute();
  }
}

export { getTxDate, fixTransactionDate };
