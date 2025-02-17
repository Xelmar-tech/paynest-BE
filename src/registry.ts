/// <reference path="./types/chains.d.ts" />

import { getContract } from "viem";
import DB from "./utils/db";
import RegistryABI from "./utils/abi";
import { RegistryContract, RegistryKey, getConsts } from "./utils/constants";

export default async function registry(network: network_type) {
  const db = new DB();

  const new_wallets = await db.getUnsyncedWallets(network);
  if (new_wallets.length === 0) return;

  const { CONSTS, pubClient } = await getConsts(network, RegistryKey);

  const REGISTRY = getContract({
    address: RegistryContract,
    abi: RegistryABI,
    client: pubClient,
  });

  for (const { user_id, address } of new_wallets) {
    const prev_wallet = await REGISTRY.read.getUserAddress([user_id]);
    if (prev_wallet.toLowerCase() === address.toLowerCase()) return;

    await REGISTRY.write.updateUserAddress([user_id, address], CONSTS);
  }
}
