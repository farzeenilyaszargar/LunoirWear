"use client";
import { signOut } from "next-auth/react";

export function LogoutButton() {
  return (
    <button
      onClick={() => signOut({ callbackUrl: "/" })} // where to go after logout
        className="bg-white border p-1 pl-2 pr-2 rounded-2xl mt-2 mb-2 hover:invert">

    
      Log out
    </button>
  );
}