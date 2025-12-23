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

interface InvoicePaidArgs {
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
  args: ScheduleExecutedArgs | StreamExecutedArgs | InvoicePaidArgs;
  logIndex: number;
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

type InvoiceRejectedArgs = {
  username: string;
  invoiceId: Address;
  why: string;
};

type EventArgMap = {
  ScheduleCreated: ScheduleCreatedArgs;
  InvoiceCreated: InvoiceCreatedArgs;
  StreamCreated: StreamCreatedArgs;
  InvoiceRejected: InvoiceRejectedArgs;
  InvoicePaid: InvoicePaidArgs;
};

type PluginEventLog = {
  [K in keyof EventArgMap]: {
    eventName: K;
    args: EventArgMap[K];
    address: Address;
    transactionHash: Address;
    logIndex: number;
  };
}[keyof EventArgMap];
