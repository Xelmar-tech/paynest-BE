/// <reference path="../types/logs.d.ts" />

import { Address, checksumAddress, formatUnits } from "viem";
import { getDecimals } from "../utils/onchain-utils";
import { formatEmailDate, withRetry } from "../utils";
import { getTokenByAddress } from "../utils/token";
import {
  approvedInvoiceAlert,
  declinedInvoiceAlert,
  incomingPaymentSchedule,
  newInvoiceAlert,
  streamPaymentAlert,
} from "../email";
import db from "../db";
import { NetworkType } from "../db/types";
import { sql } from "kysely";
import { getTxDate } from "../helpers/onchain-helpers";

async function pluginEvent(
  { args, eventName, ...rest }: PluginEventLog,
  view = false
) {
  try {
    await withRetry(() => sql`SELECT 1`.execute(db));

    if (eventName === "InvoiceRejected") {
      await invoiceRejectedEvent(args, rest.address);
      return;
    }

    const [org, user, decimals, date] = await Promise.all([
      db
        .selectFrom("organization")
        .select("name")
        .where("plugin", "=", checksumAddress(rest.address))
        .executeTakeFirst(),
      db
        .selectFrom("user")
        .select(["name", "email"])
        .where("username", "=", args.username)
        .executeTakeFirst(),
      getDecimals(args.token),
      getTxDate(rest.transactionHash),
    ]);

    const token = getTokenByAddress(NetworkType.BASE, args.token);
    if (!org || !token || !user?.email) return false;
    const cleanUser = { ...user, email: user.email! };

    const sharedValues = {
      org,
      token,
      user: cleanUser,
      decimals,
      date,
    };

    switch (eventName) {
      case "ScheduleCreated":
        await scheduleCreatedEvent(args, sharedValues);
        break;

      case "StreamCreated":
        await streamCreatedEvent(args, sharedValues);
        break;

      case "InvoiceCreated":
        await invoiceCreatedEvent(args, sharedValues);
        break;

      case "InvoicePaid":
        await invoicePaidEvent(args, sharedValues);
        break;

      default:
        break;
    }

    return true;
  } catch (error) {
    console.error("pluginEvent Error: ", error);
    return false;
  }
}

async function scheduleCreatedEvent(
  args: ScheduleCreatedArgs,
  vals: SharedPluginActionValues
) {
  const { decimals, user, org, token } = vals;
  const { username, firstPaymentDate, amount: amountBigInt } = args;

  const paymentDate = new Date(firstPaymentDate * 1000);
  const dateTime = formatEmailDate(paymentDate);

  const amountStr = formatUnits(amountBigInt, decimals);
  const amount = Number(amountStr);

  const params = {
    name: user.name || undefined,
    username,
    email: user.email,
    orgName: org.name,
    amount,
    dateTime,
    token,
  };

  await incomingPaymentSchedule(params);
}

async function streamCreatedEvent(
  args: StreamCreatedArgs,
  vals: SharedPluginActionValues
) {
  const { decimals, user, org, token, date } = vals;
  const { username, streamId, amountPerSec } = args;

  const flowRate = formatUnits(amountPerSec, decimals);
  const dateTime = formatEmailDate(date);

  const stream = await db
    .selectFrom("stream")
    .select(["amount", "interval"])
    .where("id", "=", streamId)
    .executeTakeFirst();

  const params = {
    name: user.name || undefined,
    username,
    email: user.email,
    orgName: org.name,
    startDate: dateTime,
    token,
    flowRate,
    amount: stream?.amount ? Number(stream.amount) : undefined,
    period: stream?.interval,
  };

  await streamPaymentAlert(params);
}

async function invoiceCreatedEvent(
  args: InvoiceCreatedArgs,
  val: SharedPluginActionValues
) {
  const { decimals, user, org, token, date } = val;
  const { username } = args;

  const amountStr = formatUnits(args.amount, decimals);
  const amount = Number(amountStr);

  const params = {
    name: user.name || undefined,
    username,
    email: user.email,
    orgName: org.name,
    amount,
    token,
    dateTime: formatEmailDate(date),
  };

  await newInvoiceAlert(params);
}

async function invoicePaidEvent(
  args: InvoicePaidArgs,
  val: SharedPluginActionValues
) {
  const { decimals, user, org, token, date } = val;
  const { username } = args;

  const amountStr = formatUnits(args.amount, decimals);
  const amount = Number(amountStr);

  const params = {
    name: user.name || undefined,
    username,
    email: user.email,
    orgName: org.name,
    amount,
    token,
    dateTime: formatEmailDate(date),
  };

  await approvedInvoiceAlert(params);
}

async function invoiceRejectedEvent(
  args: InvoiceRejectedArgs,
  plugin: Address
) {
  const [org, user] = await Promise.all([
    db
      .selectFrom("organization")
      .select("name")
      .where("plugin", "=", checksumAddress(plugin))
      .executeTakeFirst(),
    db
      .selectFrom("user")
      .select(["name", "email"])
      .where("username", "=", args.username)
      .executeTakeFirst(),
  ]);

  if (!org || !user) return;

  const params = {
    email: user.email,
    orgName: org.name,
    username: args.username,
    reason: args.why,
  };

  await declinedInvoiceAlert(params);
}

export { pluginEvent };
