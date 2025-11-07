import dotenv from "dotenv";
import { createPublicClient, fallback, http, webSocket } from "viem";
import { base } from "viem/chains";
import type { network_type } from "@prisma/client";

dotenv.config();

export function getEnvVariable(variableName: string) {
  const value = process.env[variableName];
  if (value === undefined) {
    throw new Error(`Environment variable ${variableName} is not defined`);
  }
  return value;
}

const INFURA = getEnvVariable("INFURA");
const QUICKNODE = getEnvVariable("QUICKNODE");
const ALCHEMY = getEnvVariable("ALCHEMY");

export function getChain(_network: network_type) {
  return base;
}

export const pbClient = createPublicClient({
  chain: base,
  transport: fallback([http(QUICKNODE), http(ALCHEMY)]),
});

export const wsClient = createPublicClient({
  chain: base,
  transport: webSocket(INFURA),
});
