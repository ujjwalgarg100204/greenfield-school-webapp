"use client";

import { Controller, useFormContext } from "react-hook-form";

import { useScopedI18n } from "@/src/app/_locales/client";
import { RadioGroup } from "@nextui-org/react";
import type { FC } from "react";
import { type z } from "zod";
import { type UserCreateInputSchema } from ".";
import RoleRadioButton from "./RoleRadioButton";

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
                    {(["student", "admin", "teacher"] as const).map(role => (
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
