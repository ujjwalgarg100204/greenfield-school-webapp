import type { FC } from "react";
import SectionHeading from "@components/ui/SectionHeading";
import SignInForm from "./_components/SignInForm";
import { auth } from "@/app/api/auth/[...nextauth]/route";
import { getScopedI18n } from "@/locales/server";
import { redirect } from "next/navigation";

const LoginPage: FC = async () => {
  const t = await getScopedI18n("login.sub-links.index");
  const session = await auth();
  if (session !== null) redirect("/dashboard");

  return (
    <>
      <SectionHeading className="lg:text-center lg:text-2xl">
        {t("title")}
      </SectionHeading>
      <main>
        <SignInForm />
      </main>
    </>
  );
};

export default LoginPage;
