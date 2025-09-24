import { completeProfileMail } from "../email";
import prisma from "../lib/prisma";

export default async function completeProfile() {
  const users = await prisma.user.findMany({
    where: {
      OR: [{ username: null }, { username: "" }, { wallets: { none: {} } }],
    },
    select: { email: true, name: true, username: true, wallets: { select: { id: true } } },
  });

  for (const user of users) {
    if (!user.email) continue;
    await completeProfileMail({
      email: user.email,
      recipient: user.name || user.username || undefined,
      noUsername: !user.username,
      noWallet: user.wallets.length === 0,
    });
  }
}
