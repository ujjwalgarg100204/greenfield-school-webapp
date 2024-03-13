import { z } from "zod";

export class ContactUsFormValidator {
    private static readonly baseSchema = z.object({
        name: z.string().min(1, "Name is required"),
        phone: z
            .string()
            .regex(/^(\+?91|0)?[6789]\d{9}$/, "Invalid phone number"),
        query: z.string().min(5, "Query is required"),
    });

    public static getBaseSchema() {
        return this.baseSchema;
    }
}
