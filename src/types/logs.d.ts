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
  recipient: Address;
}

interface TransactionLog {
  eventName: "ScheduleExecuted" | "StreamExecuted" | "InvoicePaid";
  transactionHash: Address;
  address: Address;
  args: ScheduleExecutedArgs | StreamExecutedArgs | InvoicePaid;
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

interface InvoiceCreatedArgs {
  username: string;
  invoiceId: Address;
  token: Address;
  amount: bigint;
}

interface StreamCreatedArgs {
  username: string;
  streamId: Address;
  token: Address;
  amountPerSec: bigint;
}

type PluginCreateActionsLog = ScheduleCreatedArgs | InvoiceCreatedArgs | StreamCreatedArgs;

interface PluginEventLog {
  address: Address;
  args: PluginCreateActionsLog;
  transactionHash: Address;
  eventName: "InvoiceCreated" | "ScheduleCreated" | "StreamCreated";
}
