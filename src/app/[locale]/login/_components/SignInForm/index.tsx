"use client";

import { Button, Link } from "@lib/next-ui";
import { FormProvider, useForm } from "react-hook-form";

import CredentialInputs from "./CredentialInputs";
import type { FC } from "react";
import RoleRadioGroups from "./RoleRadioGroups";
import type { SubmitHandler } from "react-hook-form";
import { UserCreateInputSchema } from "@/src/types/zod";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useScopedI18n } from "@locales/client";
import type { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const SignInForm: FC = () => {
    const t = useScopedI18n("login.sub-links.index");
    const formMethods = useForm<z.infer<typeof UserCreateInputSchema>>({
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

        if (res?.ok) router.replace(`/dashboard/${data.role}`);
        else
            toast.error(
                "Oops, your credentials might not be right!, Can you try again?",
            );
    };

    return (
        <FormProvider {...formMethods}>
            <form
                className="space-y-8"
                onSubmit={formMethods.handleSubmit(onSubmit)}
            >
                <RoleRadioGroups />

                <div className="flex items-center justify-center gap-4">
                    <hr className="h-0.5 flex-grow rounded-full bg-default" />
                    <span className="text-sm text-foreground-500">&</span>
                    <hr className="h-0.5 flex-grow rounded-full bg-default" />
                </div>

                <div className="space-y-4 md:space-y-2">
                    <p className="pb-2 text-foreground-500">
                        {t("content.my-creds")}
                    </p>

                    <CredentialInputs />

                    <div className="flex justify-end">
                        <Link
                            size="sm"
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
        </FormProvider>
    );
};

export default SignInForm;
