import EventEmitter from "node:events";

enum EVENT_NAME {
  SCHEDULE_CREATED = "schedule_created",
  TRANSACTION = "transaction",
  TEST = "test",
}

const event = new EventEmitter();

export { event, EVENT_NAME };
