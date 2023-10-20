import { env } from "@/env";
import { db } from "@/server/db";
import { UserCreateInputSchema } from "@/types/zod";
import bcrypt from "bcrypt";

import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

import type {
  GetServerSidePropsContext,
  NextApiRequest,
  NextApiResponse,
} from "next";
import type { NextAuthOptions } from "next-auth";
import { getServerSession } from "next-auth";

export const config = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any) {
        // check if received credentials are valid
        const parsedLoginInfo = UserCreateInputSchema.safeParse({
          username: credentials.username,
          password: credentials.password,
          role: credentials.role,
        });
        if (!parsedLoginInfo.success) return null;

        const { username, password, role } = parsedLoginInfo.data;

        // check to see if user exists
        const foundUser = await db.user.findUnique({
          where: { username },
        });
        if (foundUser === null) return null;

        // check to see if passwords match
        const passwordMatch = await bcrypt.compare(
          password,
          foundUser.password,
        );

        // check to see if roles match
        const roleMatch = foundUser.role === role;
        if (!passwordMatch || !roleMatch) return null;

        // return user if everything is valid
        return foundUser;
      },
    }),
  ],
  callbacks: {
    jwt({ token, user }) {
      // save user details, like id, role and username in jwt token
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.username = user.username;
      }

      return token;
    },
    session({ session, token }) {
      // persist user id, username and role in session
      session.user.id = token.id;
      session.user.role = token.role;
      session.user.username = token.username;

      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  pages: {
    newUser: "/dashboard",
    error: "/error",
    signIn: "/login",
    signOut: "/logout",
  },
  debug: env.NODE_ENV === "development",
} satisfies NextAuthOptions;

// Use it in server contexts
export function auth(
  ...args:
    | [GetServerSidePropsContext["req"], GetServerSidePropsContext["res"]]
    | [NextApiRequest, NextApiResponse]
    | []
) {
  return getServerSession(...args, config);
}

const handler = NextAuth(config);

export { handler as GET, handler as POST };
