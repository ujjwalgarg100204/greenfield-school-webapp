import {
  type Account,
  type AuthOptions,
  type Profile,
  type Session,
  type User,
} from "next-auth";

import { prisma } from "@/lib/prisma";
import jwt from "jsonwebtoken";
import { type JWT } from "next-auth/jwt";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",

      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "your@email.com",
        },
        password: {
          label: "Password",
          type: "password",
        },

        role: {
          label: "role",
          type: "text",
          placeholder: "student, teacher, parent, admin",
        },
      },
      authorize: async credentials => {
        if (credentials === undefined) {
          return null;
        }

        const { email, password } = credentials;

        const user = await prisma.user.findUnique({
          where: {
            email,
          },
        });

        if (user === null) {
          return null;
        }

        const userPassword = user.passwordHash;

        if (password !== userPassword) {
          return null;
        }

        return user;
      },
    }),
  ],

  pages: {
    signIn: "/login",
    signOut: "/auth",
  },

  secret: process.env.NEXTAUTH_SECRET,

  jwt: {
    async encode({ secret, token }) {
      if (token === undefined) {
        throw new Error("No token to encode");
      }
      return jwt.sign(token, secret);
    },

    async decode({ secret, token }) {
      if (token === undefined) {
        throw new Error("No token to decode");
      }

      const decodedToken = jwt.verify(token, secret);

      if (typeof decodedToken === "string") {
        return JSON.parse(decodedToken);
      } else {
        return decodedToken;
      }
    },
  },

  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60,
    updateAge: 24 * 60 * 60,
  },

  callbacks: {
    async session(param: { session: Session; token: JWT; user: User }) {
      if (param.session.user !== undefined) {
        param.session.user.email = param.token.email;
      }

      return param.session;
    },

    async jwt(params: {
      token: JWT;
      user?: User | undefined;
      account?: Account | null | undefined;
      profile?: Profile | undefined;
      isNewUser?: boolean | undefined;
      session?: any;
    }) {
      if (params.user !== undefined) {
        params.token.email = params.user.email;
      }

      return params.token;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

