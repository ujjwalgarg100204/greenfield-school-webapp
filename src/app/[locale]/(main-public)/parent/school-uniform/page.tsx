import { uniformRules } from "./data";

import ArticleList from "@/src/components/ArticleList";
import type { NextPageProps } from "@/src/types";
import ArticleHeading from "@components/ArticleHeading";
import { setStaticParamsLocale } from "next-international/server";
import type { FC } from "react";
import ArticlePage from "../../_components/ArticlePage";
import UniformAccordion from "./_components/UniformAccordion";

const SchoolUniformPage: FC<NextPageProps> = ({ params: { locale } }) => {
  setStaticParamsLocale(locale);

  return (
    <ArticlePage linkType="parent" selected={{ translationKey: "uniform" }}>
      <ArticleHeading>School uniform</ArticleHeading>
      <ArticleList list={uniformRules} containerClassName="space-y-1" />
      <p>
        <strong className="font-bold">Important: </strong>
        Please send an extra pair of undergarments and a set of clothes in the
        child{"'"}s bag regularly.
      </p>
      <UniformAccordion />
    </ArticlePage>
  );
};

export default SchoolUniformPage;
