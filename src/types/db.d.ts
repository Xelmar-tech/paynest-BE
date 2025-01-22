type Wallet = {
  id: number;
  user_id: string; // maps to User's username
  network: network_type;
  address: Address;
  sync: boolean;
};

type User = {
  username: string;
  email: string;
  wallets: Wallet[];
};

type Organization = {
  name: string;
  controller: Address; // Address that is the contract owner for the Org
  address: Address; // The contract address of the organization
  owner: string; // User Id that maps to user from org
};

type Payment = {
  id: number;
  user: string; // Recipient of the funds
  amount: number;
  token: Address;
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
