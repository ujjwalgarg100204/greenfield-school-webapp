import { createTRPCRouter, publicProcedure } from "../trpc";

import { TRPCError } from "@trpc/server";
import { UserCreateInputSchema } from "@/types/zod";
import bcrypt from "bcrypt";
import { db } from "@/server/db";

export const authRouter = createTRPCRouter({
  signUp: publicProcedure
    .input(UserCreateInputSchema)
    .mutation(async ({ input: { username, password, role } }) => {
      // check if user already exists
      const foundUser = await db.user.findUnique({ where: { username } });
      if (foundUser !== null)
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
    }),
});
