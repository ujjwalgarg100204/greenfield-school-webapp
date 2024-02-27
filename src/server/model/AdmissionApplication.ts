export default interface AdmissionApplication {
    id: string;
    academicYear: string;
    grade: string;
    studentName: string;
    studentNationality: string;
    studentReligion: string | null;
    studentBloodGroup: string;
    studentMotherTongue: string | null;
    studentGender: string;
    studentDateOfBirth: Date;
    studentPlaceOfBirth: string;
    mobileNumComm: string;
    studentAadharNumber: string | null;
    address: string;
    fatherName: string;
    fatherProfession: string;
    fatherMobileNumber: string;
    fatherEmailId: string;
    fatherAadharNumber: string;
    motherName: string;
    motherProfession: string | null;
    motherEmailId: string | null;
    motherMobileNumber: string;
    motherAadharNumber: string | null;
    siblings: AdmissionApplicationSibling[];
}

export interface AdmissionApplicationSibling {
    name: string;
    grade: string;
}
