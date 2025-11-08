import completeProfile from "./crons/complete-profile";
import failedEvents from "./crons/failed-events";

(async () => {
  await failedEvents();
})();
