import { RegistryContract } from "./utils/constants";
import DB from "./utils/db";

const dummy = [
  {
    user: "defi_master",
    network: "Base",
    address: "0x53d284357ec70ce289d6d64134dfac8e511c8a3d",
  },
  {
    user: "nft_collector",
    network: "Arbitrum",
    address: "0xfe9e8709d3215310075d67e3ed32a380ccf451c8",
  },
  {
    user: "yield_farmer",
    network: "Optimism",
    address: "0x5a52e96bacdabb82fd05763e25335261b270efcb",
  },
];

(async () => {
  const db = new DB();
  // const res = await db.createOrg("Xelmar", RegistryContract, RegistryContract, "yield_farmer")
  
  const org = await db.getOrg("Xelmar1")
  console.log(org)
})();
