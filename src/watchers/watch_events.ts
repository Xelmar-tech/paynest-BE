import { formatUnits } from "viem";
import { createPubClient } from "../utils/config";
import { getDecimals } from "../utils/onchain-utils";
import { formatEmailDate } from "../utils/date";
import { getTokenByAddress } from "../utils/token";
import { incomingPaymentSchedule } from "../email";
import prisma from "../lib/prisma";
import { paymentsPluginAbi } from "../constants/abi";

export default function watch_events() {
  const client = createPubClient("Base");

  paymentsPluginAbi[44];

  client.watchEvent({
    // events: parseAbi([
    //   "event ScheduleCreated(string username, bytes32 indexed scheduleId, address indexed token, uint256 amount, uint8 interval, address indexed recipient, bool isOneTime, uint40 firstPaymentDate)",
    // ]),
    event: paymentsPluginAbi[44],
    strict: true,
    fromBlock: BigInt(35980400),
    onLogs: async (logs) => {
      for (const log of logs) {
        const { args, address } = log;
        const { username, firstPaymentDate } = log.args;
        const [org, user, decimals] = await Promise.all([
          prisma.organization.findUnique({ where: { plugin: address }, select: { name: true } }),
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
    },
  });
}
