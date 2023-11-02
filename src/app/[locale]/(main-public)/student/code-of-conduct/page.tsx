import ArticleList from "@/src/components/ArticleList";
import type { NextPageProps } from "@/src/types";
import ArticleHeading from "@components/ArticleHeading";
import { getScopedI18n } from "@locales/server";
import { setStaticParamsLocale } from "next-international/server";
import type { FC } from "react";
import ArticlePage from "../../_components/ArticlePage";
import CODE_OF_CONDUCT_DATA from "./data";

const CodeOfConductPage: FC<NextPageProps> = async ({ params: { locale } }) => {
  setStaticParamsLocale(locale);
  const t = await getScopedI18n("Pages.student.sub-links.cc.content");

  return (
    <ArticlePage linkType="student" selected={{ translationKey: "cc" }}>
      <ArticleHeading>{t("heading")}</ArticleHeading>
      <ArticleList list={CODE_OF_CONDUCT_DATA} />
    </ArticlePage>
  );
};

export default CodeOfConductPage;
