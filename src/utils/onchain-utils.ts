import { erc20Abi, formatUnits } from "viem";
import { createPubClient } from "./config";

type PublicClient = ReturnType<typeof createPubClient>;
export async function getDecimals(client: PublicClient, token: Address) {
  const decimals = await client.readContract({
    address: token,
    abi: erc20Abi,
    functionName: "decimals",
  });
  return decimals;
}

async function getRawBalance(client: PublicClient, token: Address, contract: Address) {
  const balanceOf = await client.readContract({
    abi: erc20Abi,
    address: token,
    functionName: "balanceOf",
    args: [contract],
  });
  return balanceOf;
}
export async function getBalance(client: PublicClient, token: Address, contract: Address) {
  const [balanceOf, decimals] = await Promise.all([getRawBalance(client, token, contract), getDecimals(client, token)]);
  const balance = formatUnits(balanceOf, decimals);
  return Number(balance);
}

export enum StreamState {
  InActive,
  Active,
  Paused,
  Cancelled,
}
