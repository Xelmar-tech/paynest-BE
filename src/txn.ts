/// <reference path="./types/chains.d.ts" />

import { formatUnits, parseAbi } from "viem";
import db from "./utils/db";
import { createPubClient } from "./utils/config";
import { getTokenByAddress } from "./utils/token";
import { getDecimals } from "./utils";

export default async function transactions(network: network_type) {
  const client = createPubClient(network);
  const logs = await client.getLogs({
    events: parseAbi([
      "event StreamPayout(string username,address token,uint256 amount)",
      "event SchedulePayout(string username,address token,uint256 amount)",
    ]),
    strict: true,
    fromBlock: "earliest",
    toBlock: "latest",
  });

  for (const log of logs) {
    const { args, address, eventName } = log;
    const { username, token, amount } = args;

    const [org, decimals] = await Promise.all([db.getOrgByWallet(address), getDecimals(client, token)]);
    if (!org) {
      console.error(`❌ No organization found for address: ${address}`);
      continue;
    }

    const payout = formatUnits(amount, decimals);
    const asset = getTokenByAddress(network, token);
    if (!asset) {
      console.error(`❌ No asset found for token: ${token}`);
      continue;
    }

    console.log(`${username} has claimed $${payout.slice(0, 6)}${asset} in a ${eventName} from ${org.name}`);
  }
}
