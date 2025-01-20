import { neon, NeonQueryFunction } from "@neondatabase/serverless";
import { getEnvVariable } from "./config";

export default class DB {
  private sql: NeonQueryFunction<false, false>;
  constructor() {
    const dbUrl = getEnvVariable("DATABASE_URL");
    this.sql = neon(dbUrl);
  }

  public async getUnsyncedWallets() {
    return this.sql("SELECT * FROM public.wallets WHERE sync = false");
  }

  public async getUsers() {
    return this.sql("SELECT * FROM public.user");
  }
}
