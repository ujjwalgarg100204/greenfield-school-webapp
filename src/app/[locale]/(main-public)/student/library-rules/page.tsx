import ArticleHeading from "@components/ArticleHeading";
import ArticleList from "@/src/components/ArticleList";
import ArticlePage from "../../_components/ArticlePage";
import type { FC } from "react";
import LIBRARY_RULES_DATA from "./data";
import type { NextPageProps } from "@/src/types";
import { getScopedI18n } from "@locales/server";
import { setStaticParamsLocale } from "next-international/server";

const LibraryRulesPage: FC<NextPageProps> = async ({ params: { locale } }) => {
  setStaticParamsLocale(locale);
  const t = await getScopedI18n("Pages.student.sub-links.l-rules");

  return (
    <ArticlePage linkType="student" selected={{ translationKey: "l-rules" }}>
      <ArticleHeading> {t("title")} </ArticleHeading>
      <ArticleList list={LIBRARY_RULES_DATA} containerClassName="space-y-1.5" />
    </ArticlePage>
  );
};

export default LibraryRulesPage;
