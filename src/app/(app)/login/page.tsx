import { redirect } from "next/navigation";
import { type z } from "zod";
import { login } from "~/server/auth";
import { UserValidator } from "~/server/model/validator/user.validator";
import H1 from "../(marketing)/_components/H1";
import SignInForm from "./_components/SignInForm";

const SignInFormSchema = UserValidator.getUserSignInFormSchema();

import { type Metadata } from "next";


export const metadata: Metadata = {
    title: "Login to your account",
    description:
        "Login to your account with your GreenField credentials provided",
    keywords: [
        "Login page",
        "Account access",
        "Admin login",
        "Teacher login",
        "Student login",
        "Parent login",
        "Credentials",
        "User ID",
        "Password",
        "Authentication",
        "Account type",
        "Access level",
        "Secure login",
        "Sign-in",
        "Login options",
    ],
};

const LoginPage = () => {
    const successfulSubmitHandler = async (
        data: z.infer<typeof SignInFormSchema>,
    ) => {
        "use server";
        await login(data);
        redirect(`/dashboard/${data.role.toLowerCase()}`);
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
