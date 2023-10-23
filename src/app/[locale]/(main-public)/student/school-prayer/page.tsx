import type { NextPageProps } from "@/src/types";
import ArticleHeading from "@components/ArticleHeading";
import { setStaticParamsLocale } from "next-international/server";
import type { FC } from "react";
import ArticlePage from "../../_components/ArticlePage";

const SchoolPrayerPage: FC<NextPageProps> = ({ params: { locale } }) => {
  setStaticParamsLocale(locale);

  return (
    <ArticlePage linkType="student" selected={{ translationKey: "prayer" }}>
      <ArticleHeading>School Prayer</ArticleHeading>
      <p>Itni skti hame dena data</p>
    </ArticlePage>
  );
};

export default SchoolPrayerPage;
