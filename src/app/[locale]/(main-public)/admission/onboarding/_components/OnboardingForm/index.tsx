"use client";

import { FormProvider, useForm } from "react-hook-form";
import { useCallback, useRef } from "react";

import { Button } from "@lib/next-ui";
import type { FC } from "react";
import MobileNumberInput from "./MobileNumberInput";
import OTPInput from "./OTPInput";
import type { ReadonlyURLSearchParams } from "next/navigation";
import type { SubmitHandler } from "react-hook-form";
import { api } from "@/src/trpc/react";
import { useScopedI18n } from "@locales/client";
import { useSearchParams } from "next/navigation";
import useUpdateSearchParams from "@hooks/useUpdateSearchParams";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// const connectionOptions: {
//   "force new connection": boolean;
//   reconnectionAttempts: string;
//   timeout: number;
//   transports: string[];
// } = {
//   "force new connection": true,
//   reconnectionAttempts: "Infinity",
//   timeout: 10000,
//   transports: ["websocket"],
// };

interface OtpData {
  otp: string;
}

interface MutationResult {
  data?: {
    success?: boolean;
    // other fields if present
  };
  // other properties if present
}
// const socket = io("http://localhost:3001/", {
//   transports: ["websocket", "polling"],
//   auth: {
//     token: "abcd",
//   },
//   withCredentials: true,
//   extraHeaders: {
//     "my-custom-header": "abcd",
//   },
// });

// socket.on("connect", () => {
//   console.log("Connected to the server");
// });

// socket.on("disconnect", reason => {
//   if (reason === "io server disconnect") {
//     // the disconnection was initiated by the server, you need to reconnect manually
//     socket.connect();
//   }
// });

// const generateOtp = api.otp.generateOtp.useMutation();

// const verifyOTP = (otpp: string, callback: (isValid: boolean) => void) => {
//   socket.once("otp", (data: OtpData) => {
//     const { otp } = data;
//     console.log("Received OTP from server:", otp);

//     const isValid = otp === otpp;
//     callback(isValid);
//   });
// };

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
  const t = useScopedI18n(
    "Pages.admission.sub-links.admission-portal.sub-links.onboarding",
  );

  const generateOtpMutation = api.otp.generateOtp.useMutation();

  const generateOTP = (mobileNumber: string) => {
    // call api to generate OTP

    // socket.emit("connected", "Hello from client");
    // socket.emit("mobilenumber", mobileNumber);
    // // socket.emit("mobilenumber", mobileNumber);
    // console.log("Checking the id of the socket in the client side", socket.id);

    // socket.on("client", data => {
    //   console.log("logging the data from the server", data);
    // });
    // socket.on("client_otp", (otp: string) => {
    //   console.log("Logging otp from the server side to the client", otp);
    // });
    generateOtpMutation.mutate({ mobileNumber });

    // generateOtp.mutate(mobileNumber);

    // const generateOtp = api.otp.generateOtp.mutat  e(mobileNumber);
    console.log(mobileNumber.slice(0, 6));
  };

  // const { mutate, data, isSuccess } = api.otp.verifyOtp.useMutation();

  const otpVerified = api.otp.verifyOtp.useMutation({
    // onError(error) {
    //   formMethods.setError(
    //     "otp",
    //     { message: error.message },
    //     { shouldFocus: true },
    //   );
    // },
    onSuccess(data) {
      console.log("successfull logging the data", data);
    },
  });

  const verifyOTP = async (otp: string, mobileNumber: string) => {
    const result = await otpVerified.mutateAsync({ mobileNumber, otp });

    console.log(result.success);
    
    return result.success;
  };

  // const verifyOTP = (otp: string, mobileNumber: string) => {
  //   try {
  //     mutate({
  //       mobileNumber,
  //       otp,
  //     });

  //     if (data) {
  //       console.log(
  //         "Displaying result from the verify otp function",
  //         data?.success,
  //         data?.message,
  //       );

  //       // Any additional logic you want to perform after a successful mutation
  //     }
  //   } catch (error) {
  //     console.error("Error during OTP verification:", error);
  //     // Handle the error if needed
  //   }
  // };

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
        generateOTP(mobileNumber);
        // set search param otp-generated to true
        updateSearchParams({ "otp-generated": "true", mobile: mobileNumber });
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

        // verifyOTP(otp, isValid => {
        //   if (isValid) {
        //     console.log("OTP is valid");
        //   } else {
        //     console.log("Invalid OTP");
        //   }
        // });
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
