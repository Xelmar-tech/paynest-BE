/// <reference path="./types/logs.d.ts" />

import cron from "node-cron";
import payments from "./core/payment";
import watch_transactions from "./watchers/watch_txn";
import upcomingPayments from "./crons/upcoming-payment";
import watch_events from "./watchers/watch_events";
import completeProfile from "./crons/complete-profile";
import failedEvents from "./crons/failed-events";
import { event, EVENT_NAME } from "./lib/event";
import addTransaction from "./core/transaction";
import redis from "./lib/redis";
import { scheduleCreatedEvent } from "./core/schedule-event";
import { startHealthServer } from "./watchers/watchdog";
import trackDeposits from "./crons/deposits-tracking";
import trackAdminEvents from "./crons/admin-actions-tracking";

async function main() {
  event.addListener(EVENT_NAME.TRANSACTION, async (data: TransactionLog) => {
    const success = await addTransaction(data);
    if (success)
      await redis.del(EVENT_NAME.TRANSACTION + ":" + data.transactionHash);
  });

  event.addListener(
    EVENT_NAME.SCHEDULE_CREATED,
    async (data: ScheduleCreatedLog) => {
      const success = await scheduleCreatedEvent(data);
      if (success)
        await redis.del(
          EVENT_NAME.SCHEDULE_CREATED + ":" + data.transactionHash
        );
    }
  );

  cron.schedule("*/10 * * * *", async () => {
    try {
      await payments();
      await upcomingPayments();
    } catch (error) {
      console.error("Error in fetching payments", error);
    }
  });

  cron.schedule("30 9 * * *", async () => {
    try {
      await Promise.all([completeProfile(), failedEvents()]);
      await Promise.all([trackDeposits(), trackAdminEvents()]);
    } catch (error) {
      console.error("Error in complete profile or failed events", error);
    }
  });

  watch_transactions();
  watch_events();
  startHealthServer();
  console.log("Paynest Backend is running 🥳");
}

main();
