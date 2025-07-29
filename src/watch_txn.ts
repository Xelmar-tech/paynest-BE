/// <reference path="./types/chains.d.ts" />

import { formatUnits, parseAbi, keccak256, toBytes, getContract, decodeEventLog } from "viem";
import db from "./utils/db";
import { createPubClient, type Client } from "./utils/config";
import { getAddressByToken } from "./utils/token";
import { getDecimals } from "./utils";
import { llamaPayAbi, paymentsPluginAbi } from "./utils/abi";

const withdrawTopic = keccak256(toBytes("Withdraw(address,address,uint216,bytes32,uint256)"));
const transferTopic = keccak256(toBytes("Transfer(address,address,uint256)"));

export default async function watch_transactions(network: network_type) {
  const client = createPubClient(network);
  //       const payout = formatUnits(amount, decimals);
  //       const asset = getTokenByAddress(network, token);
  //       if (!asset) {
  //         console.error(`❌ No asset found for token: ${token}`);
  //         continue;
  //       }

  //       const updatePayment = eventName === "SchedulePayout" ? updateSchedule : updateStream;
  //       await Promise.all([
  //         db.addUserTP(username, Number(payout)),
  //         // db.addTransaction({
  //         //   recipient: username,
  //         //   amount: payout,
  //         //   tx_id: transactionHash,
  //         //   org_id: org.id,
  //         //   network,
  //         //   asset,
  //         // }),
  //         updatePayment(username, org, Number(payout)),
  //       ]);
  //     }
  //   },
  // });

  client.watchEvent({
    events: parseAbi([
      "event ScheduleExecuted(string username, bytes32 indexed scheduleId, address indexed token, uint256 amount, uint256 periods, address indexed recipient)",
      "event StreamExecuted(string username, bytes32 streamId, address token, address recipient)",
      "event StreamMigrated(string username, bytes32 indexed streamId, address oldRecipient, address indexed newRecipient)",
      "event StreamStateChanged(string username, bytes32 indexed streamId, uint8 oldState, uint8 newState)",
      "event FlowRateUpdated(string username, bytes32 indexed streamId, uint216 oldAmountPerSec, uint216 newAmountPerSec)",
    ]),
    strict: true,
    fromBlock: BigInt(33442290),
    onLogs: async (logs) => {
      for (const log of logs) {
        const { args, address, transactionHash, eventName } = log;
        const info =
          eventName === "ScheduleExecuted"
            ? await getScheduleInfo(client, args)
            : await getStreamInfo(client, transactionHash, args.streamId);

        if (!info) continue;

        // const txn: Transaction = {tx_id: transactionHash, network:"Base", }
      }
    },
  });
}

async function getScheduleInfo(client: Client, args: ScheduleExecutedLogArgs) {
  const decimals = await getDecimals(client, args.token);
  const payout = formatUnits(args.amount, decimals);
  return { payout, recipient: args.recipient };
}

async function getStreamInfo(client: Client, hash: Address, id: Address) {
  const [{ logs }, stream] = await Promise.all([
    client.getTransactionReceipt({
      hash,
    }),
    db.getStream(id),
  ]);

  if (!stream) return;
  const token = getAddressByToken(stream.network, stream.asset);
  if (!token) return;

  const decimals = await getDecimals(client, token);

  const [withdraw] = logs
    .filter((log) => log.topics[0] === withdrawTopic)
    .map((log) =>
      decodeEventLog({
        abi: llamaPayAbi,
        data: log.data,
        topics: log.topics,
      })
    );

  const payout = formatUnits(withdraw.args.amount, decimals);
  return { payout, recipient: withdraw.args.to };
}

async function updateSchedule(
  client: Client,
  pluginAddr: Address,
  data: { username: string; payout: number; scheduleId: Address }
) {
  const plugin = getContract({
    address: pluginAddr,
    abi: paymentsPluginAbi,
    client,
  });

  const schedule = await plugin.read.getSchedule([data.username, data.scheduleId]);

  const updateFields = {
    nextPayout: schedule.nextPayout,
    active: schedule.active,
    payout: data.payout,
  };

  await db.updatePaymentModel("schedule", data.scheduleId, updateFields);
}

async function updateStream(
  client: Client,
  pluginAddr: Address,
  data: { username: string; payout: number; streamId: Address }
) {
  const plugin = getContract({
    address: pluginAddr,
    abi: paymentsPluginAbi,
    client,
  });

  const stream = await plugin.read.getStream([data.username, data.streamId]);
  const activeState = stream.state === 1;

  const updateFields = {
    lastPayout: Math.floor(new Date().getTime() / 1000),
    active: activeState,
    payout: data.payout,
    state: stream.state === 1 ? "active" : stream.state === 2 ? "paused" : "cancelled",
  };

  await db.updatePaymentModel("stream", data.streamId, updateFields);
}
