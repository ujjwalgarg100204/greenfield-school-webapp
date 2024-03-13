import { z } from "zod";

export class StandardSectionValidator {
    private static readonly baseSchema = z.object({
        id: z
            .string({
                required_error: "Section id is required",
                invalid_type_error: "Section id is supposed to be string",
            })
            .cuid("Invalid Student id"),
        label: z
            .string({
                required_error: "Section label is required",
                invalid_type_error: "Section Label is supposed to be a string",
            })
            .min(1, "Section Label should have a minimum of 1 character")
            .max(255, "Section label must have a maximum of 255 character"),
        standardId: z
            .string({
                required_error: "Standard Id is required",
                invalid_type_error: "Standard Id is supposed to be a string",
            })
            .cuid("Invalid Standard Id"),
        teacherId: z
            .string({
                required_error: "Teacher id is required",
                invalid_type_error: "Teacher Id is supposed to be a string",
            })
            .cuid("Invalid teacher id"),
        academicYearId: z
            .string({
                required_error: "Academic Year Id is required",
                invalid_type_error:
                    "Academic Year Id is supposed to be a string",
            })
            .cuid("Invalid academic year id"),
    });

    static getBaseSchema() {
        return this.baseSchema;
    }

    static createNewSectionSchema() {
        return this.baseSchema
            .pick({
                label: true,
                teacherId: true,
                standardId: true,
                academicYearId: true,
            })
            .strict();
    }

    static allByStdIdAndAcademicYrIdSchema() {
        return this.baseSchema
            .pick({
                standardId: true,
                academicYearId: true,
            })
            .strict();
    }

    static updateByIdSchema() {
        return this.baseSchema
            .pick({ id: true, label: true, teacherId: true })
            .strict();
    }

    static deleteByIdSchema() {
        return this.baseSchema.pick({ id: true }).strict();
    }
}
