import { checksumAddress, formatUnits } from "viem";
import { createPubClient } from "../utils/config";
import { getDecimals } from "../utils/onchain-utils";
import { formatEmailDate } from "../utils/date";
import { getTokenByAddress } from "../utils/token";
import { incomingPaymentSchedule } from "../email";
import prisma from "../lib/prisma";
import { paymentsPluginAbi } from "../constants/abi";

export default async function fetchCreatedSchedules() {
  const client = createPubClient("Base");

  const logs = await client.getLogs({
    event: paymentsPluginAbi[44],
    strict: true,
    fromBlock: BigInt(36315728),
  });

  for (const log of logs) {
    const { args, address } = log;
    const { username, firstPaymentDate } = log.args;
    const [org, user, decimals] = await Promise.all([
      prisma.organization.findUnique({ where: { plugin: checksumAddress(address) }, select: { name: true } }),
      prisma.user.findUnique({ where: { username }, select: { name: true, email: true } }),
      getDecimals(client, args.token),
    ]);

    const token = getTokenByAddress("Base", args.token);
    if (!org || !token || !user?.email) continue;

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
  }
}
