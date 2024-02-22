import { z } from "zod";

export class AdmissionApplicationValidatorWithZod {
    // FIXME: Might need to make Academic Year dynamic, fetch from database
    private static readonly academicYearSchema = z
        .string()
        .min(1, { message: "Academic Year is required" })
        .refine(value => value === "2023-2024" || value === "2024-2025", {
            message: "Invalid academic year selected",
        });
    // FIXME: Might need to make these Classes/Grades dynamic, fetch from database
    private static readonly gradeSchema = z
        .string()
        .min(1, { message: "Grade is required" })
        .refine(
            value =>
                [
                    "PKG",
                    "LKG",
                    "UKG",
                    "1",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "11",
                    "12",
                ].includes(value),
            { message: "Invalid class selected" },
        );
    private static readonly studentNameSchema = z
        .string()
        .min(1, { message: "Student's Name is required" });
    private static readonly studentNationalitySchema = z
        .string()
        .min(1, { message: "Student's nationality is required" });
    private static readonly studentReligionSchema = z.string();
    private static readonly studentCommunitySchema = z.string();
    private static readonly studentCasteSchema = z.string();
    private static readonly studentBloodGroupSchema = z
        .string()
        .min(1, { message: "Student's blood group is required" });
    private static readonly studentMotherTongueSchema = z.string();
    private static readonly studentGenderSchema = z.enum(["male", "female"], {
        required_error: "Student's gender is required",
        invalid_type_error:
            "Invalid gender, Gender can only be 'male' or 'female'",
    });
    private static readonly studentDateOfBirthSchema = z.coerce.date({
        required_error: "Student's date of birth is required",
        invalid_type_error: "Invalid date of birth",
    });
    private static readonly studentPlaceOfBirthSchema = z
        .string()
        .min(1, { message: "Student's place of birth is required" });
    private static readonly mobileNumCommSchema = z
        .string()
        .min(1, { message: "Mobile number is required" })
        .regex(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/, {
            message: "Invalid mobile number",
        });
    private static readonly studentAadharNumberSchema = z
        .string()
        .regex(/^\d{12}$/, {
            message: "Invalid aadhar number, only numbers allowed",
        });
    private static readonly addressSchema = z
        .string()
        .min(1, { message: "Address is required" });
    private static readonly fatherNameSchema = z
        .string()
        .min(1, { message: "Father name is required" });
    private static readonly fatherProfessionSchema = z
        .string()
        .min(1, { message: "Father's profession is required" });
    private static readonly fatherMobileNumberSchema = z
        .string()
        .min(1, { message: "Father's mobile number is required" })
        .regex(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/, {
            message: "Invalid mobile number",
        });
    private static readonly fatherEmailIdSchema = z
        .string()
        .min(1, { message: "Father's email is required" })
        .email({ message: "Invalid email provided" });
    private static readonly fatherAadharNumberSchema = z
        .string()
        .min(1, { message: "Father's aadhar number is required" })
        .regex(/^\d{12}$/, { message: "Invalid aadhar number" });
    private static readonly motherNameSchema = z
        .string()
        .min(1, { message: "Mother's name is required" });
    private static readonly motherProfessionSchema = z.string();
    private static readonly motherEmailIdSchema = z
        .string()
        .email({ message: "Invalid email" });
    private static readonly motherMobileNumberSchema = z
        .string()
        .min(1, { message: "Mother's mobile number is required" })
        .regex(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/, {
            message: "Invalid mobile number",
        });
    private static readonly motherAadharNumberSchema = z
        .string()
        .regex(/^\d{12}$/, {
            message: "Invalid aadhar number, only 12 digit characters allowed",
        });

    public static validateAcademicYear(val: string): string {
        const parsed = this.academicYearSchema.safeParse(val);
        if (parsed.success) return parsed.data;
        throw new Error(parsed.error.message);
    }
    public static validateGrade(val: string): string {
        const parsed = this.gradeSchema.safeParse(val);
        if (parsed.success) return parsed.data;
        throw new Error(parsed.error.message);
    }
    public static validateStudentName(val: string): string {
        const parsed = this.studentNameSchema.safeParse(val);
        if (parsed.success) return parsed.data;
        throw new Error(parsed.error.message);
    }
    public static validateStudentNationality(val: string): string {
        const parsed = this.studentNationalitySchema.safeParse(val);
        if (parsed.success) return parsed.data;
        throw new Error(parsed.error.message);
    }
    public static validateStudentReligion(val: string): string {
        const parsed = this.studentReligionSchema.safeParse(val);
        if (parsed.success) return parsed.data;
        throw new Error(parsed.error.message);
    }
    public static validateStudentCommunity(val: string): string {
        const parsed = this.studentCommunitySchema.safeParse(val);
        if (parsed.success) return parsed.data;
        throw new Error(parsed.error.message);
    }
    public static validateStudentBloodGroup(val: string): string {
        const parsed = this.studentBloodGroupSchema.safeParse(val);
        if (parsed.success) return parsed.data;
        throw new Error(parsed.error.message);
    }
    public static validateStudentMotherTongue(val: string): string {
        const parsed = this.studentMotherTongueSchema.safeParse(val);
        if (parsed.success) return parsed.data;
        throw new Error(parsed.error.message);
    }
    public static validateStudentGender(val: string): string {
        const parsed = this.studentGenderSchema.safeParse(val);
        if (parsed.success) return parsed.data;
        throw new Error(parsed.error.message);
    }
    public static validateStudentDateOfBirth(val: string): Date {
        const parsed = this.studentDateOfBirthSchema.safeParse(val);
        if (parsed.success) return parsed.data;
        throw new Error(parsed.error.message);
    }
    public static validateStudentPlaceOfBirth(val: string): string {
        const parsed = this.studentPlaceOfBirthSchema.safeParse(val);
        if (parsed.success) return parsed.data;
        throw new Error(parsed.error.message);
    }
    public static validateMobileNumComm(val: string): string {
        const parsed = this.mobileNumCommSchema.safeParse(val);
        if (parsed.success) return parsed.data;
        throw new Error(parsed.error.message);
    }
    public static validateStudentAadharNumber(val: string): string {
        const parsed = this.studentAadharNumberSchema.safeParse(val);
        if (parsed.success) return parsed.data;
        throw new Error(parsed.error.message);
    }
    public static validateAddress(val: string): string {
        const parsed = this.addressSchema.safeParse(val);
        if (parsed.success) return parsed.data;
        throw new Error(parsed.error.message);
    }
    public static validateFatherName(val: string): string {
        const parsed = this.fatherNameSchema.safeParse(val);
        if (parsed.success) return parsed.data;
        throw new Error(parsed.error.message);
    }
    public static validateFatherMobileNumber(val: string): string {
        const parsed = this.fatherMobileNumberSchema.safeParse(val);
        if (parsed.success) return parsed.data;
        throw new Error(parsed.error.message);
    }
    public static validateFatherEmailId(val: string): string {
        const parsed = this.fatherEmailIdSchema.safeParse(val);
        if (parsed.success) return parsed.data;
        throw new Error(parsed.error.message);
    }
    public static validateFatherAadharNumber(val: string): string {
        const parsed = this.fatherAadharNumberSchema.safeParse(val);
        if (parsed.success) return parsed.data;
        throw new Error(parsed.error.message);
    }
    public static validateMotherName(val: string): string {
        const parsed = this.motherNameSchema.safeParse(val);
        if (parsed.success) return parsed.data;
        throw new Error(parsed.error.message);
    }
    public static validateMotherProfession(val: string): string {
        const parsed = this.motherProfessionSchema.safeParse(val);
        if (parsed.success) return parsed.data;
        throw new Error(parsed.error.message);
    }
    public static validateMotherEmailId(val: string): string {
        const parsed = this.motherEmailIdSchema.safeParse(val);
        if (parsed.success) return parsed.data;
        throw new Error(parsed.error.message);
    }
    public static validateMotherMobileNumber(val: string): string {
        const parsed = this.motherMobileNumberSchema.safeParse(val);
        if (parsed.success) return parsed.data;
        throw new Error(parsed.error.message);
    }
    public static validateMotherAadharNumber(val: string): string {
        const parsed = this.motherAadharNumberSchema.safeParse(val);
        if (parsed.success) return parsed.data;
        throw new Error(parsed.error.message);
    }
    public static getApplicationFormSchema() {
        return z.object({
            // FIXME: Might need to make Academic Year dynamic
            academicYear: this.academicYearSchema,
            // FIXME: Might need to make these Classes/Grades dynamic
            grade: this.gradeSchema,
            studentName: this.studentNameSchema,
            studentNationality: this.studentNationalitySchema,
            studentReligion: this.studentReligionSchema,
            studentCommunity: this.studentCommunitySchema,
            studentCaste: this.studentCasteSchema,
            studentBloodGroup: this.studentBloodGroupSchema,
            studentMotherTongue: this.studentMotherTongueSchema,
            studentGender: this.studentGenderSchema,
            studentDateOfBirth: this.studentDateOfBirthSchema,
            studentPlaceOfBirth: this.studentPlaceOfBirthSchema,
            mobileNumComm: this.mobileNumCommSchema,
            studentAadharNumber: this.studentAadharNumberSchema,
            address: this.addressSchema,
            fatherName: this.fatherNameSchema,
            fatherProfession: this.fatherProfessionSchema,
            fatherMobileNumber: this.fatherMobileNumberSchema,
            fatherEmailId: this.fatherEmailIdSchema,
            fatherAadharNumber: this.fatherAadharNumberSchema,
            motherName: this.motherNameSchema,
            motherProfession: this.motherProfessionSchema,
            motherEmailId: this.motherEmailIdSchema,
            motherMobileNumber: this.motherMobileNumberSchema,
            motherAadharNumber: this.motherAadharNumberSchema,
        });
    }
}
