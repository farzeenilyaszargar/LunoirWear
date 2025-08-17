import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const { handlers:{ GET, POST }, auth, signIn, signOut } = NextAuth({
    providers: [Google({
      authorization: {
        params: {
          hl: "en",                // 👈 force English
          prompt: "consent",       // (your existing params)
          access_type: "offline",
          response_type: "code",
        },
      },
    }),],
    callbacks: {
        async redirect({ url, baseUrl}) {
            return (baseUrl+'/');
        }
    }

})
