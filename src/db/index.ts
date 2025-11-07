import { Kysely, PostgresDialect, sql } from "kysely";
import { DB } from "./types";
import { Pool } from "pg";
import { getEnvVariable } from "../utils/config";

// export const increment = (col: string, by: number) => sql`${sql.ref(col)} + ${by}`;

const db = new Kysely<DB>({
  dialect: new PostgresDialect({
    pool: new Pool({
      connectionString: getEnvVariable("DATABASE_URL"),
    }),
  }),
  log(event) {
    if (event.level === "error") {
      console.error("Query failed : ", {
        durationMs: event.queryDurationMillis,
        error: event.error,
        sql: event.query.sql,
        params: event.query.parameters,
      });
    } else {
      console.log("Query executed : ", {
        durationMs: event.queryDurationMillis,
        sql: event.query.sql,
        params: event.query.parameters,
      });
    }
  },
});

export default db;
