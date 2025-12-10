import { parseAbiItem, formatUnits, decodeFunctionData, erc20Abi, getAddress } from "viem";
import { deploymentBlock, FEE_COLLECTOR, USDC } from "../constants";
import db from "../db";
import redis from "../lib/redis";
import { pbClient } from "../utils/config";
import { NetworkType, Token, TransactionType } from "../db/types";
import { getTxDate } from "../helpers/onchain-helpers";

const proposalEvent = parseAbiItem(
  "event ProposalCreated(uint256 indexed proposalId, address indexed creator, uint64 startDate, uint64 endDate, bytes metadata, (address to, uint256 value, bytes data)[] actions, uint256 allowFailureMap)"
);

export default async function trackAdminEvents() {
  const org_admins = await db.selectFrom("organization").select(["admin", "id"]).execute();

  const validAdminContracts = org_admins.map((org) => getAddress(org.admin.toLowerCase()));

  const lastBlock = await redis.get<number>("admin-event-block");
  const from = lastBlock ? BigInt(lastBlock) : BigInt(deploymentBlock);

  const logs = await pbClient.getLogs({
    address: validAdminContracts,
    fromBlock: from,
    event: proposalEvent,
    strict: true,
  });

  console.log(`Found ${logs.length} admin proposal events`);

  for (const log of logs) {
    const hash = log.transactionHash;

    const org = org_admins.find((o) => o.admin.toLowerCase() === log.address.toLowerCase());
    if (!org) continue;

    for (const action of log.args.actions) {
      if (action.to.toLowerCase() !== USDC.toLowerCase()) continue;

      try {
        const decoded = decodeFunctionData({
          abi: erc20Abi,
          data: action.data,
        });

        if (decoded.functionName === "transfer") {
          const [recipient, amountWei] = decoded.args;
          const amount = formatUnits(amountWei, 6);

          let type = TransactionType.WITHDRAWAL;
          if (recipient.toLowerCase() === FEE_COLLECTOR.toLowerCase()) {
            type = TransactionType.FEE;
          }

          const date = await getTxDate(hash);

          const tx = {
            tx_id: hash,
            network: NetworkType.BASE,
            amount,
            asset: Token.USDC,
            recipient,
            org_id: org.id,
            created_at: date,
            type,
          } as const;

          await db
            .insertInto("transaction")
            .values(tx)
            .onConflict((oc) => oc.column("tx_id").doNothing())
            .execute();
        }
      } catch (e) {
        console.error(`Failed to decode action in tx ${hash}`, e);
      }
    }
  }
  const nowBlock = await pbClient.getBlockNumber();
  await redis.set("admin-event-block", Number(nowBlock));
}
