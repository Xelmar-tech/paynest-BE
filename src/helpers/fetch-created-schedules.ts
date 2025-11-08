import { checksumAddress, formatUnits } from "viem";
import { pbClient } from "../utils/config";
import { getDecimals } from "../utils/onchain-utils";
import { formatEmailDate } from "../utils/date";
import { getTokenByAddress } from "../utils/token";
import { incomingPaymentSchedule } from "../email";
import { paymentsPluginAbi } from "../constants/abi";
import db from "../db";
import { NetworkType } from "../db/types";

export default async function fetchCreatedSchedules() {
  const logs = await pbClient.getLogs({
    event: paymentsPluginAbi[44],
    strict: true,
    fromBlock: BigInt(36315728),
  });

  for (const log of logs) {
    const { args, address } = log;
    const { username, firstPaymentDate } = log.args;
    const [org, user, decimals] = await Promise.all([
      db.selectFrom("organization").select("name").where("plugin", "=", checksumAddress(address)).executeTakeFirst(),
      db.selectFrom("user").select(["name", "email"]).where("username", "=", username).executeTakeFirst(),
      getDecimals(pbClient, args.token),
    ]);

    const token = getTokenByAddress(NetworkType.BASE, args.token);
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
