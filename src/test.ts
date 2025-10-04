import scheduleUpcomingPayouts from "./core/payment";
import completeProfile from "./crons/complete-profile";
import fetchPastMissingTxns from "./helpers/fetch-past-missing-txns";

(async () => {
  await fetchPastMissingTxns("Base");
})();
