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
    return this.sql("SELECT * FROM public.user") as unknown as User[];
  }

  public async getPendingSchedules() {
    const NOW = Math.floor(Date.now() / 1000);

    return this.sql(
      `SELECT * FROM public.schedule WHERE "nextPayout" <= $1 AND "active" = true ORDER BY "nextPayout" ASC`,
      [NOW]
    ) as unknown as SchedulePayment[];
  }
  public async getSchedules() {
    return this.sql(`SELECT * FROM public.schedule`) as unknown as SchedulePayment[];
  }
  public async getStreams() {
    return this.sql(`SELECT * FROM public.stream`) as unknown as StreamPayment[];
  }

  public async getOrg(id: string) {
    const org = (await this.sql(`SELECT * FROM public.organization WHERE id = $1`, [id])) as unknown as Organization[];
    if (org.length === 1) return org[0];
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
    if (org.length === 1) return org[0];
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
  public async addUserTP(username: string, amount: number) {
    await this.sql(
      `
      UPDATE public."user"
      SET total_payout = COALESCE(total_payout, 0) + $2
      WHERE username = $1
      `,
      [username, amount]
    );
  }

  public async updateSchedule(
    username: string,
    orgId: string,
    nextPayout: number,
    isOneTime: boolean,
    active: boolean
  ) {
    await this.sql(
      `
      UPDATE public.schedule
      SET "nextPayout" = $3, "isOneTime" = $4, "active" = $5
      WHERE username = $1 AND org_id = $2
      `,
      [username, orgId, nextPayout, isOneTime, active]
    );
  }
}

const db = new DB();

export default db;
