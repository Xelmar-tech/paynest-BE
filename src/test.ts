import db from "./db";

(async () => {
  const res = await db.selectFrom("organization").selectAll().execute();
  console.log(res);
})();
