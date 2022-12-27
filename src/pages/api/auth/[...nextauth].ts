import NextAuth, { NextAuthOptions } from "next-auth";

import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  pages: {
    signIn: "/auth/sign-in",
    error: "/auth/error",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials: any, req: any) {
        console.log("credentials -------------------", credentials);
        const { email, password } = credentials;

        

        if (email === "salesline@abc.com" && password === "Salesline@123") {
          return {
            id: "abc",
            name: "Guest user",
            email: "salesline@abc.com",
          };
        } else {
          return null;
        }
      },
    }),
  ],

  callbacks: {
    async jwt({ token, account }: any) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token, user }: any) {
      session.accessToken = token.accessToken;
      return session;
    },
  },

  session: {
    strategy: "jwt",
  },

  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
