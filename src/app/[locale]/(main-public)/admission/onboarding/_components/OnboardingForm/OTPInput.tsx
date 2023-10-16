"use client";

import { Button, Input } from "@/lib/next-ui";

import { useScopedI18n } from "@/locales/client";
import type Translation from "@/locales/languages/en";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, type FC } from "react";
import { useFormContext } from "react-hook-form";
import { TiTick } from "react-icons/ti";
import type { TAdmissionPortalSchema } from ".";

type OTPErrorType =
  keyof (typeof Translation)["Pages"]["admission"]["sub-links"]["admission-portal"]["sub-links"]["onboarding"]["otp-input"]["error"];

const OTPInput: FC = () => {
  const t = useScopedI18n(
    "Pages.admission.sub-links.admission-portal.sub-links.onboarding.otp-input",
  );
  const {
    register,
    formState: { errors },
  } = useFormContext<TAdmissionPortalSchema>();
  const [otpTimer, setOTPTimer] = useState(120);

  useEffect(() => {
    const timer = setInterval(() => {
      setOTPTimer(prev => (prev > 0 ? prev - 1 : prev));
    }, 1000);
    return (): void => {
      clearInterval(timer);
    };
  }, []);

  // should render when otp is generated and search param is present
  const searchParams = useSearchParams();
  const shouldRender = searchParams.get("otp-generated");
  const isVerified = searchParams.get("otp-verified") === "true";
  const errorMessage =
    errors.otp?.message !== undefined
      ? t(`error.${errors.otp?.message as OTPErrorType}`)
      : "";

  return shouldRender !== null ? (
    <div className="flex items-center gap-8">
      <Input
        type="text"
        radius="sm"
        label={t("label")}
        variant="bordered"
        labelPlacement="outside"
        isInvalid={errors.otp !== undefined}
        isDisabled={isVerified}
        errorMessage={errorMessage}
        placeholder={t("placeholder")}
        description={t("desc")}
        {...register("otp")}
      />

      {isVerified ? (
        <Button isIconOnly color="success">
          <TiTick className="h-6 w-6 text-white" />
        </Button>
      ) : (
        <Button
          color="primary"
          className="p-6 py-7"
          isDisabled={otpTimer !== 0}
        >
          {t("timer", { br: <br />, timer: otpTimer })}
        </Button>
      )}
    </div>
  ) : null;
};

export default OTPInput;
