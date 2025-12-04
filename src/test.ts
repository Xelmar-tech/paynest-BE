import trackDeposits from "./crons/deposits-tracking";

(async () => {
  await trackDeposits();
})();
