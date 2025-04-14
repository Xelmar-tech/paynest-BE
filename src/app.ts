/// <reference path="./types/chains.d.ts" />
import cron from "node-cron";
import transactions from "./txn";
import payments from "./payment";

const NETWORKS: network_type[] = ["Base"]; // ["Arbitrum", "Base", "Optimism"];

async function main() {
  cron.schedule("*/10 * * * *", async () => {
    try {
      await Promise.all(NETWORKS.map((n) => payments(n)));
    } catch (error) {
      console.error("Error in fetching payments", error);
    }
  });

  cron.schedule("0 * * * *", async () => {
    try {
      await Promise.all(NETWORKS.map((n) => transactions(n)));
    } catch (error) {
      console.error("Error in fetching transactions", error);
    }
  });
}

main();
