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

  public async getPendingSchedules(){
    const TODAY = new Date().setUTCHours(0,0,0,0)
    return this.sql(`SELECT * FROM public.schedule WHERE "nextPayout" < ${TODAY}`) as unknown as SchedulePayment[]
  }
  
  public async getPendingStreams(){
    const today = new Date()
    const TODAY = new Date().setUTCHours(0,0,0,0)
    const WEEK = new Date().setDate(today.getDate() + 7)
    return this.sql(`SELECT * FROM public.stream WHERE "lastPayout" > ${WEEK} AND "endStream" <= ${TODAY}`) as unknown as StreamPayment[]
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

  public async createOrg(name: string, ctrl: Address, org_ca: Address, owner: string){
    return await this.sql(
      `INSERT INTO public.organization (name, controller, address, owner) 
        VALUES ($1, $2, $3, $4)`,
      [name, ctrl, org_ca, owner])
  }

  public async addSchedule(recipient: string, org_name: string, amount: number, network: network_type, token: Token, nextPay: bigint){
    await this.sql(
      `INSERT INTO public.schedule (username, org_id, amount, network, asset, "nextPayout") 
        VALUES ($1, $2, $3, $4, $5, $6)`,
      [recipient, org_name, amount, network, token, nextPay])
  }
}
