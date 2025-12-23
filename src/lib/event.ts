import EventEmitter from "node:events";

enum EVENT_NAME {
  EVENT = "plugin-event",
  TRANSACTION = "transaction",
}

enum REDIS_KEY {
  ADMIN_EVENT = "admin-event-block",
  DEPOSIT_EVENT = "deposit-block",
  WATCH_EVENT = "watch-event-from-block",
}

const event = new EventEmitter();

export { event, EVENT_NAME, REDIS_KEY };
