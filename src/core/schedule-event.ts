/// <reference path="../types/logs.d.ts" />

import { checksumAddress, formatUnits } from "viem";
import { pbClient } from "../utils/config";
import { getDecimals } from "../utils/onchain-utils";
import { formatEmailDate } from "../utils/date";
import { getTokenByAddress } from "../utils/token";
import { incomingPaymentSchedule } from "../email";
import db from "../db";

async function scheduleCreatedEvent({ args, address }: ScheduleCreatedLog) {
  const { username, firstPaymentDate } = args;

  try {
    const [org, user, decimals] = await Promise.all([
      db.selectFrom("organization").select("name").where("plugin", "=", checksumAddress(address)).executeTakeFirst(),
      db.selectFrom("user").select(["name", "email"]).where("username", "=", username).executeTakeFirst(),
      getDecimals(pbClient, args.token),
    ]);

    const token = getTokenByAddress("Base", args.token);
    if (!org || !token || !user?.email) return false;

    const paymentDate = new Date(firstPaymentDate);
    const dateTime = formatEmailDate(paymentDate);

    const amountStr = formatUnits(args.amount, decimals);
    const amount = Number(amountStr);

    const params = {
      name: user?.name || undefined,
      username,
      email: user?.email,
      orgName: org.name,
      amount,
      dateTime,
      token,
    };
    await incomingPaymentSchedule(params);
    return true;
  } catch (error) {
    console.error("scheduleCreatedEvent Error: ", error);
    return false;
  }
}

export { scheduleCreatedEvent };
