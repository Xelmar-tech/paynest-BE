/// <reference path="../types/chains.d.ts" />

import { privateKeyToAccount } from "viem/accounts";
import { createPubClient, getChain, getEnvVariable } from "./config";

export const PaymentKey = getEnvVariable("PAYMENT_KEY") as Address;

export async function getConsts(network: network_type, key = PaymentKey) {
  const ADMIN = privateKeyToAccount(key);
  const chain = getChain(network);
  const pubClient = createPubClient(network);
  const gas = await pubClient.estimateFeesPerGas({ chain });
  const CONSTS = { ...gas, chain, account: ADMIN } as const;
  return { CONSTS, gas, pubClient };
}

export const paynestDaoFactory = "0xD45F4bEF63BED11e9A67822A2774858D8859FcF3";
