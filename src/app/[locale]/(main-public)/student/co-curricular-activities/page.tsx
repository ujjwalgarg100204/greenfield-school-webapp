import type { NextPageProps } from "@/src/types";
import ArticleHeading from "@components/ArticleHeading";
import { setStaticParamsLocale } from "next-international/server";
import type { FC } from "react";
import ArticlePage from "../../_components/ArticlePage";

const CoCurricularActivities: FC<NextPageProps> = ({ params: { locale } }) => {
  setStaticParamsLocale(locale);

  return (
    <ArticlePage linkType="student" selected={{ translationKey: "activities" }}>
      <ArticleHeading>Schools Co-curricular Activities</ArticleHeading>
      <ul className="list-disc space-y-6">
        <li className=" text-justify">Volley ball</li>
        <li className=" text-justify">Volley ball</li>
        <li className=" text-justify">Volley ball</li>
      </ul>
    </ArticlePage>
  );
};

export default CoCurricularActivities;
