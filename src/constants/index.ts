import { type Address, privateKeyToAccount } from "viem/accounts";
import { pbClient, getChain, getEnvVariable } from "../utils/config";
import type { NetworkType } from "../db/types";

export const PaymentKey = getEnvVariable("PAYMENT_KEY") as Address;

export async function getConsts(network: NetworkType, key = PaymentKey) {
  const ADMIN = privateKeyToAccount(key);
  const chain = getChain(network);
  const gas = await pbClient.estimateFeesPerGas({ chain });
  return { ...gas, chain, account: ADMIN } as const;
}

export const paynestDaoFactory = "0xD45F4bEF63BED11e9A67822A2774858D8859FcF3";
