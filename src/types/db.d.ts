type Organization = {
  id: string;
  owner: string;
  wallet: Address;
  plugin: Address;
  name: string;
};

type Payment = {
  username: string;
  amount: string; // Decimal
  org_id: string;
  network: network_type;
  asset: token;
  id: string;
  payout: string; // Decimal
  active: boolean;
  interval: interval_type;
  role: string;
  title: string;
};

type Schedule = Payment & {
  isOneTime: boolean;
  nextPayout: bigint;
};

type Stream = Payment & {
  amountPerSec: string; // Decimal
  lastPayout: bigint;
  state: stream_state;
};

type transaction = {
  tx_id: string;
  amount: string; // Decimal
  asset: token;
  network: network_type;
  recipient: string;
  org_id: string;
  username: string;
  schedule_id: string | null;
  stream_id: string | null;
};

type user = {
  username: string | null;
  image: string | null;
  name: string | null;
  total_payout: string; // Decimal
  uid: string;
  email: string | null;
};

type interval_type = "none" | "weekly" | "monthly" | "quarterly" | "yearly";

type network_type = "Base";

type token = "USDT" | "USDC";

type stream_state = "inactive" | "active" | "paused" | "cancelled";
