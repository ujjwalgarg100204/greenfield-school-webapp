import { RedirectType, redirect } from "next/navigation";

import ArticleHeading from "@/src/app/_components/ArticleHeading";
import { getScopedI18n } from "@/src/app/_locales/server";
import { getServerAuthSession } from "@/src/server/auth";
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
