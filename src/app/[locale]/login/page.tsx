"use client";

import { UserCreateInputSchema, UserRolesSchema } from "@/types/zod/index";
import { Button, Input, Link, RadioGroup } from "@lib/next-ui";
import { Controller, useForm } from "react-hook-form";

import { useScopedI18n } from "@/locales/client";
import type Translation from "@/locales/languages/en";
import SectionHeading from "@components/ui/SectionHeading";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import NextLink from "next/link";
import { useRouter } from "next/navigation";
import type { FC } from "react";
import type { SubmitHandler } from "react-hook-form";
import type { z } from "zod";
import CustomRadio from "./_components/CustomRadio";

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
  } = useForm<z.infer<typeof UserCreateInputSchema>>({
    resolver: zodResolver(UserCreateInputSchema),
  });
  const router = useRouter();

  const onSubmit: SubmitHandler<
    z.infer<typeof UserCreateInputSchema>
  > = async data => {
    const res = await signIn("credentials", {
      ...data,
      redirect: false,
    });

    if (res?.ok) router.push("/dashboard");
    else alert(res?.error);
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
                {Object.values(UserRolesSchema.Values).map(role => (
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
                isInvalid={errors.username !== undefined}
                errorMessage={
                  errors.username?.message !== undefined
                    ? t(
                        `content.inputs.user-id.error.${
                          errors.username.message as UserIdErrorType
                        }`,
                      )
                    : ""
                }
                {...register("username")}
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
