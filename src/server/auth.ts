import type { DefaultSession, NextAuthOptions } from "next-auth";

import { env } from "@/src/env.mjs";
import { db } from "@/src/server/db";
import type { Prisma, User as PrismaUser } from "@prisma/client";
import bcrypt from "bcrypt";
import { getServerSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { z } from "zod";

const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z
    .object({
        id: z.string().cuid().optional(),
        role: z.enum(["student", "teacher", "admin", "parent"]),
        username: z
            .string()
            .min(6, { message: "short-input" })
            .max(16, { message: "long-input" }),
        password: z
            .string()
            .min(6, { message: "short-input" })
            .max(16, { message: "long-input" }),
    })
    .strict();

/**
 * Module augmentation for `next-auth` types. Allows us to add custom properties to the `session`
 * object and keep type safety.
 *
 * @see https://next-auth.js.org/getting-started/typescript#module-augmentation
 */
declare module "next-auth" {
    /**
     * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */
    interface Session extends DefaultSession {
        user: Pick<PrismaUser, "id" | "role" | "username">;
    }

    interface User {
        id: PrismaUser["id"];
        role: PrismaUser["role"];
        username: PrismaUser["username"];
    }
}

/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 *
 * @see https://next-auth.js.org/configuration/options
 */
export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" },
                role: { label: "Role", type: "text" },
            },
            async authorize(credentials) {
                if (!credentials) return null;
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
            // eslint-disable-next-line
            if (user) {
                token.id = user.id;
                token.role = user.role;
                token.username = user.username;
            }

            return token;
        },
        session({ session, token }) {
            // persist user id, username and role in session
            session.user.id = token.id as PrismaUser["id"];
            session.user.role = token.role as PrismaUser["role"];
            session.user.username = token.username as PrismaUser["username"];

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
};

/**
 * Wrapper for `getServerSession` so that you don't need to import the `authOptions` in every file.
 *
 * @see https://next-auth.js.org/configuration/nextjs
 */
export const getServerAuthSession = () => getServerSession(authOptions);
