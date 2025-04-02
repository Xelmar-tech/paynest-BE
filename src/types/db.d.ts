type Wallet = {
  id: number;
  user_id: string; // maps to User's username
  network: network_type;
  address: Address;
  sync: boolean;
};

type User = {
  uid: number;
  username: string;
  email: string;
  image: string;
};

type Organization = {
  id: string;
  name: string;
  logo: string;
  wallet: Address; // The contract address of the organization
  owner: string; // User Id that maps to user from org
  info: string | null;
  network: network_type;
};

type Payment = {
  id: number;
  username: string; // Recipient of the funds
  amount: number;
  token: Token;
  org_id: string; // Organization making this payment
  created_at: Date;
  network: network_type;
};

type SchedulePayment = Payment & {
  isOneTime: boolean;
  nextPayout: number; // In timestamp value
};

type StreamPayment = Payment & {
  endStream: number;
  lastPayout: number; // In timestamp value
};

type Transaction = {
  tx_id: string;
  amount: string;
  asset: Token;
  network: network_type;
  org_id: string;
  recipient: string; // alias for username
};
