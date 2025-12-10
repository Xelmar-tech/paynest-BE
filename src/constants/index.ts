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

export const paynestDaoFactory = "0x9a30D7f68095fe7506f12f62f188789374026593";
export const deploymentBlock = 34033324;
export const USDC = "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913";
export const FEE_COLLECTOR = "0xa09902f06abfcf842cc129b9b71882c4481fad26";
