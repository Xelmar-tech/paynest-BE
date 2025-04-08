/// <reference path="../types/db.d.ts" />
/// <reference path="../types/chains.d.ts" />

import { neon } from "@neondatabase/serverless";
import { getEnvVariable } from "./config";

class DB {
  private get sql() {
    const dbUrl = getEnvVariable("DATABASE_URL");
    return neon(dbUrl);
  }

  public async getUsers() {
    return this.sql("SELECT * FROM public.user");
  }

  public async getPendingSchedules() {
    const NOW = new Date().getTime() / 1000;
    const ONE_HOUR_AGO = NOW - 60 * 60;

    return this.sql(
      `SELECT * FROM public.schedule WHERE "nextPayout" BETWEEN ${ONE_HOUR_AGO} AND ${NOW}`
    ) as unknown as SchedulePayment[];
  }

  public async getOrg(id: string) {
    const org = (await this.sql(
      `SELECT * FROM public.organization WHERE id = $1`,
      [id]
    )) as unknown as Organization[];
    if (org.length === 1) return org[1];
    return null;
  }

  public async getOrgsWallets() {
    const orgs = (await this.sql(
      `SELECT * FROM public.organization`
    )) as unknown as Organization[];
    return orgs.map((org) => org.wallet);
  }

  public async getOrgByWallet(wallet: string) {
    const org = (await this.sql(
      `SELECT * FROM public.organization WHERE wallet = $1`,
      [wallet]
    )) as unknown as Organization[];
    if (org.length === 1) return org[1];
    return null;
  }

  public async addTransaction(tx: Transaction) {
    const { tx_id, amount, asset, network, org_id, recipient } = tx;
    await this.sql(
      `
      INSERT INTO public.transaction (tx_id, amount, asset, network, org_id, recipient)
      VALUES ($1, $2, $3, $4, $5, $6)
      `,
      [tx_id, amount, asset, network, org_id, recipient]
    );
  }
}

const db = new DB();

export default db;
