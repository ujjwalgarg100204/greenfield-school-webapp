"use client";

import { Controller, useFormContext } from "react-hook-form";

import type { FC } from "react";
import { RadioGroup } from "@nextui-org/react";
import RoleRadioButton from "./RoleRadioButton";
import type { UserCreateInputSchema } from "@/src/types/zod";
import { UserRolesSchema } from "@/src/types/zod";
import { useScopedI18n } from "@locales/client";
import type { z } from "zod";

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
                    {Object.values(UserRolesSchema.Values).map(role => (
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
