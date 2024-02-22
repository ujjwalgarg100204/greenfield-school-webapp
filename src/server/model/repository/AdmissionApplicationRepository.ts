import { db } from "~/server/db";
import type AdmissionApplication from "../AdmissionApplication";

export interface AdmissionApplicationRepository {
    save(
        application: { id?: string } & Omit<AdmissionApplication, "id">,
    ): Promise<void>;
}

export class AdmissionApplicationRepositoryImpl
    implements AdmissionApplicationRepository
{
    public async save(
        application: { id?: string } & Omit<AdmissionApplication, "id">,
    ): Promise<void> {
        await db.admissionApplication.create({
            data: { ...application },
        });
    }
}
