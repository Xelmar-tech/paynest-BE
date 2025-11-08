import upcomingPayments from "./crons/upcoming-payment";
import pg from "./db";
import payments from "./core/payment";
import { spamCheck } from "./email";

(async () => {
  // const _payout = "1.4";
  // db.transaction().execute(async (trx) => {
  //   const res = await trx
  //     .updateTable("user")
  //     // .set((eb) => ({ total_payout: eb("total_payout", "+", Number(_payout)) }))
  //     .set((eb) => ({ total_payout: eb("total_payout", "+", _payout) }))
  //     .where("username", "=", "steffqing")
  //     .execute();

  //   console.log(res);
  // });
  //
  // await pg.selectFrom("user").selectAll().where("username", "=", "steffqing").executeTakeFirst();

  // await Promise.all([upcomingPayments(), payments(), completeProfile(), failedEvents()])
  //   .then(() => console.log("Initial run completed successfully"))
  //   .catch((e) => console.error("Error in initial run", e));

  const sendMail = await spamCheck("low-balance", "test", "steveola23@gmail.com");
  console.log(sendMail);
  // await payments();
})();
