import { erc20Abi } from "viem";
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
