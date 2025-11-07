import db from "./db";

(async () => {
  const _payout = "1.4";
  db.transaction().execute(async (trx) => {
    const res = await trx
      .updateTable("user")
      // .set((eb) => ({ total_payout: eb("total_payout", "+", Number(_payout)) }))
      .set((eb) => ({ total_payout: eb("total_payout", "+", _payout) }))
      .where("username", "=", "steffqing")
      .execute();

    console.log(res);
  });
})();
