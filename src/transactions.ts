/// <reference path="./types/chains.d.ts" />

import { formatUnits, parseAbi } from "viem";
import db from "./utils/db";
import { createPubClient } from "./utils/config";
import { getTokenByAddress } from "./utils/token";

type PublicClient = ReturnType<typeof createPubClient>;
async function getDecimals(client: PublicClient, token: Address) {
  const decimals = await client.readContract({
    address: token,
    abi: ["function decimals() view returns (uint8)"],
    functionName: "decimals",
  });
  return decimals as number;
}

export default async function transactions(network: network_type) {
  const client = createPubClient(network);
  const orgs = await db.getOrgsWallets();
  const unwatch = client.watchEvent({
    address: orgs,
    events: parseAbi([
      "event Payout(string indexed username, address indexed token,uint256 amount)",
      "event PaymentExecuted(string indexed username,address token,uint256 amount)",
    ]),
    strict: true,
    onLogs: (logs) =>
      logs.map(async (log) => {
        const { args, address, transactionHash } = log;
        const { username, token, amount } = args;

        const [org, decimals] = await Promise.all([db.getOrgByWallet(address), getDecimals(client, token)]);
        if (!org) return;

        const amount_ = formatUnits(amount, decimals);
        const asset = getTokenByAddress(network, token);
        if (!asset) return;

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
