interface ScheduleExecutedLog {
  username: string;
  scheduleId: Address;
  token: Address;
  amount: bigint;
  periods: bigint;
  recipient: Address;
}
export async function handleScheduleExecuted(args: ScheduleExecutedLog) {}

interface StreamExecuted {
  username: string;
  streamId: Address;
  token: Address;
  recipient: Address;
}
export async function handleStreamExecuted(args: StreamExecuted) {}

interface StreamMigrated {
  username: string;
  streamId: Address;
  oldRecipient: Address;
  newRecipient: Address;
}
export async function handleStreamMigrated(args: StreamMigrated) {}

interface StreamStateChanged {
  username: string;
  streamId: Address;
  oldState: unknown;
  newState: unknown;
}
export async function handleStreamStateChanged(args: StreamStateChanged) {}

interface FlowRateUpdated {
  username: string;
  streamId: Address;
  oldAmountPerSec: bigint;
  newAmountPerSec: bigint;
}
export async function handleFlowRateUpdated(args: FlowRateUpdated) {}
