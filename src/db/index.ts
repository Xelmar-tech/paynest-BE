import { Kysely, PostgresDialect } from "kysely";
import type { DB } from "./types";
import { getEnvVariable } from "../utils/config";
import { Pool } from "pg";

const db = new Kysely<DB>({
  dialect: new PostgresDialect({
    pool: new Pool({
      connectionString: getEnvVariable("DATABASE_URL"),
    }),
  }),
  log(event) {
    if (event.level === "error") {
      console.error("Query failed: ", {
        durationMs: event.queryDurationMillis,
        error: event.error,
        sql: event.query.sql,
        params: event.query.parameters,
      });
      // } else {
      //   console.log("Query executed: ", {
      //     durationMs: event.queryDurationMillis,
      //     sql: event.query.sql,
      //     params: event.query.parameters,
      //     kind: event.query.query.kind,
      //   });
    }
  },
});

export default db;
