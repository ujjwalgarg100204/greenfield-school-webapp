import H1 from "../../(marketing)/_components/H1";
import { Button, Link } from "~/app/next-ui";
import { FC } from "react";

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
                        <Link href="tel://+91xxxxxxxxxx">+91 xxxxxxxxxx</Link>
                    </p>
                    <p>
                        Principal:{" "}
                        <Link href="tel://+91xxxxxxxxxx">+91 xxxxxxxxxx</Link>
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
