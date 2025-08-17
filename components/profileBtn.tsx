import { auth } from "@/auth";

import Image from "next/image";

export default async function Header() {
  const session = await auth(); // null if not signed in
  const user = session?.user;

  return (
    <div className="flex items-center gap-3">
      {user ? (
        <>
          <Image
            src={user.image ?? "/icons/profile.png"}
            alt={user.name ?? "User"}
            className="h-8 w-8 rounded-full"
            width={25}
            height={25}
          />
        </>
      ) : (
        <a href="/login">Sign in</a>
      )}
    </div>
  );
}
