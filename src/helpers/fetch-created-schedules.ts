import { pbClient } from "../utils/config";
import { paymentsPluginAbi } from "../constants/abi";
import { scheduleCreatedEvent } from "../core/schedule-event";

export default async function fetchCreatedSchedules() {
  const blockNumber = await pbClient.getBlockNumber();

  const logs = await pbClient.getLogs({
    event: paymentsPluginAbi[44],
    strict: true,
    fromBlock: blockNumber,
  });

  for (const log of logs) {
    const { args, address, transactionHash } = log;
    await scheduleCreatedEvent({ args, address, transactionHash }, true);
  }
}
