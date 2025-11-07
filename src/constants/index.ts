import { type Address, privateKeyToAccount } from "viem/accounts";
import { pbClient, getChain, getEnvVariable } from "../utils/config";
import type { network_type } from "../db/types";

export const PaymentKey = getEnvVariable("PAYMENT_KEY") as Address;

export async function getConsts(network: network_type, key = PaymentKey) {
  const ADMIN = privateKeyToAccount(key);
  const chain = getChain(network);
  const gas = await pbClient.estimateFeesPerGas({ chain });
  const CONSTS = { ...gas, chain, account: ADMIN } as const;
  return { CONSTS, gas, pubClient: pbClient };
}

export const paynestDaoFactory = "0xD45F4bEF63BED11e9A67822A2774858D8859FcF3";
