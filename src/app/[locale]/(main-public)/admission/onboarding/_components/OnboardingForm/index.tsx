"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback, useRef } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { api } from "@/src/trpc/react";
import { zodResolver } from "@hookform/resolvers/zod";
import useUpdateSearchParams from "@hooks/useUpdateSearchParams";
import { Button } from "@lib/next-ui";
import { useScopedI18n } from "@locales/client";
import type { ReadonlyURLSearchParams } from "next/navigation";
import type { FC } from "react";
import type { SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import MobileNumberInput from "./MobileNumberInput";
import OTPInput from "./OTPInput";

const getButtonText = (searchParams: ReadonlyURLSearchParams) => {
    const otpGenerated = searchParams.get("otp-generated");
    const otpVerified = searchParams.get("otp-verified");

    switch (true) {
        case otpGenerated !== "true" && otpVerified !== "true":
            return "generate-otp";
        case otpGenerated === "true" && otpVerified !== "true":
            return "verify-otp";
        default:
            return "fill-form";
    }
};

const AdmissionPortalSchema = z.object({
    mobileNumber: z
        .string()
        .min(10, "short-input")
        .max(10, "long-input")
        .regex(/^\d+$/, "wrong-input"),
    otp: z
        .string()
        .min(6, "short-input")
        .max(6, "short-input")
        .regex(/^\d+$/, "wrong-input"),
});

export type TAdmissionPortalSchema = z.infer<typeof AdmissionPortalSchema>;

const OnboardingForm: FC = () => {
    const router = useRouter();
    const t = useScopedI18n(
        "Pages.admission.sub-links.admission-portal.sub-links.onboarding",
    );

    const generateOtpMutation = api.otp.generateOtp.useMutation();

    const generateOTP = (mobileNumber: string) => {
        generateOtpMutation.mutate({ mobileNumber });
        toast.success(`WhatsApp OTP sent to ${mobileNumber}`);

        console.log(mobileNumber.slice(0, 6));
    };

    const otpVerified = api.otp.verifyOtp.useMutation({
        onSuccess(data) {
            console.log("successfull logging the data", data);
        },
    });

    const verifyOTP = async (otp: string, mobileNumber: string) => {
        const result = await otpVerified.mutateAsync({ mobileNumber, otp });

        console.log(result.success, result.message);
        switch (result.message) {
            case "OTP record does not exist":
                toast("Failed to verify OTP please try again !!", {
                    icon: "ℹ️",
                });

                break;

            case "OTP expired, please generate a new one":
                toast.error("OTP expired, please generate a new one");
                break;

            case "OTP verified":
                toast.success("Successfully verified OTP");
                break;

            case "Wrong OTP":
                toast.error("Wrong OTP please check again !!");
                break;
        }

        return result.success;
    };

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
        router.push("admission-application");
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
                generateOTP(mobileNumber);
                // set search param otp-generated to true
                updateSearchParams({
                    "otp-generated": "true",
                    mobile: mobileNumber,
                });
                break;

            case otpGenerated === "true" && otpVerified !== "true":
                await formMethods.trigger("otp");
                if (formMethods.getFieldState("otp").invalid) return;

                // verify OTP
                const otpResult = await verifyOTP(otp, mobileNumber);
                if (!otpResult) {
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

                <Button
                    color="primary"
                    className="w-full font-semibold"
                    type="button"
                    radius="sm"
                    onClick={clickHandler}
                >
                    {t(`button-text.${getButtonText(searchParams)}`)}
                </Button>
            </form>
        </FormProvider>
    );
};

export default OnboardingForm;
