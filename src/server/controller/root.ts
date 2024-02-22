import { createTRPCRouter } from "~/server/controller/trpc";
import { admissionApplicationRouter } from "./routers/admissionApplication";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
    admissionApplication: admissionApplicationRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
