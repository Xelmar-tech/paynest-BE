/// <reference path="./types/chains.d.ts" />
import cron from "node-cron";
import payments from "./payment";
import watch_transactions from "./watch_txn";

const NETWORKS: network_type[] = ["Base"]; // ["Arbitrum", "Base", "Optimism"];

async function main() {
  cron.schedule("*/10 * * * *", async () => {
    try {
      await Promise.all(NETWORKS.map((n) => payments(n)));
    } catch (error) {
      console.error("Error in fetching payments", error);
    }
  });

  watch_transactions("Base");
  console.log("Paynest Backend is running 🥳");
}

main();
