"use client";

import { FormProvider, useForm } from "react-hook-form";

import { api } from "@/src/trpc/react";
import { OtpCreateInputSchema } from "@/src/types/zod/index";
import { zodResolver } from "@hookform/resolvers/zod";
import useUpdateSearchParams from "@hooks/useUpdateSearchParams";
import { Button } from "@lib/next-ui";
import { useScopedI18n } from "@locales/client";
import type { ReadonlyURLSearchParams } from "next/navigation";
import { useSearchParams } from "next/navigation";
import type { FC } from "react";
import type { z } from "zod";
import MobileNumberInput from "./MobileNumberInput";
import OTPInput from "./OTPInput";

const returnCorrectFunction = (
  searchParams: ReadonlyURLSearchParams,
  firstFunction: () => unknown,
  secondFunction: () => unknown,
  thirdFunction: () => unknown,
) => {
  const mobile = searchParams.get("mobile");
  const otpGenerated = searchParams.get("otp-generated");
  const otpVerified = searchParams.get("otp-verified");

  // Condition 1: If 'mobile' is null, it means that mobile number is not entered yet
  if (mobile === null) {
    return firstFunction;
  }

  // Condition 2: If 'otpGenerated' is not null and 'otpVerified' is null, it means that
  // otp is generated but not verified yet
  else if (otpGenerated !== null && otpVerified === null) {
    return secondFunction;
  }

  // Condition 3: If none of the above conditions match, it means that otp is verified
  else {
    return thirdFunction;
  }
};

const getSubmitBtnText = (searchParams: ReadonlyURLSearchParams) => {
  return returnCorrectFunction(
    searchParams,
    () => "generate-otp",
    () => "verify-otp",
    () => "fill-form",
  )() as "generate-otp" | "verify-otp" | "fill-form";
};

const OnboardingForm: FC = () => {
  const t = useScopedI18n(
    "Pages.admission.sub-links.admission-portal.sub-links.onboarding",
  );
  const searchParams = useSearchParams();
  const formMethods = useForm<z.infer<typeof OtpCreateInputSchema>>({
    mode: "onBlur",
    reValidateMode: "onBlur",
    defaultValues: {
      mobile: searchParams.get("mobile") ?? "",
      otp: searchParams.get("otp") ?? "",
    },
    resolver: zodResolver(OtpCreateInputSchema),
  });
  const updateSearchParams = useUpdateSearchParams();
  const verifyOTP = api.otp.verifyOtp.useMutation({
    onError(error) {
      formMethods.setError(
        "otp",
        { message: error.message },
        { shouldFocus: true },
      );
    },
    onSuccess() {
      updateSearchParams({ "otp-verified": "true" });
    },
  });

  const setMobileSearchParam = async () => {
    await formMethods.trigger("mobile");
    // if mobile number field is not valid, return
    if (formMethods.formState.errors.mobile) return;

    // on valid mobile number render otp input
    updateSearchParams({ mobile: formMethods.getValues("mobile") });
  };

  const handleFormSubmission = async () => {
    await formMethods.handleSubmit(data => {
      console.log(data);
    })();
  };

  const buttonClickHandler = returnCorrectFunction(
    searchParams,
    setMobileSearchParam,
    () =>
      verifyOTP.mutate({
        mobile: formMethods.getValues("mobile"),
        otp: formMethods.getValues("otp"),
      }),
    handleFormSubmission,
  );

  const renderOTPInput = searchParams.get("mobile") !== null;
  const submitBtnDisabled =
    !!(
      formMethods.formState.errors.mobile ?? formMethods.formState.errors.otp
    ) || verifyOTP.isLoading;
  return (
    <FormProvider {...formMethods}>
      <form className="space-y-6">
        <MobileNumberInput />
        {renderOTPInput && <OTPInput />}

        <Button
          color="primary"
          className="w-full font-semibold"
          type="button"
          radius="sm"
          isDisabled={submitBtnDisabled}
          onClick={buttonClickHandler}
        >
          {t(`button-text.${getSubmitBtnText(searchParams)}`)}
        </Button>
      </form>
    </FormProvider>
  );
};

export default OnboardingForm;
