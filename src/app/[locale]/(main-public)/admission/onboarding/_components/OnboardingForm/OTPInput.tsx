"use client";

import { Button, Input } from "@lib/next-ui";

import type { OtpCreateInputSchema } from "@/src/types/zod";
import useUpdateSearchParams from "@hooks/useUpdateSearchParams";
import { useScopedI18n } from "@locales/client";
import type Translation from "@locales/languages/en";
import { useSearchParams } from "next/navigation";
import type { FC } from "react";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { TiTick } from "react-icons/ti";
import type { z } from "zod";
import useGenerateOTP from "../../_hooks/useGenerateOTP";

type OTPErrorType =
  keyof (typeof Translation)["Pages"]["admission"]["sub-links"]["admission-portal"]["sub-links"]["onboarding"]["otp-input"]["error"];

const OTPInput: FC = () => {
  const t = useScopedI18n(
    "Pages.admission.sub-links.admission-portal.sub-links.onboarding.otp-input",
  );
  const {
    register,
    getValues,
    setError,
    formState: { errors },
  } = useFormContext<z.infer<typeof OtpCreateInputSchema>>();
  const searchParams = useSearchParams();
  const updateSearchParams = useUpdateSearchParams();
  const { handleGenerateOTP, timeLeft } = useGenerateOTP(getValues("mobile"), {
    onError(error) {
      setError("otp", { message: error.message }, { shouldFocus: false });
    },
    onSuccess() {
      updateSearchParams({ "otp-generated": "true" });
    },
  });

  // generate new otp on mount
  useEffect(() => {
    handleGenerateOTP();
  }, [handleGenerateOTP]);

  // should disable the input if otp is verified
  const otpVerified = searchParams.get("otp-verified") === "true";
  const errorMessage =
    errors.otp?.message !== undefined
      ? t(`error.${errors.otp?.message as OTPErrorType}`)
      : "";

  return (
    <div className="flex items-center gap-8">
      <Input
        type="text"
        radius="sm"
        label={t("label")}
        variant="bordered"
        labelPlacement="outside"
        isInvalid={errors.otp !== undefined}
        isDisabled={otpVerified}
        errorMessage={errorMessage}
        placeholder={t("placeholder")}
        description={t("desc")}
        {...register("otp")}
      />

      {otpVerified ? (
        <Button isIconOnly color="success">
          <TiTick className="h-6 w-6 text-white" />
        </Button>
      ) : (
        <Button
          color="primary"
          className="p-6 py-7"
          isDisabled={timeLeft > 0}
          onClick={handleGenerateOTP}
        >
          {timeLeft > 0 ? (
            <span>
              Generate new <br /> in {timeLeft} sec(s)
            </span>
          ) : (
            "Generate New"
          )}
        </Button>
      )}
    </div>
  );
};

export default OTPInput;
