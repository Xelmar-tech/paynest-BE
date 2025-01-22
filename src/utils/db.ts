/// <reference path="../types/db.d.ts" />
/// <reference path="../types/chains.d.ts" />

import { neon, NeonQueryFunction } from "@neondatabase/serverless";
import { getEnvVariable } from "./config";

export default class DB {
  private sql: NeonQueryFunction<false, false>;
  constructor() {
    const dbUrl = getEnvVariable("DATABASE_URL");
    this.sql = neon(dbUrl);
  }

  public async getUnsyncedWallets(chain: network_type) {
    return this.sql(
      `SELECT * FROM public.wallet WHERE sync = false AND network = $1`,
      [chain]
    ) as unknown as Wallet[];
  }

  public async getUsers() {
    return this.sql("SELECT * FROM public.user");
  }

  // Methods to help add test data to DB
  public async addWallet(user: string, network: string, address: string) {
    await this.sql(
      `INSERT INTO public.wallet (user_id, network, address) 
        VALUES ($1, $2, $3)`,
      [user, network, address]
    );
  }
  public async addUser(user: string, email: string, psw: string) {
    await this.sql(
      `INSERT INTO public.user (username, email, password) 
        VALUES ($1, $2, $3)`,
      [user, email, psw]
    );
  }
}
