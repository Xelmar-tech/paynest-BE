interface ScheduleExecutedLogArgs {
  username: string;
  scheduleId: Address;
  token: Address;
  amount: bigint;
  periods: bigint;
  recipient: Address;
}
interface StreamExecuted {
  username: string;
  streamId: Address;
  token: Address;
  recipient: Address;
}
interface StreamMigrated {
  username: string;
  streamId: Address;
  oldRecipient: Address;
  newRecipient: Address;
}
interface StreamStateChanged {
  username: string;
  streamId: Address;
  oldState: unknown;
  newState: unknown;
}
interface FlowRateUpdated {
  username: string;
  streamId: Address;
  oldAmountPerSec: bigint;
  newAmountPerSec: bigint;
}
