"use client";

import { Button, Input } from "@lib/next-ui";
import { useRouter, useSearchParams } from "next/navigation";

import type { OtpCreateInputSchema } from "@/src/types/zod";
import { useScopedI18n } from "@locales/client";
import type Translation from "@locales/languages/en";
import type { FC } from "react";
import { useFormContext } from "react-hook-form";
import { FiEdit } from "react-icons/fi";
import type { z } from "zod";

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
  } = useFormContext<z.infer<typeof OtpCreateInputSchema>>();
  const searchParams = useSearchParams();

  const handleEditClick = () => {
    reset();
    // reset search params
    router.replace("/admission/onboarding");
  };

  const errorMessage =
    errors.mobile?.message !== undefined
      ? t(`error.${errors.mobile?.message as MobileNumberErrorType}`)
      : "";

  // if number is entered, disable the input
  const disabled = !!searchParams.get("mobile");

  return (
    <div className="flex items-end gap-8">
      <Input
        type="text"
        radius="sm"
        variant="bordered"
        isDisabled={disabled}
        label={t("label")}
        labelPlacement="outside"
        isInvalid={errors.mobile !== undefined}
        placeholder={t("placeholder")}
        errorMessage={errorMessage}
        {...register("mobile")}
      />
      <Button isIconOnly color="primary" onClick={handleEditClick}>
        <FiEdit />
      </Button>
    </div>
  );
};

export default MobileNumberInput;
