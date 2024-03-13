import { createTRPCRouter, publicProcedure } from "~/server/controller/trpc";
import { AdmissionApplicationRepositoryImpl } from "~/server/model/repository/admission-application.repository";
import { AdmissionApplicationValidator } from "~/server/model/validator/admission-application.validator";
import {
    AdmissionApplicationServiceImpl,
    type AdmissionApplicationService,
} from "~/server/service/admission-application.service";

export const admissionApplicationRouter = createTRPCRouter({
    newApplication: publicProcedure
        .input(AdmissionApplicationValidator.getApplicationFormSchema())
        .mutation(async ({ input: newApplication }) => {
            const service: AdmissionApplicationService =
                new AdmissionApplicationServiceImpl(
                    new AdmissionApplicationRepositoryImpl(),
                );
            const applicationWithAcademicYr = {
                ...newApplication,
                academicYear: `${new Date().getFullYear()}-${new Date().getFullYear() + 1}`,
            };
            await service.createNewApplication(applicationWithAcademicYr);
        }),
});
