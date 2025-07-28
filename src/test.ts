import { decodeEventLog, formatUnits, keccak256, parseAbi, toBytes } from "viem";
import { createPubClient } from "./utils/config";
import { llamaPayAbi } from "./utils/abi";

const withdrawTopic = keccak256(toBytes("Withdraw(address,address,uint216,bytes32,uint256)"));

async function main() {
  const client = createPubClient("Base");
  const [log] = await client.getLogs({
    events: parseAbi([
      "event ScheduleExecuted(string username, bytes32 indexed scheduleId, address indexed token, uint256 amount, uint256 periods, address indexed recipient)",
      "event StreamStateChanged(string username, bytes32 indexed streamId, uint8 oldState, uint8 newState)",
      "event FlowRateUpdated(string username, bytes32 indexed streamId, uint216 oldAmountPerSec, uint216 newAmountPerSec)",
    ]),
    strict: true,
    fromBlock: BigInt(33456608),
    toBlock: BigInt(33456628),
    // address: "0xF6286E35AECf58C3d28A1F6f2C5C748F48B2678A",
  });

  if (log.eventName === "FlowRateUpdated") {
    const { logs } = await client.getTransactionReceipt({
      hash: log.transactionHash,
    });

    const withdraws = logs
      .filter((log) => log.topics[0] === withdrawTopic)
      .map((log) =>
        decodeEventLog({
          abi: llamaPayAbi,
          data: log.data,
          topics: log.topics,
        })
      );

    const decimals = 18;

    for (const { args } of withdraws) {
      const payout = formatUnits(args.amount, decimals);
      console.log("Withdraw:", args.streamId, args.amount, payout);
    }
  }
}
main();
