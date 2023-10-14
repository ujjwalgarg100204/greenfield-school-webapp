import { Button, Input } from "@/lib/next-ui";

import { useSearchParams } from "next/navigation";
import { useEffect, useState, type FC } from "react";
import { useFormContext } from "react-hook-form";
import { TiTick } from "react-icons/ti";
import { AdmissionPortalSchema } from ".";

const OTPInput: FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<AdmissionPortalSchema>();
  const [otpTimer, setOTPTimer] = useState(120);

  useEffect(() => {
    const timer = setInterval(() => {
      setOTPTimer(prev => (prev > 0 ? prev - 1 : prev));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // should render when otp is generated and search param is present
  const searchParams = useSearchParams();
  const shouldRender = searchParams.get("otp-generated");
  const isVerified = searchParams.get("otp-verified") === "true";
  return shouldRender ? (
    <div className="flex items-center gap-8">
      <Input
        type="text"
        radius="sm"
        label="OTP"
        variant="bordered"
        labelPlacement="outside"
        isInvalid={!!errors.otp}
        isDisabled={isVerified}
        errorMessage={errors.otp?.message}
        placeholder="Enter OTP received on your mobile"
        description="Check your inbox for an OTP from Greenfield International School, OTP is valid for 5 minutes"
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
          Generate New <br /> in {otpTimer} sec
        </Button>
      )}
    </div>
  ) : null;
};

export default OTPInput;
