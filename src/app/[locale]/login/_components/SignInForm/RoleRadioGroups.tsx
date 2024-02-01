"use client";

import { Controller, useFormContext } from "react-hook-form";

import { useScopedI18n } from "@/src/app/_locales/client";
import { RadioGroup } from "@nextui-org/react";
import { type Prisma } from "@prisma/client";
import type { FC } from "react";
import { z } from "zod";
import RoleRadioButton from "./RoleRadioButton";

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

const RoleRadioGroups: FC = () => {
    const t = useScopedI18n("login.sub-links.index");
    const { control } = useFormContext<z.infer<typeof UserCreateInputSchema>>();

    return (
        <Controller
            control={control}
            name="role"
            render={({ fieldState, field: { value, onChange } }) => (
                <RadioGroup
                    label={t("content.inputs.role.label")}
                    color="primary"
                    classNames={{
                        wrapper:
                            "grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-2",
                    }}
                    isInvalid={fieldState.invalid}
                    value={value}
                    onValueChange={onChange}
                    errorMessage={
                        fieldState.invalid
                            ? t("content.inputs.role.error.no-input")
                            : ""
                    }
                >
                    {(["student", "admin", "teacher", "parent"] as const).map(role => (
                        <RoleRadioButton key={role} value={role}>
                            {t(`content.inputs.role.roles.${role}`)}
                        </RoleRadioButton>
                    ))}
                </RadioGroup>
            )}
        />
    );
};

export default RoleRadioGroups;
