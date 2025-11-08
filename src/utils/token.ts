import type { Address } from "viem";
import type { NetworkType, Token } from "../db/types";

export const TOKENS = {
  Base: {
    USDC: "0x833589fcd6edb6e08f4c7c32d4f71b54bda02913",
  },
  Arbitrum: {
    USDC: "0x890570700059d55ba21e523ad070f0c9b82278a9",
    USDT: "0x890570700059d55ba21e523ad070f0c9b82278a9",
  },
  Optimism: {
    USDC: "0x890570700059d55ba21e523ad070f0c9b82278a9",
    USDT: "0x890570700059d55ba21e523ad070f0c9b82278a9",
  },
};

export function getTokenByAddress(network: NetworkType, address: Address) {
  const networkTokens = TOKENS[network];
  return (Object.keys(networkTokens) as (keyof typeof networkTokens)[]).find(
    (token) => networkTokens[token].toLowerCase() == address.toLowerCase()
  );
}

export function getAddressByToken(network: NetworkType, asset: Token) {
  if (network !== "Base" || asset !== "USDC") return undefined;
  const networkTokens = TOKENS[network];
  return networkTokens[asset as keyof typeof networkTokens] as Address;
}
