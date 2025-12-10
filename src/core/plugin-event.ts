/// <reference path="../types/logs.d.ts" />

import { checksumAddress, formatUnits } from "viem";
import { getDecimals } from "../utils/onchain-utils";
import { formatEmailDate, withRetry } from "../utils";
import { getTokenByAddress } from "../utils/token";
import { incomingPaymentSchedule } from "../email";
import db from "../db";
import { NetworkType } from "../db/types";
import { sql } from "kysely";

async function pluginEvent({ args, address, eventName }: PluginEventLog, view = false) {
  try {
    await withRetry(() => sql`SELECT 1`.execute(db));

    const [org, user, decimals] = await Promise.all([
      db.selectFrom("organization").select("name").where("plugin", "=", checksumAddress(address)).executeTakeFirst(),
      db.selectFrom("user").select(["name", "email"]).where("username", "=", args.username).executeTakeFirst(),
      getDecimals(args.token),
    ]);

    const token = getTokenByAddress(NetworkType.BASE, args.token);
    if (!org || !token || !user?.email) return false;
    const cleanUser = { ...user, email: user.email! };

    const sharedValues = {
      org,
      token,
      user: cleanUser,
      decimals,
    };

    switch (eventName) {
      case "ScheduleCreated":
        await scheduleCreatedEvent(args as ScheduleCreatedArgs, sharedValues);
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

async function scheduleCreatedEvent(args: ScheduleCreatedArgs, vals: SharedPluginActionValues) {
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

async function streamCreatedEvent() {}
async function invoiceCreatedEvent() {}

export { pluginEvent };
