import { event, EVENT_NAME } from "./lib/event";

(async () => {
  console.log("test1");

  event.addListener(EVENT_NAME.TEST, (...args) => {
    console.log("Test event triggered,", ...args);
  });
  // await fetchPastMissingTxns("Base");
})();
