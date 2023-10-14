import type { FC } from "react";
import { Input } from "@/lib/next-ui";
import type { TAdmissionPortalSchema } from ".";
import { useFormContext } from "react-hook-form";
import { useSearchParams } from "next/navigation";

const PasswordInput: FC = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<TAdmissionPortalSchema>();
  const searchParams = useSearchParams();

  // should render when otp is generated & verified and search param is present
  const shouldRender =
    searchParams.get("otp-generated") === "true" &&
    searchParams.get("otp-verified") === "true";
  return shouldRender ? (
    <div className="space-y-6">
      <Input
        type="password"
        radius="sm"
        label="Password"
        variant="bordered"
        labelPlacement="outside"
        placeholder="Enter a password for your account"
        isInvalid={errors.password !== undefined}
        errorMessage={errors.password?.message}
        {...register("password")}
      />
      <Input
        type="password"
        radius="sm"
        label="Confirm Password"
        variant="bordered"
        labelPlacement="outside"
        placeholder="Re-enter the password you previously typed"
        isInvalid={errors.confirmPassword !== undefined}
        errorMessage={errors.confirmPassword?.message}
        {...register("confirmPassword")}
      />
    </div>
  ) : null;
};

export default PasswordInput;
