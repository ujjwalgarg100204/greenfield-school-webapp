import { Button } from "@lib/next-ui";
import type { FC } from "react";
import NextLink from "next/link";
import type { NextPageProps } from "@/types";
import SectionHeading from "@/components/ui/SectionHeading";
import { setStaticParamsLocale } from "next-international/server";

const ForgetPasswordPage: FC<NextPageProps> = ({ params: { locale } }) => {
  setStaticParamsLocale(locale);

  return (
    <>
      <SectionHeading className="lg:text-center lg:text-2xl">
        Reset Password
      </SectionHeading>
      <main className="space-y-8">
        <p>Please contact the school administration for password resetting.</p>
        <div>
          <p>Contact Details</p>
          <p>Technical Administration: +91 XXXXX XXXXX</p>
          <p>Principal: +91 XXXXX XXXXX</p>
        </div>
        <Button as={NextLink} color="primary" className="w-full" href="/login">
          Return to Login Page
        </Button>
      </main>
    </>
  );
};

export default ForgetPasswordPage;
