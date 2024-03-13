import { createTRPCRouter } from "~/server/controller/trpc";
import { admissionApplicationRouter } from "./routers/admissionApplication.controller";
import { contactUsFormRouter } from "./routers/contact-us.controller";
import { academicYearRouter } from "./routers/academicYear.controller";
import { teacherRouter } from "./routers/teacher.controller";
import { standardRouter } from "./routers/standard.controller";
import { standardSectionController } from "./routers/standard-section.controller";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
    admissionApplication: admissionApplicationRouter,
    contactUsForm: contactUsFormRouter,
    academicYear: academicYearRouter,
    teacher: teacherRouter,
    standard: standardRouter,
    standardSection: standardSectionController,
});

// export type definition of API
export type AppRouter = typeof appRouter;
