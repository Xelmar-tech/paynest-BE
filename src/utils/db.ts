/// <reference path="../types/db.d.ts" />
/// <reference path="../types/chains.d.ts" />

import { neon } from "@neondatabase/serverless";
import { getEnvVariable } from "./config";

class DB {
  private get sql() {
    const dbUrl = getEnvVariable("DATABASE_URL");
    return neon(dbUrl);
  }

  public async getPendingSchedules() {
    const NOW = Math.floor(Date.now() / 1000);

    return this.sql(
      `SELECT * FROM public.schedule WHERE "nextPayout" <= $1 AND "active" = true ORDER BY "nextPayout" ASC`,
      [NOW]
    ) as unknown as Schedule[];
  }

  public async getStream(id: string) {
    const stream = (await this.sql(`SELECT * FROM public.stream WHERE id = $1`, [id])) as unknown as Stream[];
    if (stream.length === 1) return stream[0];
    return null;
  }

  public async getSchedule(id: string) {
    const schedule = (await this.sql(`SELECT * FROM public.schedule WHERE id = $1`, [id])) as unknown as Schedule[];
    if (schedule.length === 1) return schedule[0];
    return null;
  }

  public async getOrg(id: string) {
    const org = (await this.sql(`SELECT * FROM public.organization WHERE id = $1`, [id])) as unknown as Organization[];
    if (org.length === 1) return org[0];
    return null;
  }

  public async getOrgByWallet(wallet: string) {
    const org = (await this.sql(`SELECT * FROM public.organization WHERE LOWER(wallet) = LOWER($1)`, [
      wallet,
    ])) as unknown as Organization[];
    return org.length === 1 ? org[0] : null;
  }

  public async getOrgByPaynestPlugin(plugin: string) {
    const org = (await this.sql(`SELECT * FROM public.organization WHERE LOWER(plugin) = LOWER($1)`, [
      plugin,
    ])) as unknown as Organization[];
    return org.length === 1 ? org[0] : null;
  }

  public async addTransaction(tx: Transaction) {
    const { tx_id, amount, asset, network, org_id, recipient, username, schedule_id, stream_id } = tx;
    await this.sql(
      `
      INSERT INTO public.transaction (tx_id, amount, asset, network, org_id, recipient, username, schedule_id, stream_id)
      VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
      `,
      [tx_id, amount, asset, network, org_id, recipient, username, schedule_id, stream_id]
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

  public async updatePaymentModel(
    table: "schedule" | "stream",
    id: string,
    fields: Record<string, boolean | number | string>
  ) {
    const updates: string[] = [];
    const values: any[] = [id];
    let paramIndex = 2;

    for (const [key, value] of Object.entries(fields)) {
      if (key === "payout") {
        updates.push(`"${key}" = COALESCE("${key}", 0) + $${paramIndex}`);
      } else {
        updates.push(`"${key}" = $${paramIndex}`);
      }
      values.push(value);
      paramIndex++;
    }

    const setClause = updates.join(", ");
    const query = `UPDATE public.${table} SET ${setClause} WHERE id = $1`;

    await this.sql(query, values);
  }
}

const db = new DB();

export default db;
