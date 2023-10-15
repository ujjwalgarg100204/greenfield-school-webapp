import { Button, Input } from "@/lib/next-ui";
import { useRouter, useSearchParams } from "next/navigation";

import type { FC } from "react";
import { FiEdit } from "react-icons/fi";
import type { TAdmissionPortalSchema } from ".";
import { useFormContext } from "react-hook-form";
import { useScopedI18n } from "@/locales/client";

const MobileNumberInput: FC = async() => {
  const router = useRouter();
  const {
    register,
    formState: { errors },
    reset,
  } = useFormContext<TAdmissionPortalSchema>();
  const searchParams = useSearchParams();
  const disabled = searchParams.get("otp-generated") === "true";

  const handleEditClick = (): void => {
    reset();
    // reset search params
    router.replace("/admission/onboarding");
  };


  const t = useScopedI18n("Pages.admission_portal.content.onboarding")
  return (
    <div className="flex items-end gap-8">
      <Input
        type="text"
        radius="sm"
        variant="bordered"
        isDisabled={disabled}
        label={t("content.mobile_no")}
        labelPlacement="outside"
        isInvalid={errors.mobileNumber !== undefined}
        placeholder={t("content.placeholder")}
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
