/// <reference path="../types/db.d.ts" />
/// <reference path="../types/chains.d.ts" />

import { neon, NeonQueryFunction } from "@neondatabase/serverless";
import { getEnvVariable } from "./config";

class DB {
  private sql: NeonQueryFunction<false, false>;
  constructor() {
    const dbUrl = getEnvVariable("DATABASE_URL");
    this.sql = neon(dbUrl);
  }

  public async getUsers() {
    return this.sql("SELECT * FROM public.user");
  }

  public async getPendingSchedules() {
    const TODAY = new Date().setUTCHours(0, 0, 0, 0);
    return this.sql(`SELECT * FROM public.schedule WHERE "nextPayout" < ${TODAY}`) as unknown as SchedulePayment[];
  }

  public async getPendingStreams() {
    const today = new Date();
    const TODAY = new Date().setUTCHours(0, 0, 0, 0);
    const WEEK = new Date().setDate(today.getDate() + 7);
    return this.sql(
      `SELECT * FROM public.stream WHERE "lastPayout" > ${WEEK} AND "endStream" <= ${TODAY}`
    ) as unknown as StreamPayment[];
  }

  public async getOrg(id: string) {
    const org = (await this.sql(`SELECT * FROM public.organization WHERE id = $1`, [id])) as unknown as Organization[];
    if (org.length === 1) return org[1];
    return null;
  }

  public async getOrgsWallets() {
    const orgs = (await this.sql(`SELECT * FROM public.organization`)) as unknown as Organization[];
    return orgs.map((org) => org.wallet);
  }

  public async getOrgByWallet(wallet: string) {
    const org = (await this.sql(`SELECT * FROM public.organization WHERE wallet = $1`, [
      wallet,
    ])) as unknown as Organization[];
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
