export const interval_type = {
    daily: "daily",
    weekly: "weekly",
    biweekly: "biweekly",
    monthly: "monthly",
    quarterly: "quarterly",
    semiannual: "semiannual",
    yearly: "yearly"
} as const;
export type interval_type = (typeof interval_type)[keyof typeof interval_type];
export const network_type = {
    Base: "Base"
} as const;
export type network_type = (typeof network_type)[keyof typeof network_type];
export const token = {
    USDT: "USDT",
    USDC: "USDC"
} as const;
export type token = (typeof token)[keyof typeof token];
export const stream_state = {
    inactive: "inactive",
    active: "active",
    paused: "paused",
    cancelled: "cancelled"
} as const;
export type stream_state = (typeof stream_state)[keyof typeof stream_state];
