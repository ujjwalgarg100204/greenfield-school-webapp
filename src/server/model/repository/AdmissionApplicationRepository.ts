import { db } from "~/server/db";
import type AdmissionApplication from "../AdmissionApplication";
import { AdmissionApplicationValidator } from "../validator/AdmissionApplicationValidator";

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
        const parsed =
            AdmissionApplicationValidator.getCreateNewApplicationFormSchema().parse(
                application,
            );
            // FIXME: sibling data not reflected in db
            // @ts-expect-error sibling data not reflected in database
        return await db.admissionApplication.create({
            data: { ...parsed },
        });
    }
}
