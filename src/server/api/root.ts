import { createTRPCRouter } from "@/src/server/api/trpc";
import { authRouter } from "./routers/auth";
import { otpRouter } from "./routers/otp";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  auth: authRouter,
  otp: otpRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
