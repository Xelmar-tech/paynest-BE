/// <reference path="./types/logs.d.ts" />

import cron from "node-cron";
import payments from "./core/payment";
import upcomingPayments from "./crons/upcoming-payment";
import completeProfile from "./crons/complete-profile";
import failedEvents from "./crons/failed-events";
import { event, EVENT_NAME, REDIS_KEY } from "./lib/event";
import addTransaction from "./core/transaction";
import redis from "./lib/redis";
import { pluginEvent } from "./core/plugin-event";
import trackDeposits from "./crons/deposits-tracking";
import trackAdminEvents from "./crons/admin-actions-tracking";
import fetchPastMissingTxns from "./helpers/fetch-past-missing-txns";
import watch_events from "./watcher";
import { deploymentBlock } from "./constants";

async function main() {
  event.addListener(EVENT_NAME.TRANSACTION, async (data: TransactionLog) => {
    const success = await addTransaction(data, true);
    const key = `${EVENT_NAME.TRANSACTION}:${data.transactionHash}:${data.logIndex}`;
    if (success) await redis.del(key);
  });

  event.addListener(EVENT_NAME.EVENT, async (data: PluginEventLog) => {
    const success = await pluginEvent(data);
    const key = `${EVENT_NAME.EVENT}:${data.transactionHash}:${data.logIndex}`;
    if (success) await redis.del(key);
  });

  cron.schedule("*/10 * * * *", async () => {
    try {
      await payments();
    } catch (error) {
      console.error("Error in fetching payments", error);
    }
  });

  cron.schedule("0 */6 * * *", async () => {
    try {
      await upcomingPayments();
    } catch (error) {
      console.error("Error in notifying of upcoming payments", error);
    }
  });

  cron.schedule("30 9 * * *", async () => {
    try {
      await Promise.all([completeProfile(), failedEvents()]);
      await Promise.all([trackDeposits(), trackAdminEvents()]);
      await fetchPastMissingTxns();
    } catch (error) {
      console.error("Error in complete profile or failed events", error);
    }
  });

  const eventBlock = await redis.get<number>(REDIS_KEY.WATCH_EVENT);
  watch_events(eventBlock ?? deploymentBlock);
  console.log("Paynest Backend is running 🥳");
}

main();
