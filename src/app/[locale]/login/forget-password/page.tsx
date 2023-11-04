import { Button, Link } from "@lib/next-ui";

import type { NextPageProps } from "@/src/types";
import ArticleHeading from "@components/ArticleHeading";
import { getScopedI18n } from "@locales/server";
import { setStaticParamsLocale } from "next-international/server";
import type { FC } from "react";

const ForgetPasswordPage: FC<NextPageProps> = async ({
  params: { locale },
}) => {
  setStaticParamsLocale(locale);
  const t = await getScopedI18n("login.sub-links.forget");

  return (
    <>
      <ArticleHeading className="lg:text-center lg:text-2xl">
        {t("title")}
      </ArticleHeading>
      <main className="space-y-8">
        <p>{t("content.contact")}</p>
        <div>
          <h4 className="font-semibold">{t("content.details.heading")}</h4>
          <p>
            {t("content.details.technical-admin", {
              number: "+91 XXXXX XXXXX",
            })}
          </p>
          <p>{t("content.details.principal", { number: "+91 XXXXX XXXXX" })}</p>
        </div>
        <Button as={Link} color="primary" className="w-full" href="/login">
          {t("content.button-text")}
        </Button>
      </main>
    </>
  );
};

export default ForgetPasswordPage;
