import dotenv from "dotenv";
import { createPublicClient, fallback, http, webSocket } from "viem";
import { base } from "viem/chains";
import type { network_type } from "../generated/prisma";

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
  // switch (network) {
  //   case "Arbitrum":
  //     return arbitrumSepolia;
  //   case "Base":
  //     return base;
  //   case "Optimism":
  //     return optimismSepolia;
  // }
}

export type Client = ReturnType<typeof createPubClient>;
export function createPubClient(network: network_type) {
  const chain = getChain(network);
  return createPublicClient({
    chain,
    transport: fallback([http(QUICKNODE), http(ALCHEMY)]),
  });
}

export function createWSClient(network: network_type) {
  const chain = getChain(network);

  return createPublicClient({
    chain,
    transport: webSocket(INFURA),
  });
}
