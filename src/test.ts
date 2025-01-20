import DB from "./utils/db";

(async () => {
  const db = new DB();
  const users = await db.getUsers();
  console.log(users);
})();
