/// <reference path="../types/chains.d.ts" />

import dotenv from "dotenv";
import { createPublicClient, fallback, http } from "viem";
import { arbitrumSepolia, base, optimismSepolia } from "viem/chains";

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

export function getChain(network: network_type) {
  switch (network) {
    case "Arbitrum":
      return arbitrumSepolia;
    case "Base":
      return base;
    case "Optimism":
      return optimismSepolia;
  }
}

export type Client = ReturnType<typeof createPubClient>;
export function createPubClient(network: network_type) {
  const chain = getChain(network);
  return createPublicClient({
    chain,
    transport: fallback([http(QUICKNODE), http(INFURA), http(ALCHEMY)]),
  });
}
