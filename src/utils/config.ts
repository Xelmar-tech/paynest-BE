/// <reference path="../types/chains.d.ts" />

import dotenv from "dotenv";
import { createPublicClient, fallback, http } from "viem";
import { arbitrumSepolia, baseSepolia, optimismSepolia } from "viem/chains";

dotenv.config();

export function getEnvVariable(variableName: string) {
  const value = process.env[variableName];
  if (value === undefined) {
    throw new Error(`Environment variable ${variableName} is not defined`);
  }
  return value;
}

export function getChain(network: network_type) {
  switch (network) {
    case "Arbitrum":
      return arbitrumSepolia;
    case "Base":
      return baseSepolia;
    case "Optimism":
      return optimismSepolia;
  }
}

function getTransports(network: network_type) {
  const chain = getChain(network);
  const _network = `${network.toLowerCase()}${chain.testnet ? "-sepolia" : ""}`;

  const INFURA_KEY = getEnvVariable("INFURA_KEY");
  const QUICKNODE_KEY = getEnvVariable("QUICKNODE_KEY");
  const ALCHEMY_KEY = getEnvVariable("ALCHEMY_KEY");

  const infura_transport = `https://${_network}.infura.io/v3/${INFURA_KEY}`;
  const quicknode_transport = `https://misty-little-mansion.${_network}.quiknode.pro/${QUICKNODE_KEY}`;
  const alchemy_transport = `https://${_network}.g.alchemy.com/v2/${ALCHEMY_KEY}`;

  return fallback([http(infura_transport), http(quicknode_transport), http(alchemy_transport)]);
}

export function createPubClient(network: network_type) {
  const chain = getChain(network);
  const transports = getTransports(network);
  return createPublicClient({
    chain,
    transport: transports,
  });
}
