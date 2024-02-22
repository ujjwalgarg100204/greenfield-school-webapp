import React from "react";
import H1 from "../(marketing)/_components/H1";
import SignInForm from "./_components/SignInForm";
import { UserValidator } from "~/server/model/validator/UserValidator";
import { z } from "zod";
import { login } from "~/server/auth";
import { redirect } from "next/navigation";

const SignInFormSchema = UserValidator.getUserSignInFormSchema();

const LoginPage = () => {
    const successfulSubmitHandler = async (
        data: z.infer<typeof SignInFormSchema>,
    ) => {
        "use server";
        await login(data);
        redirect(`/dashboard/${data.role}`);
    };
    return (
        <>
            <H1 className="md:text-center md:text-3xl">
                Login to your account
            </H1>
            <main>
                <SignInForm onSuccessfulSubmission={successfulSubmitHandler} />
            </main>
        </>
    );
};

export default LoginPage;
