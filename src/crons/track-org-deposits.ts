import { type Address, parseAbiItem } from "viem";
import db from "../db";
import { pbClient } from "../utils/config";
import { getAddressByToken } from "../utils/token";
import { NetworkType, Token } from "../db/types";
import { withRetry } from "../utils";
import redis from "../lib/redis";
import { getBlock24hAgo } from "../helpers/onchain-helpers";

async function getAllOrgWalletsDeposits() {
  const [orgs, currentBlock, lastBlock] = await Promise.all([
    withRetry(() => db.selectFrom("organization").select("wallet").execute()),
    pbClient.getBlockNumber(),
    redis.get<number>("track_deposits"),
  ]);

  let lastBlockBigInt;
  if (!lastBlock) {
    lastBlockBigInt = await getBlock24hAgo(currentBlock);
  } else {
    lastBlockBigInt = BigInt(lastBlock);
  }

  const logs = await pbClient.getLogs({
    event: parseAbiItem("event Transfer(address indexed from, address indexed to, uint256 value)"),
    strict: true,
    address: getAddressByToken(NetworkType.BASE, Token.USDC),
    args: {
      to: orgs.map((org) => org.wallet as Address),
    },
    fromBlock: lastBlockBigInt,
    toBlock: currentBlock,
  });

  await redis.set("track_deposits", Number(currentBlock) + 1);
}
