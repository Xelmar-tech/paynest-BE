import type { ColumnType } from "kysely";
export type Generated<T> = T extends ColumnType<infer S, infer I, infer U>
  ? ColumnType<S, I | undefined, U>
  : ColumnType<T, T | undefined, T>;
export type Timestamp = ColumnType<Date, Date | string, Date | string>;

import type { interval_type, network_type, token, stream_state } from "./enums";

export type organization = {
    id: string;
    owner: string;
    wallet: string;
    plugin: string;
    admin: string;
    logo: string;
    name: string;
    info: string;
    network: network_type;
};
export type schedule = {
    username: string;
    amount: string;
    isOneTime: Generated<boolean>;
    org_id: string;
    nextPayout: string;
    created_at: Generated<Timestamp>;
    updated_at: Timestamp;
    network: network_type;
    asset: token;
    id: string;
    role: string;
    title: string;
    active: Generated<boolean>;
    interval: interval_type;
    payout: Generated<string>;
};
export type stream = {
    username: string;
    amount: string;
    org_id: string;
    lastPayout: Generated<string>;
    created_at: Generated<Timestamp>;
    updated_at: Timestamp;
    network: network_type;
    asset: token;
    id: string;
    payout: Generated<string>;
    role: string;
    title: string;
    state: Generated<stream_state>;
    active: Generated<boolean>;
    interval: interval_type;
};
export type transaction = {
    tx_id: string;
    amount: string;
    asset: token;
    network: network_type;
    created_at: Generated<Timestamp>;
    recipient: string;
    org_id: string;
    username: string;
    schedule_id: string | null;
    stream_id: string | null;
};
export type user = {
    username: string | null;
    image: string | null;
    name: string | null;
    total_payout: Generated<string>;
    uid: string;
    email: string | null;
};
export type waitlist = {
    email: string;
    name: string | null;
    company: string | null;
};
export type wallet = {
    username: string;
    network: network_type;
    address: string;
    id: Generated<number>;
};
export type DB = {
    organization: organization;
    schedule: schedule;
    stream: stream;
    transaction: transaction;
    user: user;
    waitlist: waitlist;
    wallet: wallet;
};
