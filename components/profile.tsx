// app/page.tsx
import { auth } from "../auth"
import Image from "next/image"

export default async function Profile() {
  const session = await auth() // <- get current session

  return (
    <main className="p-8">
      {session?.user ? (
        <div>
          <Image
            src={session.user.image ?? ""}
            alt={session.user.name ?? "User"}
            width={50}
            height={50}
            className="rounded-full"
          />
          <h1>Hello, {session.user.name}</h1>
          <p>{session.user.email}</p>
        </div>
      ) : (
        <p>Not signed in</p>
      )}
    </main>
  )
}
