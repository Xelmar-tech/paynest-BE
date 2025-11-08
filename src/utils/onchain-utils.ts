import { type Address, erc20Abi, formatUnits } from "viem";
import { pbClient as client } from "./config";

export async function getDecimals(token: Address) {
  const decimals = await client.readContract({
    address: token,
    abi: erc20Abi,
    functionName: "decimals",
  });
  return decimals;
}

async function getRawBalance(token: Address, contract: Address) {
  const balanceOf = await client.readContract({
    abi: erc20Abi,
    address: token,
    functionName: "balanceOf",
    args: [contract],
  });
  return balanceOf;
}
export async function getBalance(token: Address, contract: Address) {
  const [balanceOf, decimals] = await Promise.all([getRawBalance(token, contract), getDecimals(token)]);
  const balance = formatUnits(balanceOf, decimals);
  return Number(balance);
}

export enum StreamState {
  InActive,
  Active,
  Paused,
  Cancelled,
}
