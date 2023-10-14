"use client";

import { Button, Input, Link, RadioGroup } from "@lib/next-ui";
import { Controller, useForm } from "react-hook-form";

import CustomRadio from "./_components/CustomRadio";
import type { FC } from "react";
import NextLink from "next/link";
import SectionHeading from "../../../components/ui/SectionHeading";
import type { SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const LoginPageSchema = z.object({
  role: z.enum(["student", "teacher", "parent", "admin"]),
  userId: z.string().min(1),
  password: z.string().min(6).max(16),
});

type TLoginPageSchema = z.infer<typeof LoginPageSchema>;

const LoginPage: FC = () => {
  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<TLoginPageSchema>({ resolver: zodResolver(LoginPageSchema) });

  const onSubmit: SubmitHandler<TLoginPageSchema> = data => {
    console.log("data", JSON.stringify(data, null, 2));
  };

  return (
    <>
      <SectionHeading className="lg:text-center lg:text-2xl">
        Login to your account
      </SectionHeading>
      <main>
        <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            name="role"
            render={({ fieldState, field: { value, onChange } }) => (
              <RadioGroup
                label="I am"
                color="primary"
                classNames={{
                  wrapper:
                    "grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-2",
                }}
                isInvalid={fieldState.invalid}
                value={value}
                onValueChange={onChange}
                errorMessage={
                  fieldState.invalid
                    ? "Please select one of the option above"
                    : ""
                }
              >
                {Object.values(LoginPageSchema.shape.role.Values).map(role => (
                  <CustomRadio key={role} value={role}>
                    {role}
                  </CustomRadio>
                ))}
              </RadioGroup>
            )}
          />

          <div className="flex items-center justify-center gap-4">
            <hr className="h-0.5 flex-grow rounded-full bg-default" />
            <span className="text-sm text-foreground-500">and</span>
            <hr className="h-0.5 flex-grow rounded-full bg-default" />
          </div>

          <div className="space-y-4 md:space-y-2">
            <p className="text-foreground-500">My credentials are</p>
            <div className="space-y-3">
              <Input
                type="text"
                radius="sm"
                label="User ID"
                variant="bordered"
                labelPlacement="outside"
                placeholder="Enter your user id"
                isInvalid={errors.userId !== null}
                errorMessage={errors.userId?.message}
                {...register("userId")}
              />
              <Input
                radius="sm"
                type="password"
                label="Password"
                variant="bordered"
                labelPlacement="outside"
                placeholder="Enter your password"
                isInvalid={errors.password !== undefined}
                errorMessage={errors.password?.message}
                {...register("password")}
              />
            </div>
            <div className="flex justify-end">
              <Link
                size="sm"
                as={NextLink}
                underline="always"
                href="/login/forget-password"
              >
                Forgot password ?
              </Link>
            </div>
          </div>
          <Button
            type="submit"
            color="primary"
            variant="solid"
            className="w-full font-semibold"
          >
            Login
          </Button>
        </form>
      </main>
    </>
  );
};

export default LoginPage;
