/// <reference path="./types/chains.d.ts" />

import { formatUnits, parseAbi } from "viem";
import db from "./utils/db";
import { createPubClient } from "./utils/config";
import { getTokenByAddress } from "./utils/token";
import { getDecimals } from "./utils";
import redis from "./utils/redis";

const BATCHSIZE = BigInt(100);

export default async function transactions(network: network_type) {
  const client = createPubClient(network);
  const key = `currentBlock:${network}`;

  const [orgs, latestBlock, currentBlock] = await Promise.all([
    db.getOrgsWallets(),
    client.getBlockNumber(),
    redis.get<number>(key),
  ]);

  const block = currentBlock ?? 23918630;
  if (BigInt(block) == latestBlock) return;

  const logs = await client.getLogs({
    address: orgs,
    events: parseAbi([
      "event Payout(string username,address token,uint256 amount)",
    ]),
    fromBlock: BigInt(block),
    toBlock: latestBlock,
    strict: true,
  });

  for (const log of logs) {
    const { args, address, transactionHash } = log;
    const { username, token, amount } = args;

    const [org, decimals] = await Promise.all([
      db.getOrgByWallet(address),
      getDecimals(client, token),
    ]);
    if (!org) {
      console.error(`❌ No organization found for address: ${address}`);
      continue;
    }

    const amount_ = formatUnits(amount, decimals);
    await db.addUserTP(username, Number(amount_));

    const asset = getTokenByAddress(network, token);
    if (!asset) {
      console.error(`❌ No asset found for token: ${token}`);
      continue;
    }

    await db.addTransaction({
      recipient: username,
      amount: amount_,
      tx_id: transactionHash,
      org_id: org.id,
      network,
      asset,
    });
  }

  await redis.set(key, Number(latestBlock.toString()));
}
