import { type Prisma } from "@prisma/client";
import { z } from "zod";

export class AcademicYearValidator {
    private static baseSchema = z
        .object({
            id: z.string().cuid().optional(),
            startDate: z.coerce.date({
                required_error: "Start Date is required",
                invalid_type_error: "Invalid date provided",
            }),
            endDate: z.coerce.date({
                required_error: "End Date is required",
                invalid_type_error: "Invalid date provided",
            }),
            createdAt: z.coerce
                .date({ invalid_type_error: "Invalid date provided" })
                .optional(),
            updatedAt: z.coerce
                .date({ invalid_type_error: "Invalid date provided" })
                .optional(),
        })
        .superRefine(({ startDate, endDate }, ctx) => {
            // end date must be after start date
            if (startDate >= endDate) {
                ctx.addIssue({
                    code: "custom",
                    path: ["endDate"],
                    message: "End date must be after start Date",
                    fatal: true,
                });
            }
            const startYear = startDate.getFullYear();
            const endYear = endDate.getFullYear();

            if (!(endYear - startYear === 1 && endYear === startYear + 1)) {
                ctx.addIssue({
                    code: "custom",
                    path: ["endDate"],
                    message:
                        "Start date and End date must be exactly year apart",
                    fatal: true,
                });
            }
        }) satisfies z.Schema<Prisma.AcademicYearUncheckedCreateInput>;

    static getBaseSchema() {
        return this.baseSchema;
    }
}
