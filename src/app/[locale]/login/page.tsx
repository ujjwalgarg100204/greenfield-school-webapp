import { RedirectType, redirect } from "next/navigation";

import { getServerAuthSession } from "@/src/server/auth";
import ArticleHeading from "@components/ArticleHeading";
import { getScopedI18n } from "@locales/server";
import type { FC } from "react";
import SignInForm from "./_components/SignInForm";

const LoginPage: FC = async () => {
  const t = await getScopedI18n("login.sub-links.index");
  const session = await getServerAuthSession();
  if (session)
    redirect(`/dashboard/${session.user.role}`, RedirectType.replace);

  return (
    <>
      <ArticleHeading className="lg:text-center lg:text-2xl">
        {t("title")}
      </ArticleHeading>
      <main>
        <SignInForm />
      </main>
    </>
  );
};

export default LoginPage;
