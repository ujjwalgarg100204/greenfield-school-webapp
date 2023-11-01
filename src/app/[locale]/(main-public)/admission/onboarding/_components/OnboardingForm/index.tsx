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
  functions: {
    beforeMobileNumberInput: () => unknown;
    afterMobileNumberInput: () => unknown;
    afterOTPGeneration: () => unknown;
    afterOTPVerification: () => unknown;
  },
) => {
  const mobile = searchParams.get("mobile");
  const otpGenerated = searchParams.get("otp-generated");
  const otpVerified = searchParams.get("otp-verified");

  // Condition 1: If 'mobile' is null, it means that mobile number is not entered yet
  if (mobile === null && otpGenerated === null && otpVerified === null) {
    return functions.beforeMobileNumberInput;
  }
  // Condition 2: If "mobile" number is entered but otp is not yet generated
  else if (mobile !== null && otpGenerated === null && otpVerified === null) {
    return functions.afterMobileNumberInput;
  }
  // Condition 3: If "mobile" number is entered and otp is generated but not verified
  else if (mobile !== null && otpGenerated !== null && otpVerified === null) {
    return functions.afterOTPGeneration;
  }
  // Condition 4: If none of the above conditions match, it means that otp is verified
  else {
    return functions.afterOTPVerification;
  }
};

const getSubmitBtnText = (searchParams: ReadonlyURLSearchParams) => {
  return returnCorrectFunction(searchParams, {
    beforeMobileNumberInput: () => "generate-otp",
    afterMobileNumberInput: () => "generating-otp",
    afterOTPGeneration: () => "verify-otp",
    afterOTPVerification: () => "fill-form",
  })() as "generate-otp" | "verify-otp" | "fill-form";
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

  const buttonClickHandler = returnCorrectFunction(searchParams, {
    beforeMobileNumberInput: setMobileSearchParam,
    afterMobileNumberInput: () => {
      console.log("Generating OTP");
    },
    afterOTPGeneration: () =>
      verifyOTP.mutate({
        mobile: formMethods.getValues("mobile"),
        otp: formMethods.getValues("otp"),
      }),
    afterOTPVerification: handleFormSubmission,
  });

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
