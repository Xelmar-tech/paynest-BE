import payments from "./payment";
import transactions from "./transactions";
import db from "./utils/db";

async function main() {
  // const s = await db.getSchedules();
  // console.log(s);
  await payments("Base");
}
main();
