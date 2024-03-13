import { createTRPCRouter } from "~/server/controller/trpc";
import { admissionApplicationController } from "./routers/admissionApplication.controller";
import { contactUsController } from "./routers/contact-us.controller";
import { academicYearController } from "./routers/academicYear.controller";
import { teacherController } from "./routers/teacher.controller";
import { standardController } from "./routers/standard.controller";
import { standardSectionController } from "./routers/standard-section.controller";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
    admissionApplication: admissionApplicationController,
    contactUsForm: contactUsController,
    academicYear: academicYearController,
    teacher: teacherController,
    standard: standardController,
    standardSection: standardSectionController,
});

// export type definition of API
export type AppRouter = typeof appRouter;
