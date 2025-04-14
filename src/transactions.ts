/// <reference path="./types/chains.d.ts" />

import { erc20Abi, formatUnits, parseAbi } from "viem";
import db from "./utils/db";
import { createPubClient } from "./utils/config";
import { getTokenByAddress } from "./utils/token";
import usersHash from "./utils/keccak256";

type PublicClient = ReturnType<typeof createPubClient>;
async function getDecimals(client: PublicClient, token: Address) {
  const decimals = await client.readContract({
    address: token,
    abi: erc20Abi,
    functionName: "decimals",
  });
  return decimals;
}

export default async function transactions(network: network_type) {
  const client = createPubClient(network);
  const [orgs, user_hash] = await Promise.all([db.getOrgsWallets(), usersHash()]);

  const unwatch = client.watchEvent({
    address: orgs,
    events: parseAbi([
      "event Payout(string indexed username, address indexed token,uint256 amount)",
      "event PaymentExecuted(string indexed username,address token,uint256 amount)",
    ]),
    fromBlock: BigInt(23918630),
    strict: true,
    onLogs: (logs) =>
      logs.map(async (log) => {
        const { args, address, transactionHash } = log;
        const { username: usernameHash, token, amount } = args;
        const username = user_hash[usernameHash];

        console.log(username, token, amount, address, transactionHash);

        const [org, decimals] = await Promise.all([db.getOrgByWallet(address), getDecimals(client, token)]);
        if (!org) throw new Error(`No organization found ${address}`);

        const amount_ = formatUnits(amount, decimals);
        await db.addUserTP(username, Number(amount_));

        const asset = getTokenByAddress(network, token);
        if (!asset) throw new Error(`No asset found for ${token}`);

        await db.addTransaction({
          recipient: username,
          amount: amount_,
          tx_id: transactionHash,
          org_id: org.id,
          network,
          asset,
        });
      }),
  });

  return unwatch;
}
