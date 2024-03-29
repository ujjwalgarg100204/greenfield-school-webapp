import { type Prisma } from "@prisma/client";
import { z } from "zod";

export class TeacherValidator {
    private static readonly baseSchema = z.object({
        id: z
            .string({
                required_error: "Teacher Id is required",
                invalid_type_error: "Teacher Id should be a string",
            })
            .cuid({ message: "Invalid id provided" }),
        name: z
            .string({
                required_error: "Name of teacher is required",
                invalid_type_error: "Name of teacher should be a string",
            })
            .min(3, "Name of teacher should contain minimum of 3 characters")
            .max(50, "Name of Teacher can contain a maximum of 50 characters"),
        email: z
            .string({
                invalid_type_error: "Email of teacher should be a string",
            })
            .email({ message: "Invalid email provided" }),
        phone: z
            .string()
            .regex(/^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/, {
                message: "Invalid mobile number provided",
            }),
        academicYearId: z
            .string({
                required_error: "Academic Year Id is required",
                invalid_type_error: "Academic Year Id should be a string",
            })
            .cuid({ message: "Invalid academic year id provided" }),
        createdAt: z.date().optional(),
        updatedAt: z.date().optional(),
    }) satisfies z.Schema<Prisma.TeacherUncheckedCreateInput>;

    static getBaseSchema() {
        return this.baseSchema;
    }

    static getAllTeacherSchema() {
        return this.baseSchema.pick({ academicYearId: true }).strict();
    }

    static getNewTeacherSchema() {
        return this.baseSchema
            .pick({
                name: true,
                email: true,
                phone: true,
                academicYearId: true,
            })
            .partial({ email: true, phone: true })
            .strict();
    }

    static getUpdateTeacherSchema() {
        return this.baseSchema
            .pick({
                name: true,
                email: true,
                phone: true,
                academicYearId: true,
                id: true,
            })
            .partial({ email: true, phone: true })
            .strict();
    }

    static getDeleteTeacherSchema() {
        return this.baseSchema
            .pick({ id: true, academicYearId: true })
            .strict();
    }
}
