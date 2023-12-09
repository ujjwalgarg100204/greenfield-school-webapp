"use client";

import { Button, Input } from "@lib/next-ui";

import { api } from "@/src/trpc/react";
import { useScopedI18n } from "@locales/client";
import type Translation from "@locales/languages/en";
import { useSearchParams } from "next/navigation";
import { useEffect, useState, type FC } from "react";
import { useFormContext } from "react-hook-form";
import { TiTick } from "react-icons/ti";
import type { TAdmissionPortalSchema } from ".";

type OTPErrorType =
  keyof (typeof Translation)["Pages"]["admission"]["sub-links"]["admission-portal"]["sub-links"]["onboarding"]["otp-input"]["error"];

const OTPInput: FC = () => {
  const generateOtpMutation = api.otp.generateOtp.useMutation();

  const t = useScopedI18n(
    "Pages.admission.sub-links.admission-portal.sub-links.onboarding.otp-input",
  );
  const {
    register,
    formState: { errors },
  } = useFormContext<TAdmissionPortalSchema>();
  const [otpTimer, setOTPTimer] = useState(20);

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

  const generateNewOtp = () => {
    // Add your logic to generate a new OTP
    // You may also want to reset the timer and update the state accordingly
    const mobileNumber: string = searchParams.get("mobile")!;
    generateOtpMutation.mutate({ mobileNumber });
    setOTPTimer(20);
    // Call setIsVerified(false) if needed
  };

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
          onClick={generateNewOtp}
        >
          {otpTimer > 0
            ? t("timer", { br: <br />, timer: otpTimer })
            : t("newtimer")}
        </Button>
      )}
    </div>
  ) : null;
};

export default OTPInput;

// "use client";

// import { Button, Input } from "@lib/next-ui";

// import type { FC } from "react";
// import type { OtpCreateInputSchema } from "@/src/types/zod";
// import { TiTick } from "react-icons/ti";
// import type Translation from "@locales/languages/en";
// import { useEffect } from "react";
// import { useFormContext } from "react-hook-form";
// import useGenerateOTP from "@/src/services/OTP/useGenerateOTP";
// import { useScopedI18n } from "@locales/client";
// import { useSearchParams } from "next/navigation";
// import useUpdateSearchParams from "@hooks/useUpdateSearchParams";
// import type { z } from "zod";

// type OTPErrorType =
//   keyof (typeof Translation)["Pages"]["admission"]["sub-links"]["admission-portal"]["sub-links"]["onboarding"]["otp-input"]["error"];

// const OTPInput: FC = () => {
//   const t = useScopedI18n(
//     "Pages.admission.sub-links.admission-portal.sub-links.onboarding.otp-input",
//   );
//   const {
//     register,
//     getValues,
//     setError,
//     formState: { errors },
//   } = useFormContext<z.infer<typeof OtpCreateInputSchema>>();
//   const searchParams = useSearchParams();
//   const updateSearchParams = useUpdateSearchParams();
//   const { handleGenerateOTP, timeLeft } = useGenerateOTP(getValues("mobile"), {
//     onError(error) {
//       setError("otp", { message: error.message }, { shouldFocus: false });
//     },
//     onSuccess() {
//       updateSearchParams({ "otp-generated": "true" });
//     },
//   });

//   // generate new otp on mount
//   useEffect(() => {
//     handleGenerateOTP();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   // should disable the input if otp is verified
//   const otpVerified = searchParams.get("otp-verified") === "true";
//   const errorMessage =
//     errors.otp?.message !== undefined
//       ? t(`error.${errors.otp?.message as OTPErrorType}`)
//       : "";

//   return (
//     <div className="flex items-center gap-8">
//       <Input
//         type="text"
//         radius="sm"
//         label={t("label")}
//         variant="bordered"
//         labelPlacement="outside"
//         isInvalid={errors.otp !== undefined}
//         isDisabled={otpVerified}
//         errorMessage={errorMessage}
//         placeholder={t("placeholder")}
//         description={t("desc")}
//         {...register("otp")}
//       />

//       {otpVerified ? (
//         <Button isIconOnly color="success">
//           <TiTick className="h-6 w-6 text-white" />
//         </Button>
//       ) : (
//         <Button
//           color="primary"
//           className="p-6 py-7"
//           isDisabled={timeLeft > 0}
//           onClick={handleGenerateOTP}
//         >
//           {timeLeft > 0 ? (
//             <span>
//               Generate new <br /> in {timeLeft} sec(s)
//             </span>
//           ) : (
//             "Generate New"
//           )}
//         </Button>
//       )}
//     </div>
//   );
// };

// export default OTPInput;
