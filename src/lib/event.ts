import EventEmitter from "node:events";

enum EVENT_NAME {
  EVENT = "plugin-event",
  TRANSACTION = "transaction",
}

const event = new EventEmitter();

export { event, EVENT_NAME };
