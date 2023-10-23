import type { NextPageProps } from "@/src/types";
import ArticleHeading from "@components/ArticleHeading";
import { getScopedI18n } from "@locales/server";
import { setStaticParamsLocale } from "next-international/server";
import type { FC } from "react";
import ArticlePage from "../../_components/ArticlePage";

const AboutPage: FC<NextPageProps> = async ({ params: { locale } }) => {
  setStaticParamsLocale(locale);
  const t = await getScopedI18n("Pages.school.sub-links.about");

  return (
    <ArticlePage linkType="school" selected={{ translationKey: "about" }}>
      <ArticleHeading id="about-us">{t("title")}</ArticleHeading>
      <div className="space-y-4">
        <p className="text-justify">{t("content.para-1")}</p>
        <p className="text-justify">{t("content.para-2")}</p>
      </div>
    </ArticlePage>
  );
};

export default AboutPage;
