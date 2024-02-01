"use client";

import { Input } from "@/src/app/_lib/next-ui";
import { useScopedI18n } from "@/src/app/_locales/client";
import type Translation from "@/src/app/_locales/languages/en";
import { type Prisma } from "@prisma/client";
import type { FC } from "react";
import { useFormContext } from "react-hook-form";
import { z } from "zod";

type UserIdErrorType =
    keyof (typeof Translation)["login"]["sub-links"]["index"]["content"]["inputs"]["user-id"]["error"];
type PasswordErrorType =
    keyof (typeof Translation)["login"]["sub-links"]["index"]["content"]["inputs"]["password"]["error"];

const UserCreateInputSchema: z.ZodType<Prisma.UserCreateInput> = z
    .object({
        id: z.string().cuid().optional(),
        role: z.enum(["student", "teacher", "admin", "parent"]),
        username: z
            .string()
            .min(6, { message: "short-input" })
            .max(16, { message: "long-input" }),
        password: z
            .string()
            .min(6, { message: "short-input" })
            .max(16, { message: "long-input" }),
    })
    .strict();
const CredentialInputs: FC = () => {
    const t = useScopedI18n("login.sub-links.index");
    const {
        register,
        formState: { errors },
    } = useFormContext<z.infer<typeof UserCreateInputSchema>>();

    return (
        <div className="space-y-9">
            <Input
                type="text"
                radius="sm"
                label={t("content.inputs.user-id.label")}
                variant="bordered"
                labelPlacement="outside"
                placeholder={t("content.inputs.user-id.placeholder")}
                isInvalid={errors.username !== undefined}
                errorMessage={
                    errors.username?.message !== undefined
                        ? t(
                              `content.inputs.user-id.error.${
                                  errors.username.message as UserIdErrorType
                              }`,
                          )
                        : ""
                }
                classNames={{ label: "font-semibold" }}
                {...register("username")}
            />
            <Input
                radius="sm"
                type="password"
                label="Password"
                variant="bordered"
                labelPlacement="outside"
                placeholder="Enter your password"
                isInvalid={errors.password !== undefined}
                errorMessage={
                    errors.password?.message !== undefined
                        ? t(
                              `content.inputs.password.error.${
                                  errors.password.message as PasswordErrorType
                              }`,
                          )
                        : ""
                }
                classNames={{ label: "font-semibold" }}
                {...register("password")}
            />
        </div>
    );
};

export default CredentialInputs;
