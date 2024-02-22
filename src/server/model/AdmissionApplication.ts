import { z } from "zod";
import { AdmissionApplicationValidatorWithZod } from "./validator/AdmissionApplicationValidator";

export default interface AdmissionApplication {
    id: string;
    academicYear: string;
    grade: string;
    studentName: string;
    studentNationality: string;
    studentReligion?: string;
    studentCommunity?: string;
    studentCaste?: string;
    studentBloodGroup: string;
    studentMotherTongue?: string;
    studentGender: string;
    studentDateOfBirth: Date;
    studentPlaceOfBirth: string;
    mobileNumComm: string;
    studentAadharNumber?: string;
    address: string;
    fatherName: string;
    fatherProfession: string;
    fatherMobileNumber: string;
    fatherEmailId: string;
    fatherAadharNumber: string;
    motherName: string;
    motherProfession?: string;
    motherEmailId?: string;
    motherMobileNumber: string;
    motherAadharNumber?: string;
}

export const admissionApplicationBuilder = (
    application: AdmissionApplication,
) => {
    return AdmissionApplicationValidatorWithZod.getApplicationFormSchema()
        .extend({
            id: z.string().optional(),
        })
        .parse(application);
};
