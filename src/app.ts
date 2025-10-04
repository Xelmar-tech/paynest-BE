import cron from "node-cron";
import payments from "./core/payment";
import watch_transactions from "./watchers/watch_txn";
import upcomingPayments from "./crons/upcoming-payment";
import watch_events from "./watchers/watch_events";
import completeProfile from "./crons/complete-profile";

async function main() {
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
      await completeProfile();
    } catch (error) {
      console.error("Error in complete profile", error);
    }
  });

  await Promise.all([upcomingPayments(), payments(), completeProfile()])
    .then(() => console.log("Initial run completed successfully"))
    .catch((e) => console.error("Error in initial run", e));

  watch_transactions();
  watch_events();
  console.log("Paynest Backend is running 🥳");
}

main();
