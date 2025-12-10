import { pbClient } from "../utils/config";
import { paymentsPluginAbi } from "../constants/abi";
import { pluginEvent } from "../core/plugin-event";

export default async function fetchCreatedSchedules() {
  const blockNumber = await pbClient.getBlockNumber();

  const logs = await pbClient.getLogs({
    event: paymentsPluginAbi[48],
    strict: true,
    fromBlock: blockNumber,
  });

  for (const log of logs) {
    const { args, address, transactionHash, eventName } = log;
    await pluginEvent({ args, address, transactionHash, eventName }, true);
  }
}
