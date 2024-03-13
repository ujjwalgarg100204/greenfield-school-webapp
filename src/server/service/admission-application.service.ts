import type AdmissionApplication from "../model/AdmissionApplication";
import { type AdmissionApplicationRepository } from "../model/repository/admission-application.repository";
import { AdmissionApplicationValidator } from "../model/validator/admission-application.validator";

export interface AdmissionApplicationService {
    createNewApplication(
        application: Omit<AdmissionApplication, "id">,
    ): Promise<AdmissionApplication>;
}

export class AdmissionApplicationServiceImpl
    implements AdmissionApplicationService
{
    private applicationRepo: AdmissionApplicationRepository;

    public constructor(applicationRepo: AdmissionApplicationRepository) {
        this.applicationRepo = applicationRepo;
    }

    public async createNewApplication(
        application: Omit<AdmissionApplication, "id">,
    ): Promise<AdmissionApplication> {
        const parsed =
            AdmissionApplicationValidator.getCreateNewApplicationFormSchema().parse(
                application,
            );
        return await this.applicationRepo.createNewApplication(parsed);
    }
}
