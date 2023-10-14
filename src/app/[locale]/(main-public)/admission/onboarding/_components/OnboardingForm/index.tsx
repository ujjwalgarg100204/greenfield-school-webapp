"use client";

import { useCallback, useRef } from "react";
import { FormProvider, useForm } from "react-hook-form";

import useUpdateSearchParams from "@/hooks/useUpdateSearchParams";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@lib/next-ui";
import type { ReadonlyURLSearchParams } from "next/navigation";
import { useSearchParams } from "next/navigation";
import type { FC } from "react";
import type { SubmitHandler } from "react-hook-form";
import { z } from "zod";
import MobileNumberInput from "./MobileNumberInput";
import OTPInput from "./OTPInput";
import PasswordInput from "./PasswordInput";

const generateOTP = async (mobileNumber: string): Promise<void> => {
  // call api to generate OTP
  console.log(mobileNumber.slice(0, 6));
};

const verifyOTP = async (otp: string): Promise<boolean> => {
  // call api to verify OTP
  console.log(otp);
  return true;
};

const getButtonText = (searchParams: ReadonlyURLSearchParams): string => {
  const otpGenerated = searchParams.get("otp-generated");
  const otpVerified = searchParams.get("otp-verified");

  switch (true) {
    case otpGenerated !== "true" && otpVerified !== "true":
      return "Generate OTP";
    case otpGenerated === "true" && otpVerified !== "true":
      return "Verify OTP";
    default:
      return "Create Account";
  }
};

const AdmissionPortalSchema = z
  .object({
    mobileNumber: z.string().min(10).max(10).regex(/^\d+$/),
    otp: z.string().min(6).max(6).regex(/^\d+$/),
    password: z.string().min(8).max(16),
    confirmPassword: z.string().min(8).max(16),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type TAdmissionPortalSchema = z.infer<typeof AdmissionPortalSchema>;

const OnboardingForm: FC = () => {
  const searchParams = useSearchParams();
  const formMethods = useForm<TAdmissionPortalSchema>({
    mode: "onBlur",
    reValidateMode: "onBlur",
    defaultValues: {
      mobileNumber: searchParams.get("mobile") ?? "",
      otp: searchParams.get("otp") ?? "",
    },
    resolver: zodResolver(AdmissionPortalSchema),
  });
  const formRef = useRef<HTMLFormElement>(null);

  const updateSearchParams = useUpdateSearchParams();

  const submitHandler: SubmitHandler<TAdmissionPortalSchema> = data => {
    console.log("data", JSON.stringify(data, null, 2));
  };

  const clickHandler = useCallback(async (): Promise<void> => {
    // check otp related search params
    const otpGenerated = searchParams.get("otp-generated");
    const otpVerified = searchParams.get("otp-verified");

    // get form values
    const mobileNumber = formMethods.getValues("mobileNumber");
    const otp = formMethods.getValues("otp");

    switch (true) {
      case otpGenerated !== "true" && otpVerified !== "true":
        await formMethods.trigger("mobileNumber");
        if (formMethods.getFieldState("mobileNumber").invalid) return;

        // generate OTP
        await generateOTP(mobileNumber);
        // set search param otp-generated to true
        updateSearchParams({ "otp-generated": "true", mobile: mobileNumber });
        break;

      case otpGenerated === "true" && otpVerified !== "true":
        await formMethods.trigger("otp");
        if (formMethods.getFieldState("otp").invalid) return;

        // verify OTP
        if (!(await verifyOTP(otp))) {
          formMethods.setError("otp", { message: "Invalid OTP" });
          return;
        }
        // set search param otp-verified to true
        updateSearchParams({ "otp-verified": "true", otp });
        break;

      case otpGenerated === "true" && otpVerified === "true":
        // make api call to create account
        formRef.current?.requestSubmit();
    }
  }, [searchParams, formMethods, updateSearchParams]);

  return (
    <FormProvider {...formMethods}>
      <form
        ref={formRef}
        className="space-y-6"
        onSubmit={formMethods.handleSubmit(submitHandler)}
      >
        <MobileNumberInput />
        <OTPInput />
        <PasswordInput />

        <Button
          color="primary"
          className="w-full font-semibold"
          type="button"
          radius="sm"
          onClick={clickHandler}
        >
          {getButtonText(searchParams)}
        </Button>
      </form>
    </FormProvider>
  );
};

export default OnboardingForm;
