/// <reference path="../types/chains.d.ts" />

const TOKENS = {
  Base: {
    // USDC: "0x890570700059d55ba21e523ad070f0c9b82278a9",
    // USDT: "0x890570700059d55ba21e523ad070f0c9b82278a9",
    USDT: "0xc77595f7BfC1d9bde189B425fa277c01d79B331E",
    USDC: "0xFBB3Ea7a6E1877D04c42F11B020b438Dc1817195",
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
    (token) => networkTokens[token] == address
  );
}
