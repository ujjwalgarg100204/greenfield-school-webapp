"use client";

import { Button, Input } from "@lib/next-ui";
import { useRouter, useSearchParams } from "next/navigation";

import { useScopedI18n } from "@locales/client";
import type Translation from "@locales/languages/en";
import type { FC } from "react";
import { useFormContext } from "react-hook-form";
import { FiEdit } from "react-icons/fi";
import type { TAdmissionPortalSchema } from ".";

type MobileNumberErrorType =
    keyof (typeof Translation)["Pages"]["admission"]["sub-links"]["admission-portal"]["sub-links"]["onboarding"]["mobile-input"]["error"];

const MobileNumberInput: FC = () => {
    const t = useScopedI18n(
        "Pages.admission.sub-links.admission-portal.sub-links.onboarding.mobile-input",
    );
    const router = useRouter();
    const {
        register,
        formState: { errors },
        reset,
    } = useFormContext<TAdmissionPortalSchema>();
    const searchParams = useSearchParams();
    const disabled = searchParams.get("otp-generated") === "true";

    const handleEditClick = (): void => {
        reset();
        // reset search params
        router.replace("/admission/onboarding");
    };

    const errorMessage =
        errors.mobileNumber?.message !== undefined
            ? t(
                  `error.${
                      errors.mobileNumber?.message as MobileNumberErrorType
                  }`,
              )
            : "";

    return (
        <div className="flex items-end gap-8">
            <Input
                type="text"
                radius="sm"
                variant="bordered"
                isDisabled={disabled}
                label={t("label")}
                labelPlacement="outside"
                isInvalid={errors.mobileNumber !== undefined}
                placeholder={t("placeholder")}
                errorMessage={errorMessage}
                {...register("mobileNumber")}
            />
            <Button isIconOnly color="primary" onClick={handleEditClick}>
                <FiEdit />
            </Button>
        </div>
    );
};

export default MobileNumberInput;
