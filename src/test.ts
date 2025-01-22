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
  await Promise.all(
    dummy.map((d) => db.addWallet(d.user, d.network, d.address))
  );
  const wallets = await db.getUnsyncedWallets("Base");
  console.log(wallets);
})();
