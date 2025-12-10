import trackAdminEvents from "./crons/admin-actions-tracking";

(async () => {
  await trackAdminEvents();
})();
