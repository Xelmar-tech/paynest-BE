import { parseEventLogs } from "viem";
import { pbClient } from "./utils/config";
import { paymentsPluginAbi } from "./constants/abi";
import { pluginEvent } from "./core/plugin-event";

(async () => {
  const hash =
    "0xf6bb960404de57619d21de558d7ff02690e27b0dbb28ae17a3d042858936e52f";
  const receipts = await pbClient.getTransactionReceipt({ hash });

  const [log] = parseEventLogs({
    abi: paymentsPluginAbi,
    logs: receipts.logs,
    eventName: "InvoiceCreated",
  });

  await pluginEvent(log);
  console.info("Email sent");
})();
