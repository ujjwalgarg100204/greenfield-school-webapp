"use client";

import { Button, Input, Link, RadioGroup } from "@lib/next-ui";
import { Controller, useForm } from "react-hook-form";

import CustomRadio from "./_components/CustomRadio";
import type { FC } from "react";
import NextLink from "next/link";
import SectionHeading from "@components/ui/SectionHeading";
import type { SubmitHandler } from "react-hook-form";
import type Translation from "@/locales/languages/en";
import { useScopedI18n } from "@/locales/client";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const LoginPageSchema = z.object({
  role: z.enum(["student", "teacher", "parent", "admin"]),
  userId: z.string().min(6, "short-input").max(16, "long-input"),
  password: z.string().min(6, "short-input").max(16, "long-input"),
});

type TLoginPageSchema = z.infer<typeof LoginPageSchema>;

type UserIdErrorType =
  keyof (typeof Translation)["login"]["sub-links"]["index"]["content"]["inputs"]["user-id"]["error"];
type PasswordErrorType =
  keyof (typeof Translation)["login"]["sub-links"]["index"]["content"]["inputs"]["password"]["error"];

const LoginPage: FC = () => {
  const t = useScopedI18n("login.sub-links.index");
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
        {t("title")}
      </SectionHeading>
      <main>
        <form className="space-y-8" onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            name="role"
            render={({ fieldState, field: { value, onChange } }) => (
              <RadioGroup
                label={t("content.inputs.role.label")}
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
                    ? t("content.inputs.role.error.no-input")
                    : ""
                }
              >
                {Object.values(LoginPageSchema.shape.role.Values).map(role => (
                  <CustomRadio key={role} value={role}>
                    {t(`content.inputs.role.roles.${role}`)}
                  </CustomRadio>
                ))}
              </RadioGroup>
            )}
          />

          <div className="flex items-center justify-center gap-4">
            <hr className="h-0.5 flex-grow rounded-full bg-default" />
            <span className="text-sm text-foreground-500">&</span>
            <hr className="h-0.5 flex-grow rounded-full bg-default" />
          </div>

          <div className="space-y-4 md:space-y-2">
            <p className="text-foreground-500">{t("content.my-creds")}</p>
            <div className="space-y-3">
              <Input
                type="text"
                radius="sm"
                label={t("content.inputs.user-id.label")}
                variant="bordered"
                labelPlacement="outside"
                placeholder={t("content.inputs.user-id.placeholder")}
                isInvalid={errors.userId !== undefined}
                errorMessage={
                  errors.userId?.message !== undefined
                    ? t(
                        `content.inputs.user-id.error.${
                          errors.userId.message as UserIdErrorType
                        }`,
                      )
                    : ""
                }
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
                errorMessage={
                  errors.password?.message !== undefined
                    ? t(
                        `content.inputs.password.error.${
                          errors.password.message as PasswordErrorType
                        }`,
                      )
                    : ""
                }
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
                {t("content.forget")}
              </Link>
            </div>
          </div>
          <Button
            type="submit"
            color="primary"
            variant="solid"
            className="w-full font-semibold"
          >
            {t("content.button-text")}
          </Button>
        </form>
      </main>
    </>
  );
};

export default LoginPage;
