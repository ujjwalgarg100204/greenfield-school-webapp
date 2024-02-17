import { authRouter } from "./routers/auth";
import { createTRPCRouter } from "@/src/server/api/trpc";
import { galleryRouter } from "./routers/gallery";
import { otpRouter } from "./routers/otp";
import { admissionForm as submitHandler } from "./routers/admissionForm";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
    auth: authRouter,
    gallery: galleryRouter,
    otp: otpRouter,
    admissionForm: submitHandler,
});

// export type definition of API
export type AppRouter = typeof appRouter;
