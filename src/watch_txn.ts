/// <reference path="./types/chains.d.ts" />

import { formatUnits, parseAbiItem } from "viem";
import db from "./utils/db";
import { createPubClient } from "./utils/config";
import { getTokenByAddress } from "./utils/token";
import { getDecimals } from "./utils";

export default async function watch_transactions(network: network_type) {
  const client = createPubClient(network);

  client.watchEvent({
    event: parseAbiItem("event Payout(string username,address token,uint256 amount)"),
    strict: true,
    onLogs: async (logs) => {
      for (const log of logs) {
        const { args, address, transactionHash } = log;
        const { username, token, amount } = args;

        const [org, decimals] = await Promise.all([db.getOrgByWallet(address), getDecimals(client, token)]);
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
    },
  });
}
