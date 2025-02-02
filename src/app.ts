/// <reference path="./types/chains.d.ts" />
import cron from "node-cron";
import registry from "./registry";
import payments from "./payment";

const NETWORKS: network_type[] = ["Arbitrum", "Base", "Optimism"];

async function main() {
  cron.schedule("*/15 * * * *", async () => {
    try {
      await Promise.all([NETWORKS.map((n) => registry(n))]);
    } catch (error) {
      console.error("Error in updating registry", error);
    }
  });

  cron.schedule("0 0 * * *", async () => {
    try {
      await Promise.all([NETWORKS.map((n) => payments(n))]);
    } catch (error) {
      console.error("Error in payments", error);
    }
  });  
}

main();
