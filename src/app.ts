/// <reference path="./types/chains.d.ts" />
import cron from "node-cron";
import registry from "./registry";

const NETWORKS: network_type[] = ["Arbitrum", "Base", "Optimism"];

async function main() {
  cron.schedule("*/15 * * * *", async () => {
    try {
      await Promise.all([NETWORKS.map((n) => registry(n))]);
    } catch (error) {
      console.error("Error in updating registry", error);
    }
  });
}

main();
