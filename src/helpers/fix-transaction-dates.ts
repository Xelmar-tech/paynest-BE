import type { Address } from "viem";
import { createPubClient, type Client } from "../utils/config";
import prisma from "../lib/prisma";

async function getTxDate(txHash: Address, client: Client) {
  const tx = await client.getTransaction({ hash: txHash });
  if (!tx.blockNumber) {
    throw new Error("Transaction not yet mined");
  }

  const block = await client.getBlock({ blockNumber: tx.blockNumber });
  const date = new Date(Number(block.timestamp) * 1000);

  return date;
}

async function fixTransactionDate() {
  const client = createPubClient("Base");
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
    const date = await getTxDate(txn.tx_id as Address, client);
    await prisma.transaction.update({
      where: { tx_id: txn.tx_id },
      data: { created_at: date },
    });
  }
}

export { getTxDate, fixTransactionDate };
