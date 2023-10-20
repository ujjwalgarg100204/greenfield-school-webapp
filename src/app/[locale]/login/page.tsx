import { getScopedI18n } from "@/locales/server";
import SectionHeading from "@components/ui/SectionHeading";
import type { FC } from "react";
import SignInForm from "./_components/SignInForm";

const LoginPage: FC = async () => {
  const t = await getScopedI18n("login.sub-links.index");

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
