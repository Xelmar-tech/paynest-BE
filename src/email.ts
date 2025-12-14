/// <reference path="./types/emails.d.ts" />

import { createHash } from "crypto";
import redis from "./lib/redis";
import { getEnvVariable } from "./utils/config";

const endpoint = "https://3c0fcf02f17b.ngrok-free.app/api/email"; //"https://app.paynest.xyz/api/email";
const key = getEnvVariable("EMAIL_API_KEY");

const HOUR = 60 * 60;
const WEEK = HOUR * 24 * 7;
const limits: Record<EmailKeys, { base: number; max: number }> = {
  "low-balance": { base: HOUR * 24, max: 3 },
  "failed-payment": { base: HOUR * 6, max: 3 },
  "payment-delay": { base: WEEK, max: 1 },
  "complete-profile": { base: WEEK, max: 2 },
};

const hashEmail = (email: string) =>
  createHash("sha1").update(email).digest("hex").slice(0, 12);
export async function spamCheck(
  spamKey: EmailKeys,
  orgId: string,
  email: string
) {
  const key = `spam:${orgId}:${hashEmail(email)}`;
  const { max, base } = limits[spamKey];

  const current = (await redis.hget<number>(key, spamKey)) ?? 0;
  if (current >= max) return false;

  const [ttl] = await redis.httl(key, spamKey);
  if (ttl > HOUR) return false;

  const next = current + 1;
  const jitter = Math.floor(Math.random() * 60);
  const expiry = base * next + jitter;

  let hset = await Promise.all([
    redis.hset(key, { [spamKey]: next }),
    redis.hexpire(key, spamKey, expiry),
    redis.expire(key, WEEK),
  ]);

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

async function completeProfileMail(user: CompleteProfileParams) {
  if (!(await spamCheck("complete-profile", "paynest-general", user.email)))
    return;
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

async function streamPaymentAlert(args: StreamPaymentParams) {
  const url = endpoint + "/stream-payment-alert";
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": key,
    },
    body: JSON.stringify(args),
  });
}

async function newInvoiceAlert(args: NewInvoiceAlertParams) {
  const url = endpoint + "/new-invoice-alert";
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": key,
    },
    body: JSON.stringify(args),
  });
}

async function declinedInvoiceAlert(args: RejectedInvoiceParams) {
  const url = endpoint + "/declined-invoice";
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": key,
    },
    body: JSON.stringify(args),
  });
}

async function approvedInvoiceAlert(args: ApprovedInvoiceParams) {
  const url = endpoint + "/approved-invoice";
  await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": key,
    },
    body: JSON.stringify(args),
  });
}

export {
  completeProfileMail,
  incomingPaymentSchedule,
  warnLowBalance,
  warnFailedPayment,
  informPaymentDelay,
  streamPaymentAlert,
  newInvoiceAlert,
  declinedInvoiceAlert,
  approvedInvoiceAlert,
};
