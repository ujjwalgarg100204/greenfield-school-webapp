import { type Prisma } from "@prisma/client";
import { z } from "zod";

export class StandardValidator {
    private static readonly baseSchema = z.object({
        id: z
            .string({
                required_error: "Standard Id is required",
                invalid_type_error: "Standard Id is supposed to be string",
            })
            .cuid("Invalid Standard Id provided"),
        label: z
            .string({
                required_error: "Standard Label is required",
                invalid_type_error: "Standard Label must be string",
            })
            .min(1, "Standard Label must atleast contain 1 character")
            .max(255, "Standard Label can contain atmost 255 characters"),
        academicYearId: z
            .string({
                required_error: "Academic Year Id is required",
                invalid_type_error: "Academic Year Id must be a string",
            })
            .cuid("Invalid Academic Year Id provided"),
    }) satisfies z.Schema<Prisma.StandardUncheckedCreateInput>;

    static getBaseSchema() {
        return this.baseSchema;
    }

    static getNewStandardSchema() {
        return this.baseSchema.omit({ id: true }).strict();
    }

    static getUpdateStandardSchema() {
        return this.baseSchema.strict();
    }

    static getDeleteStandardSchema() {
        return this.baseSchema.omit({ label: true }).strict();
    }

    static getAllStandardsSchema() {
        return this.baseSchema.pick({ academicYearId: true }).strict();
    }
}
