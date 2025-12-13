type IncomingScheduledPaymentParams = {
  name?: string;
  email: string;
  username: string;
  amount: number;
  token: string;
  dateTime: string;
  orgName: string;
};

type StreamPaymentParams = {
  name?: string;
  email: string;
  username: string;
  amount: number | undefined;
  token: string;
  startDate: string;
  period: string | undefined;
  flowRate: string;
  orgName: string;
};

type NewInvoiceAlertParams = Pick<
  StreamPaymentParams,
  "amount" | "token" | "orgName" | "username" | "name"
>;

type RejectedInvoiceParams = Pick<
  StreamPaymentParams,
  "orgName" | "username" | "name"
> & {
  reason: string;
};

type EmailKeys =
  | "low-balance"
  | "failed-payment"
  | "payment-delay"
  | "complete-profile";

type EmailOrgParams = {
  orgId: string;
  orgName: string;
  email: string;
};

type EmailUserParams = EmailOrgParams & {
  recipient: string;
};

type CompleteProfileParams = {
  recipient?: string;
  noUsername: boolean;
  noWallet: boolean;
  email: string;
};

type SharedPluginActionValues = {
  token: string;
  decimals: number;
  user: {
    name: string | null;
    email: string;
  };
  org: {
    name: string;
  };
  date: Date;
};
