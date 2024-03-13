import { z } from "zod";

export class AdmissionApplicationValidator {
    private static readonly baseSchema = z.object({
        id: z.string(),
        // FIXME: Might need to make Academic Year dynamic
        academicYear: z
            .string({ required_error: "Academic Year is required" })
            .refine(value => value === "2023-2024" || value === "2024-2025", {
                message: "Invalid academic year selected",
            }),
        // FIXME: Might need to make these Classes/Grades dynamic
        grade: z
            .string({ required_error: "Grade is required" })
            .refine(
                value =>
                    [
                        "Pre-KG",
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
            ),
        studentName: z.string({ required_error: "Student's Name is required" }),
        studentNationality: z.string({
            invalid_type_error: "Student's nationality is required",
        }),
        studentReligion: z.string().nullable(),
        studentBloodGroup: z.string({
            required_error: "Student's blood group is required",
        }),
        studentMotherTongue: z.string().nullable(),
        studentGender: z.enum(["male", "female"], {
            required_error: "Student's gender is required",
            invalid_type_error:
                "Invalid gender, Gender can only be 'male' or 'female'",
        }),
        studentDateOfBirth: z.coerce.date({
            required_error: "Student's date of birth is required",
            invalid_type_error: "Invalid date of birth",
        }),
        studentPlaceOfBirth: z.string({
            required_error: "Student's place of birth is required",
        }),
        mobileNumComm: z
            .string({ required_error: "Mobile number is required" })
            .regex(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/, {
                message: "Invalid mobile number",
            }),
        studentAadharNumber: z
            .string()
            .regex(/^\d{12}$/, {
                message: "Invalid aadhar number, only numbers allowed",
            })
            .nullable(),
        address: z.string({ required_error: "Address is required" }),
        fatherName: z.string({ required_error: "Father name is required" }),
        fatherProfession: z.string({
            required_error: "Father's profession is required",
        }),
        fatherMobileNumber: z
            .string({ required_error: "Father's mobile number is required" })
            .regex(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/, {
                message: "Invalid mobile number",
            }),
        fatherEmailId: z
            .string({ required_error: "Father's email is required" })
            .email({ message: "Invalid email provided" }),
        fatherAadharNumber: z
            .string({ required_error: "Father's aadhar number is required" })
            .regex(/^\d{12}$/, { message: "Invalid aadhar number" }),
        motherName: z.string({ required_error: "Mother's name is required" }),
        motherProfession: z.string().nullable(),
        motherEmailId: z.string().email({ message: "Invalid email" }),
        motherMobileNumber: z
            .string({ required_error: "Mother's mobile number is required" })
            .regex(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/, {
                message: "Invalid mobile number",
            }),
        motherAadharNumber: z.string().regex(/^\d{12}$/, {
            message: "Invalid aadhar number, only 12 digit characters allowed",
        }),
        siblings: z.array(
            z.object({
                name: z.string({
                    required_error: "Sibling's name is required",
                    invalid_type_error: "Name must be a string",
                }),
                grade: z.enum(
                    [
                        "Pre-KG",
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
                    ],
                    {
                        required_error: "Sibling's grade is required",
                        invalid_type_error: "Invalid grade",
                    },
                ),
            }),
        ),
    });

    public static getApplicationFormSchema() {
        return this.baseSchema.omit({ id: true, academicYear: true });
    }

    public static getCreateNewApplicationFormSchema() {
        return this.baseSchema.omit({ id: true });
    }

    public static getApplicationFormObjSchema() {
        return this.baseSchema;
    }
}
