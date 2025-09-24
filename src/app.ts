/// <reference path="./types/chains.d.ts" />
import cron from "node-cron";
import payments from "./core/payment";
import watch_transactions from "./watchers/watch_txn";
import upcomingPayments from "./crons/upcoming-payment";
import watch_events from "./watchers/watch_events";

const NETWORKS: network_type[] = ["Base"]; // ["Arbitrum", "Base", "Optimism"];

async function main() {
  cron.schedule("*/10 * * * *", async () => {
    try {
      await upcomingPayments("Base");
      await Promise.all(NETWORKS.map((n) => payments(n)));
    } catch (error) {
      console.error("Error in fetching payments", error);
    }
  });

  watch_transactions("Base");
  watch_events();
  console.log("Paynest Backend is running 🥳");
}

main();
