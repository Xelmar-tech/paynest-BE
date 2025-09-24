type IncomingScheduledPaymentParams = {
  name?: string;
  email: string;
  username: string;
  amount: number;
  token: string;
  dateTime: string;
  orgName: string;
};

type EmailKeys = "low-balance" | "failed-payment" | "payment-delay" | "complete-profile";

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
