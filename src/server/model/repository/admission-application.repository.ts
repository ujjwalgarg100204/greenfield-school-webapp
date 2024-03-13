import { db } from "~/server/db";
import type AdmissionApplication from "../AdmissionApplication";
import { AdmissionApplicationValidator } from "../validator/admission-application.validator";

export interface AdmissionApplicationRepository {
    createNewApplication(
        application: Omit<AdmissionApplication, "id">,
    ): Promise<AdmissionApplication>;
}

export class AdmissionApplicationRepositoryImpl
    implements AdmissionApplicationRepository
{
    public async createNewApplication(
        application: Omit<AdmissionApplication, "id">,
    ): Promise<AdmissionApplication> {
        const { siblings, ...rest } =
            AdmissionApplicationValidator.getCreateNewApplicationFormSchema().parse(
                application,
            );

        return await db.admissionApplication.create({
            data: { ...rest, siblings: { createMany: { data: siblings } } },
            include: { siblings: true },
        });
    }
}
