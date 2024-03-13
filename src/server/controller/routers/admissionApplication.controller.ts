import { createTRPCRouter, publicProcedure } from "~/server/controller/trpc";
import {
    type AdmissionApplicationRepository,
    AdmissionApplicationRepositoryImpl,
} from "~/server/model/repository/admission-application.repository";
import { AdmissionApplicationValidator } from "~/server/model/validator/admission-application.validator";
import {
    AdmissionApplicationServiceImpl,
    type AdmissionApplicationService,
} from "~/server/service/admission-application.service";

const admissionAppRepo: AdmissionApplicationRepository =
    new AdmissionApplicationRepositoryImpl();
const admissionAppSvc: AdmissionApplicationService =
    new AdmissionApplicationServiceImpl(admissionAppRepo);

export const admissionApplicationController = createTRPCRouter({
    newApplication: publicProcedure
        .input(AdmissionApplicationValidator.getApplicationFormSchema())
        .mutation(async ({ input: newApplication }) => {
            const applicationWithAcademicYr = {
                ...newApplication,
                academicYear: `${new Date().getFullYear()}-${new Date().getFullYear() + 1}`,
            };
            await admissionAppSvc.createNewApplication(
                applicationWithAcademicYr,
            );
        }),
});
