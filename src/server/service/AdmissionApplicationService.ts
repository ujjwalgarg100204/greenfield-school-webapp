import type AdmissionApplication from "../model/AdmissionApplication";
import { type AdmissionApplicationRepository } from "../model/repository/AdmissionApplicationRepository";

export interface AdmissionApplicationService {
    save(
        application: { id?: string } & Omit<AdmissionApplication, "id">,
    ): Promise<void>;
}

export class AdmissionApplicationServiceImpl
    implements AdmissionApplicationService
{
    private applicationRepo: AdmissionApplicationRepository;

    public constructor(applicationRepo: AdmissionApplicationRepository) {
        this.applicationRepo = applicationRepo;
    }
    public async save(
        application: { id?: string } & Omit<AdmissionApplication, "id">,
    ): Promise<void> {
        await this.applicationRepo.save(application);
    }
}
