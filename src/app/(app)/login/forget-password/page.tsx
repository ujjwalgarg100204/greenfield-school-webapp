import { type FC } from "react";
import { Button, Link } from "~/app/next-ui";
import H1 from "../../(marketing)/_components/H1";

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

const ForgetPasswordPage: FC = () => {
    return (
        <>
            <H1 className="lg:text-center lg:text-2xl">Forgot Password</H1>
            <main className="space-y-8">
                <p>
                    Please contact the school administration for password
                    resetting.
                </p>
                <div>
                    <h4 className="font-semibold">Contact details</h4>
                    <p>
                        Technical Administration:{" "}
                        <Link href="tel://+919894376100">+91 98943 76100</Link>
                    </p>
                </div>
                <Button
                    as={Link}
                    color="primary"
                    className="w-full"
                    href="/login"
                >
                    Return to Login Page
                </Button>
            </main>
        </>
    );
};

export default ForgetPasswordPage;
