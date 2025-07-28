/// <reference path="./types/chains.d.ts" />

import { formatUnits, parseAbi } from "viem";
import db from "./utils/db";
import { createPubClient } from "./utils/config";
import { getTokenByAddress } from "./utils/token";
import { getDecimals } from "./utils";
import abi from "./utils/abi";

export default async function watch_transactions(network: network_type) {
  const client = createPubClient(network);
  const latestBlock = await client.getBlockNumber();

  client.watchEvent({
    events: parseAbi([
      "event StreamPayout(string username,address token,uint256 amount)",
      "event SchedulePayout(string username,address token,uint256 amount)",
    ]),
    strict: true,
    fromBlock: latestBlock,
    onLogs: async (logs) => {
      for (const log of logs) {
        const { args, address, transactionHash, eventName } = log;
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

        const updatePayment = eventName === "SchedulePayout" ? updateSchedule : updateStream;
        await Promise.all([
          db.addUserTP(username, Number(payout)),
          db.addTransaction({
            recipient: username,
            amount: payout,
            tx_id: transactionHash,
            org_id: org.id,
            network,
            asset,
          }),
          updatePayment(username, org, Number(payout)),
        ]);
      }
    },
  });

  client.watchEvent({
    events: parseAbi([
      "event ScheduleExecuted(string username, bytes32 indexed scheduleId, address indexed token, uint256 amount, uint256 periods, address indexed recipient)",
      "event StreamExecuted(string username, bytes32 streamId, address token, address recipient)",
      "event StreamMigrated(string username, bytes32 indexed streamId, address oldRecipient, address indexed newRecipient)",
      "event StreamStateChanged(string username, bytes32 indexed streamId, StreamState oldState, StreamState newState)",
      "event FlowRateUpdated(string username, bytes32 indexed streamId, uint216 oldAmountPerSec, uint216 newAmountPerSec)",
    ]),
    strict: true,
    fromBlock: BigInt(33442290),
    onLogs: async (logs) => {
      for (const log of logs) {
        const { args, address, transactionHash, eventName } = log;
        if (eventName === "StreamStateChanged") {
          args;
        }
        const { username } = args;
      }
    },
  });
}

async function updateSchedule(username: string, org: Organization, payout: number) {
  const client = createPubClient("Base");

  const getSCPayment = client.readContract({
    address: org.wallet,
    abi: abi,
    functionName: "getSchedule",
    args: [username],
  });

  const [dbPayment, scPayment] = await Promise.all([db.findRecentSchedule(username, org.id), getSCPayment]);

  if (dbPayment === null) {
    console.error(`❌ Active Schedule Payment not found for ${username} on ${org.name}`);
    return;
  }

  const updateFields = {
    nextPayout: scPayment.nextPayout,
    active: scPayment.active,
    payout,
  };

  await db.updatePaymentModel("schedule", dbPayment.id, updateFields);
}

async function updateStream(username: string, org: Organization, payout: number) {
  const client = createPubClient("Base");

  const getSCPayment = client.readContract({
    address: org.wallet,
    abi: abi,
    functionName: "getStream",
    args: [username],
  });

  const [dbPayment, scPayment] = await Promise.all([db.findRecentStream(username, org.id), getSCPayment]);

  if (dbPayment === null) {
    console.error(`❌ Active Stream Payment not found for ${username} on ${org.name}`);
    return;
  }

  const updateFields = {
    lastPayout: scPayment.lastPayout,
    active: scPayment.active,
    payout,
  };

  await db.updatePaymentModel("stream", dbPayment.id, updateFields);
}

export { updateSchedule, updateStream };
