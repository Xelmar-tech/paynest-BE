import { keccak256, toHex } from "viem";
import db from "./db";

async function usersHash() {
  const users = await db.getUsers();
  const usersHash: Record<string, string> = {};

  users.forEach(({ username }) => {
    const hash = keccak256(toHex(username));
    usersHash[hash] = username;
  });

  return usersHash;
}
export default usersHash;
