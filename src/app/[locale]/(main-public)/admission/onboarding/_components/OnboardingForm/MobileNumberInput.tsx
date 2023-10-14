import { Button, Input } from "@/lib/next-ui";
import { useRouter, useSearchParams } from "next/navigation";

import type { FC } from "react";
import { useFormContext } from "react-hook-form";
import { FiEdit } from "react-icons/fi";
import { AdmissionPortalSchema } from ".";

const MobileNumberInput: FC = () => {
  const router = useRouter();
  const {
    register,
    formState: { errors },
    reset,
  } = useFormContext<AdmissionPortalSchema>();
  const searchParams = useSearchParams();
  const disabled = searchParams.get("otp-generated") === "true";

  const handleEditClick = (): void => {
    reset();
    // reset search params
    router.replace("/admission/onboarding");
  };

  return (
    <div className="flex items-end gap-8">
      <Input
        type="text"
        radius="sm"
        variant="bordered"
        isDisabled={disabled}
        label="Mobile Number"
        labelPlacement="outside"
        isInvalid={!!errors.mobileNumber}
        placeholder="Enter your mobile number"
        errorMessage={errors.mobileNumber?.message}
        {...register("mobileNumber")}
      />
      <Button isIconOnly color="primary" onClick={handleEditClick}>
        <FiEdit />
      </Button>
    </div>
  );
};

export default MobileNumberInput;
