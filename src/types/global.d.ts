import type { User as PrismaUser } from "@prisma/client";
import "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: Pick<PrismaUser, "id" | "role" | "username">;
  }

  /**
   * The shape of the user object returned in the OAuth providers' `profile` callback,
   * or the second parameter of the `session` callback, when using a database.
   */
  interface User extends Pick<PrismaUser, "id" | "role" | "username"> {}
}

declare module "next-auth/jwt" {
  /** Returned by the `jwt` callback and `getToken`, when using JWT sessions */
  interface JWT extends Pick<PrismaUser, "id" | "role" | "username"> {}
}
// eslint-disable-next-line
export {};
