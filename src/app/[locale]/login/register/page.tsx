"use client";

import { UserCreateInputSchema, UserRolesSchema } from "@/types/zod";
import { Controller, useForm } from "react-hook-form";

import { trpc } from "@/app/_trpc/client";
import { zodResolver } from "@hookform/resolvers/zod";
import { RadioGroup } from "@nextui-org/react";
import { TRPCClientError } from "@trpc/client";
import type { FC } from "react";
import type { SubmitHandler } from "react-hook-form";
import type { z } from "zod";
import RoleRadioButton from "../_components/RoleRadioButton";

const RegisterPage: FC = () => {
  const { register, control, handleSubmit, reset } = useForm<
    z.infer<typeof UserCreateInputSchema>
  >({
    resolver: zodResolver(UserCreateInputSchema),
  });
  const signUp = trpc.auth.signUp.useMutation();

  const onSubmit: SubmitHandler<
    z.infer<typeof UserCreateInputSchema>
  > = async data => {
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
