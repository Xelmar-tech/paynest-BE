/// <reference path="./types/emails.d.ts" />

import { getEnvVariable } from "./utils/config";
import { redis } from "./utils/db";

const endpoint = "https://app.paynest.xyz/api/email";
const key = getEnvVariable("EMAIL_API_KEY");

const limits: Record<EmailKeys, { base: number; max: number }> = {
  "low-balance": { base: 60 * 60 * 24, max: 3 },
  "failed-payment": { base: 60 * 60 * 6, max: 3 },
  "payment-delay": { base: 60 * 60 * 24 * 7, max: 1 },
  "complete-profile": { base: 60 * 60 * 24 * 7, max: 2 },
};

async function spamCheck(spamKey: EmailKeys, orgId: string, email: string) {
  const key = `spam-check:${spamKey}:${orgId}:${email}`;
  if (await redis.sismember("spam-blacklist", key)) return false;

  const spamCount = await redis.get<number>(key);
  const { max, base } = limits[spamKey];

  const count = spamCount ?? 0;
  if (count >= max) {
    await redis.sadd("spam-blacklist", key);
    return false;
  }

  const expiry = base * (count + 1);
  await redis.set(key, count + 1, { ex: expiry });

  return true;
}

async function warnLowBalance(org: EmailOrgParams) {
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

async function warnFailedPayment(org: EmailOrgParams) {
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

async function informPaymentDelay(user: EmailUserParams) {
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

async function completeProfile(user: CompleteProfileParams) {
  if (!(await spamCheck("complete-profile", "paynest-general", user.email))) return;
  const url = endpoint + "/complete-profile";
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": key,
    },
    body: JSON.stringify(user),
  });
}

async function incomingPaymentSchedule(args: IncomingScheduledPaymentParams) {
  const url = endpoint + "/incoming-payment-schedule";
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": key,
    },
    body: JSON.stringify(args),
  });
}

export { completeProfile, incomingPaymentSchedule, warnLowBalance, warnFailedPayment, informPaymentDelay };
