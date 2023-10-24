import ArticleHeading from "@/src/components/ArticleHeading";
import { type NextPageProps } from "@/src/types";
import { setStaticParamsLocale } from "next-international/server";
import type { FC } from "react";
import ArticlePage from "../../_components/ArticlePage";
import NewsSection from "./_components/NewsSection";

const InTheNewsPage: FC<NextPageProps> = ({ params: { locale } }) => {
  setStaticParamsLocale(locale);

  return (
    <ArticlePage linkType="school" selected={{ translationKey: "news" }}>
      <ArticleHeading>Greenfield Latest News</ArticleHeading>
      <NewsSection />
    </ArticlePage>
  );
};

export default InTheNewsPage;
