/// <reference path="../types/logs.d.ts" />

import { checksumAddress, formatUnits } from "viem";
import { getDecimals } from "../utils/onchain-utils";
import { formatEmailDate, withRetry } from "../utils";
import { getTokenByAddress } from "../utils/token";
import { incomingPaymentSchedule } from "../email";
import db from "../db";
import { NetworkType } from "../db/types";
import { sql } from "kysely";

async function scheduleCreatedEvent({ args, address }: ScheduleCreatedLog, view = false) {
  const { username, firstPaymentDate } = args;

  try {
    const ping = await withRetry(() => sql`SELECT 1`.execute(db));
    console.log("PONG", ping);

    const [org, user, decimals] = await Promise.all([
      db.selectFrom("organization").select("name").where("plugin", "=", checksumAddress(address)).executeTakeFirst(),
      db.selectFrom("user").select(["name", "email"]).where("username", "=", username).executeTakeFirst(),
      getDecimals(args.token),
    ]);

    const token = getTokenByAddress(NetworkType.BASE, args.token);
    if (!org || !token || !user?.email) return false;

    const paymentDate = new Date(firstPaymentDate * 1000);
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

    if (view) {
      console.log(params, "Params2");
    } else await incomingPaymentSchedule(params);

    return true;
  } catch (error) {
    console.error("scheduleCreatedEvent Error: ", error);
    return false;
  }
}

export { scheduleCreatedEvent };
