import { db } from "./utils/db";

async function main() {
  console.time("getUserByUsername");
  const schedules = await db.getUserByUsername("steffqing");
  console.timeEnd("getUserByUsername");
  console.log(schedules);
}

main();
