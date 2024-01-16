import { createTRPCRouter, publicProcedure } from "../trpc";

import { TRPCError } from "@trpc/server";
import { UserCreateInputSchema } from "@/src/types/zod";
import bcrypt from "bcrypt";

export const authRouter = createTRPCRouter({
  signUp: publicProcedure
    .input(UserCreateInputSchema)
    .mutation(
      async ({ ctx: { db, session }, input: { username, password, role } }) => {
        // if session already exists throw error
        if (session)
          throw new TRPCError({
            code: "PRECONDITION_FAILED",
            message: "Already logged in, please log out first",
          });

        // check if user already exists
        const foundUser = await db.user.findUnique({
          where: { username },
        });
        if (foundUser)
          throw new TRPCError({
            code: "CONFLICT",
            message: "User already exists",
          });

        // create new user
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await db.user.create({
          data: { username, password: hashedPassword, role },
        });

        return newUser;
      },
    ),
});
