"use client";

import { Controller, useForm } from "react-hook-form";
import { UserCreateInputSchema, UserRolesSchema } from "@/src/types/zod";

import type { FC } from "react";
import { RadioGroup } from "@nextui-org/react";
import RoleRadioButton from "../_components/SignInForm/RoleRadioButton";
import type { SubmitHandler } from "react-hook-form";
import { TRPCClientError } from "@trpc/client";
import { api } from "@/src/trpc/react";
import type { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const RegisterPage: FC = () => {
  const { register, control, handleSubmit, reset } = useForm<
    z.infer<typeof UserCreateInputSchema>
  >({
    resolver: zodResolver(UserCreateInputSchema),
  });
  const signUp = api.auth.signUp.useMutation();

  const onSubmit: SubmitHandler<
    z.infer<typeof UserCreateInputSchema>
  > = data => {
    try {
      signUp.mutate(data);
      reset();
    } catch (err) {
      if (err instanceof TRPCClientError) console.log(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        control={control}
        name="role"
        render={({ fieldState, field: { value, onChange } }) => (
          <RadioGroup
            label={"role"}
            color="primary"
            classNames={{
              wrapper:
                "grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-2",
            }}
            isInvalid={fieldState.invalid}
            value={value}
            onValueChange={onChange}
            errorMessage={fieldState.error?.message}
          >
            {Object.values(UserRolesSchema.Values).map(role => (
              <RoleRadioButton key={role} value={role}>
                {role}
              </RoleRadioButton>
            ))}
          </RadioGroup>
        )}
      />
      <input {...register("username")} placeholder="username" />
      <input {...register("password")} placeholder="password" />
      <button>Submit</button>
    </form>
  );
};

export default RegisterPage;
