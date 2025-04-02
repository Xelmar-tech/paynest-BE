/// <reference path="../types/chains.d.ts" />

const TOKENS = {
  Base: {
    USDC: "0x890570700059d55ba21e523ad070f0c9b82278a9",
    USDT: "0x890570700059d55ba21e523ad070f0c9b82278a9",
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

export function getTokenByAddress(network: network_type, address: Address) {
  const networkTokens = TOKENS[network];
  return (Object.keys(networkTokens) as (keyof typeof networkTokens)[]).find(
    (token) => networkTokens[token] === address
  );
}
