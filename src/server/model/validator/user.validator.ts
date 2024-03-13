import { UserRole } from "@prisma/client";
import { z } from "zod";

export class UserValidator {
    private static baseSchema = z.object({
        id: z.string({
            required_error: "id is required",
            invalid_type_error: "id must be a string",
        }),
        role: z.enum(
            [UserRole.ADMIN, UserRole.TEACHER, UserRole.STUDENT_PARENT],
            {
                required_error: "Role is required",
                invalid_type_error: "Invalid role provided",
            },
        ),
        username: z.string({
            required_error: "username is required",
            invalid_type_error: "username must be a string",
        }),
        passwordHash: z.string({
            required_error: "passwordHash is required",
            invalid_type_error: "passwordHash must be a string",
        }),
    });

    public static getBaseSchema() {
        return this.baseSchema;
    }

    public static getCreateNewUserSchema() {
        return this.baseSchema.omit({ id: true }).strict();
    }

    public static getUserSignInFormSchema() {
        return this.baseSchema
            .pick({ role: true, username: true })
            .extend({
                password: z.string({
                    required_error: "password is required",
                    invalid_type_error: "password must be a string",
                }),
            })
            .strict();
    }

    public static getUserObjSchema() {
        return this.baseSchema.strict();
    }
}
