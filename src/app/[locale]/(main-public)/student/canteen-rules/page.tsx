import ArticleHeading from "@components/ArticleHeading";
import ArticleList from "@/src/components/ArticleList";
import ArticlePage from "../../_components/ArticlePage";
import CANTEEN_RULES_DATA from "./data";
import type { FC } from "react";
import type { NextPageProps } from "@/src/types";
import { setStaticParamsLocale } from "next-international/server";

const CanteenRules: FC<NextPageProps> = ({ params: { locale } }) => {
  setStaticParamsLocale(locale);

  return (
    <ArticlePage linkType="student" selected={{ translationKey: "c-rules" }}>
      <ArticleHeading>School canteen rules</ArticleHeading>
      <ArticleList list={CANTEEN_RULES_DATA} containerClassName="space-y-1.5" />
    </ArticlePage>
  );
};

export default CanteenRules;
