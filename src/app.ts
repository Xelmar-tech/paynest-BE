/// <reference path="./types/chains.d.ts" />
import cron from "node-cron";
import registry from "./transactions";
import payments from "./payment";
import { WatchEventReturnType } from "viem";

const NETWORKS: network_type[] = ["Base"]; // ["Arbitrum", "Base", "Optimism"];
let unwatchFunctions: WatchEventReturnType[] = [];

async function main() {
  cron.schedule("*/15 * * * *", async () => {
    try {
      unwatchFunctions.forEach((unwatch) => unwatch());
      unwatchFunctions = [];

      unwatchFunctions = await Promise.all(NETWORKS.map((n) => registry(n)));
    } catch (error) {
      console.error("Error in fetching org transactions", error);
    }
  });

  cron.schedule("0 * * * *", async () => {
    try {
      await Promise.all(NETWORKS.map((n) => payments(n)));
    } catch (error) {
      console.error("Error in payments", error);
    }
  });
}

main();
