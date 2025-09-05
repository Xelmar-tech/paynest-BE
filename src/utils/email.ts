import { getEnvVariable } from "./config";
import { redis } from "./db";

const endpoint = "https://app.paynest.xyz/api/email";
const key = getEnvVariable("EMAIL_API_KEY");

type Keys = "low-balance" | "failed-payment" | "payment-delay";

type Org = {
  orgId: string;
  orgName: string;
  email: string;
};

type User = Org & {
  recipient: string;
};

const limits: Record<Keys, { base: number; max: number }> = {
  "low-balance": { base: 60 * 60 * 24, max: 3 },
  "failed-payment": { base: 60 * 60 * 6, max: 3 },
  "payment-delay": { base: 60 * 60 * 24 * 7, max: 1 },
};

async function spamCheck(spamKey: Keys, orgId: string, email: string) {
  const key = `spam-check:${spamKey}:${orgId}:${email}`;
  const spamCount = await redis.get<number>(key);
  const { max, base } = limits[spamKey];

  const count = spamCount ?? 0;
  if (count >= max) {
    return false;
  }

  const expiry = base * (count + 1);
  await redis.set(key, count + 1, { ex: expiry });

  return true;
}

async function warnLowBalance(org: Org) {
  if (!(await spamCheck("low-balance", org.orgId, org.email))) return;
  const url = endpoint + "/low-balance";
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": key,
    },
    body: JSON.stringify(org),
  });
}

async function warnFailedPayment(org: Org) {
  if (!(await spamCheck("failed-payment", org.orgId, org.email))) return;
  const url = endpoint + "/failed-payment";
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": key,
    },
    body: JSON.stringify(org),
  });
}

async function informPaymentDelay(user: User) {
  if (!(await spamCheck("payment-delay", user.orgId, user.email))) return;
  const url = endpoint + "/payment-delay";
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": key,
    },
    body: JSON.stringify(user),
  });
}

export { warnLowBalance, warnFailedPayment, informPaymentDelay };
