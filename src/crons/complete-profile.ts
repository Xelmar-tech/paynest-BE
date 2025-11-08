import db from "../db";
import { completeProfileMail } from "../email";

export default async function completeProfile() {
  const users = await db
    .selectFrom("user")
    .leftJoin("wallet", "wallet.username", "user.username")
    .select(["user.email", "user.name", "user.username", "wallet.id as wallet_id"])
    .where((eb) =>
      eb.or([
        eb("user.username", "is", null),
        eb("user.username", "=", ""),
        eb.not(
          eb.exists(eb.selectFrom("wallet").select("wallet.id").whereRef("wallet.username", "=", "user.username"))
        ),
      ])
    )
    .execute();
  console.log(users, "Complete Profile");

  // for (const user of users) {
  //   if (!user.email) continue;
  //   await completeProfileMail({
  //     email: user.email,
  //     recipient: user.name || user.username || undefined,
  //     noUsername: !user.username,
  //     noWallet: user.wallet_id === null,
  //   });
  // }
}
