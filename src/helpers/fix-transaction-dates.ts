import type { Address } from "viem";
import { pbClient } from "../utils/config";
import prisma from "../lib/prisma";

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
  const txns = await prisma.transaction.findMany({
    select: {
      tx_id: true,
      created_at: true,
    },
    orderBy: {
      created_at: "desc",
    },
  });

  for (const txn of txns) {
    const date = await getTxDate(txn.tx_id as Address, pbClient);
    await prisma.transaction.update({
      where: { tx_id: txn.tx_id },
      data: { created_at: date },
    });
  }
}

export { getTxDate, fixTransactionDate };
