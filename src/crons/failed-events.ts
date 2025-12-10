/// <reference path="../types/logs.d.ts" />

import { scheduleCreatedEvent } from "../core/plugin-event";
import addTransaction from "../core/transaction";
import { EVENT_NAME } from "../lib/event";
import redis from "../lib/redis";
import { reviver } from "../utils";

export default async function failedEvents() {
  try {
    const sch_keys = await redis.keys(EVENT_NAME.SCHEDULE_CREATED + ":*");
    const txn_keys = await redis.keys(EVENT_NAME.TRANSACTION + ":*");

    for (const key of sch_keys) {
      const raw = await redis.get<string>(key);
      if (!raw) continue;

      const params = JSON.parse(JSON.stringify(raw), reviver);
      const success = await scheduleCreatedEvent(params);

      if (success) await redis.del(key);
    }

    for (const key of txn_keys) {
      const raw = await redis.get<string>(key);
      if (!raw) continue;

      const params = JSON.parse(JSON.stringify(raw), reviver);
      const success = await addTransaction(params);

      if (success) await redis.del(key);
    }
  } catch {}
}
