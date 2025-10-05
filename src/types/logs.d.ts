interface ScheduleExecutedArgs {
  username: string;
  scheduleId: Address;
  token: Address;
  amount: bigint;
  periods: bigint;
  recipient: Address;
}
interface StreamExecutedArgs {
  username: string;
  streamId: Address;
  token: Address;
  recipient: Address;
}
interface StreamMigratedArgs {
  username: string;
  streamId: Address;
  oldRecipient: Address;
  newRecipient: Address;
}
interface StreamStateChangedArgs {
  username: string;
  streamId: Address;
  oldState: unknown;
  newState: unknown;
}
interface FlowRateUpdatedArgs {
  username: string;
  streamId: Address;
  oldAmountPerSec: bigint;
  newAmountPerSec: bigint;
}

interface TransactionLog {
  eventName: "ScheduleExecuted" | "StreamStateChanged" | "FlowRateUpdated" | "StreamExecuted" | "StreamMigrated";
  transactionHash: Address;
  address: Address;
  args: ScheduleExecutedArgs | StreamExecutedArgs | StreamMigratedArgs | StreamStateChangedArgs | FlowRateUpdatedArgs;
}

interface ScheduleCreatedArgs {
  firstPaymentDate: number;
  username: string;
  scheduleId: Address;
  token: Address;
  amount: bigint;
  interval: number;
  isOneTime: boolean;
  recipient: Address;
}

interface ScheduleCreatedLog {
  address: Address;
  args: ScheduleCreatedArgs;
  transactionHash: Address;
}
