import { auth } from "@/app/api/auth/[...nextauth]/route";
import { getScopedI18n } from "@/locales/server";
import SectionHeading from "@components/ui/SectionHeading";
import { redirect } from "next/navigation";
import type { FC } from "react";
import SignInForm from "./_components/SignInForm";

const LoginPage: FC = async () => {
  const t = await getScopedI18n("login.sub-links.index");
  const session = await auth();
  if (session !== null) redirect(`/dashboard/${session?.user.role}-dashboard`);

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
