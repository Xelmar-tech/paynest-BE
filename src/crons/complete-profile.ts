import { db } from "../utils/db";

export default async function completeProfile() {
  const users = await db.getUsersWithNoUsernameAndOrWallet();

  console.log(users);
}
