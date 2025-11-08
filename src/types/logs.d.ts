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
  amount: bigint;
}

interface InvoicePaid {
  username: string;
  invoiceId: Address;
  token: Address;
  amount: bigint;
}

interface TransactionLog {
  eventName: "ScheduleExecuted" | "StreamExecuted";
  transactionHash: Address;
  address: Address;
  args: ScheduleExecutedArgs | StreamExecutedArgs;
}

interface ScheduleCreatedArgs {
  firstPaymentDate: number;
  username: string;
  scheduleId: Address;
  token: Address;
  amount: bigint;
  interval: number;
  isOneTime: boolean;
}

interface ScheduleCreatedLog {
  address: Address;
  args: ScheduleCreatedArgs;
  transactionHash: Address;
}
