import { createTRPCRouter, publicProcedure } from "../trpc";

import { db } from "@/server/db";

export const postRouter = createTRPCRouter({
  getAll: publicProcedure.query(() => db.post.findMany()),
});
