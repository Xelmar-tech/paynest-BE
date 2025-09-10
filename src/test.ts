import { db } from "./utils/db";
import { getConsts } from "./utils/constants";
import { getBalance } from "./utils";
import { getAddressByToken } from "./utils/token";
import { paymentsPluginAbi } from "./utils/abi";
import {
  ContractFunctionExecutionError,
  ContractFunctionRevertedError,
  getContract,
} from "viem";

async function test() {
  const schedules = await db.getPendingSchedules();
  if (schedules.length === 0) return;

  const { pubClient } = await getConsts("Base");

  for (const { org_id, amount, asset, network, id, username } of schedules) {
    const org = await db.getOrg(org_id);
    if (!org) {
      console.error(`Organization with Org ID ${org_id}, couldn't be found`);
      continue;
    }

    const owner = await db.getUserByUsername(org.owner);
    if (!owner) {
      console.error(
        `Organization owner with username ${org.owner}, couldn't be found`
      );
      continue;
    }

    const token = getAddressByToken(network, asset);
    if (!token) continue;

    const plugin = getContract({
      address: org.plugin,
      abi: paymentsPluginAbi,
      client: pubClient,
    });

    try {
      await plugin.simulate.executeSchedule([username, id]);
      console.log("Simulation was successful");
    } catch (error) {
      if (error instanceof ContractFunctionExecutionError) {
        const cause: string = (error.cause as any).data.errorName;
        if (cause === "ScheduleNotActive") {
          await db.updatePaymentModel("schedule", id, { active: false });
        } else {
          console.error(
            `${error.cause.shortMessage}\n${error.cause.metaMessages?.[0]}`
          );
        }
      } else {
        const errorMessage = (error as any).metaMessages.join("\n");
        console.error(
          `Simulation failed for ${username} on Org ${org.name}:\n${errorMessage}`
        );
      }
      continue; // skip this user if simulation fails
    }
  }
}

test();
