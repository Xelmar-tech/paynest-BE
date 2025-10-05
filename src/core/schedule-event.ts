/// <reference path="../types/logs.d.ts" />

import { formatUnits } from "viem";
import { createPubClient } from "../utils/config";
import { getDecimals } from "../utils/onchain-utils";
import { formatEmailDate } from "../utils/date";
import { getTokenByAddress } from "../utils/token";
import { incomingPaymentSchedule } from "../email";
import prisma from "../lib/prisma";

async function scheduleCreatedEvent({ args, address }: ScheduleCreatedLog) {
  const client = createPubClient("Base");
  const { username, firstPaymentDate } = args;

  try {
    const [org, user, decimals] = await Promise.all([
      prisma.organization.findUnique({ where: { plugin: address }, select: { name: true } }),
      prisma.user.findUnique({ where: { username }, select: { name: true, email: true } }),
      getDecimals(client, args.token),
    ]);

    const token = getTokenByAddress("Base", args.token);
    if (!org || !token || !user?.email) return true;

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
