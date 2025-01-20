/// <reference path="../types/chains.d.ts" />

import dotenv from "dotenv";
import { createPublicClient, createWalletClient, http } from "viem";
import { privateKeyToAccount } from "viem/accounts";
import { arbitrumSepolia, baseSepolia, optimismSepolia } from "viem/chains";

dotenv.config();

export function getEnvVariable(variableName: string) {
  const value = process.env[variableName];
  if (value === undefined) {
    throw new Error(`Environment variable ${variableName} is not defined`);
  }
  return value;
}

function getChain(network: network_type) {
  switch (network) {
    case "Arbitrum":
      return arbitrumSepolia;
    case "Base":
      return baseSepolia;
    case "Optimism":
      return optimismSepolia;
  }
}

export function createPubClient(network: network_type) {
  return createPublicClient({
    chain: getChain(network),
    transport: http(),
  });
}

export function createWClient(network: network_type) {
  const privateKey = getEnvVariable("REGISTRY_KEY") as `0x${string}`;
  const account = privateKeyToAccount(privateKey);
  return createWalletClient({
    chain: getChain(network),
    account,
    transport: http(),
  });
}
