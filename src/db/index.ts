import { Kysely, PostgresDialect } from "kysely";
import { DB } from "./types";
import { Pool } from "pg";
import { getEnvVariable } from "../utils/config";

const db = new Kysely<DB>({
  dialect: new PostgresDialect({
    pool: new Pool({
      connectionString: getEnvVariable("DATABASE_URL"),
    }),
  }),
});

export default db;
