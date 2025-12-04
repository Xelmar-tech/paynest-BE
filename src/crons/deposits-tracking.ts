import {
  type Address,
  checksumAddress,
  erc20Abi,
  formatUnits,
  getAddress,
} from "viem";
import { deploymentBlock, USDC } from "../constants";
import db from "../db";
import redis from "../lib/redis";
import { pbClient } from "../utils/config";
import { getTxDate } from "../helpers/fix-transaction-dates";
import { NetworkType, Token, TransactionType } from "../db/types";

export default async function trackDeposits() {
  const org_wallets = await db
    .selectFrom("organization")
    .select("wallet")
    .execute();

  const wallets = org_wallets.map((org) => {
    const addr = org.wallet.trim().toLowerCase();
    const address = getAddress(addr);
    return address;
  });
  const lastBlock = await redis.get<number>("deposit-block");
  const from = lastBlock ? BigInt(lastBlock) : BigInt(deploymentBlock);

  const logs = await pbClient.getLogs({
    address: USDC,
    fromBlock: from,
    event: erc20Abi[1],
    args: {
      to: wallets,
    },
    strict: true,
  });

  console.log(logs.length, "Deposits found");

  for (const log of logs) {
    const { value, to } = log.args;
    const hash = log.transactionHash;
    const amount = formatUnits(value, 6);

    const date = await getTxDate(hash);
    const org = await db
      .selectFrom("organization")
      .select("id")
      .where("wallet", "ilike", to)
      .executeTakeFirst();
    if (!org) continue;

    const tx = {
      tx_id: hash,
      network: NetworkType.BASE,
      amount: amount,
      asset: Token.USDC,
      recipient: to,
      org_id: org.id,
      username: null,
      schedule_id: null,
      stream_id: null,
      created_at: date,
      type: TransactionType.DEPOSIT,
    } as const;

    await db.insertInto("transaction").values(tx).executeTakeFirst();
  }

  const nowBlock = await pbClient.getBlockNumber();
  await redis.set("deposit-block", Number(nowBlock));
}
