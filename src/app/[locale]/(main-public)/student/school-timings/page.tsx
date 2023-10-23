import type { NextPageProps } from "@/src/types";
import ArticleHeading from "@components/ArticleHeading";
import { setStaticParamsLocale } from "next-international/server";
import type { FC } from "react";
import ArticlePage from "../../_components/ArticlePage";

const SchoolTimingsPage: FC<NextPageProps> = ({ params: { locale } }) => {
  setStaticParamsLocale(locale);

  return (
    <ArticlePage linkType="student" selected={{ translationKey: "timings" }}>
      <ArticleHeading>School Timings</ArticleHeading>
      <ul className=" list-disc space-y-6">
        <li className=" text-justify">8 to 2</li>
        <li className=" text-justify">8 to 2</li>
        <li className=" text-justify">8 to 2</li>
      </ul>
    </ArticlePage>
  );
};

export default SchoolTimingsPage;
