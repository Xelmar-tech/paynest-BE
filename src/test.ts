import scheduleUpcomingPayouts from "./core/payment";
import completeProfile from "./crons/complete-profile";

(async () => {
  await scheduleUpcomingPayouts();
})();
