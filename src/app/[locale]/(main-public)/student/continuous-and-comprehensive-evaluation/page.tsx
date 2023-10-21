import React, { FC } from "react";

import ArticlePage from "../../_components/ArticlePage";
import { NextPageProps } from "@/types";
import SectionHeading from "@/components/ui/SectionHeading";
import { setStaticParamsLocale } from "next-international/server";

const ContineousAndComprehensiveEvaluation: FC<NextPageProps> = ({
  params: { locale },
}) => {
  setStaticParamsLocale(locale);
  return (
    <ArticlePage linkType="student" selected={{ translationKey: "cce" }}>
      <SectionHeading>Contineous And Comprihensive Evaluation</SectionHeading>
      <ul className="list-disc space-y-6">
        <li className=" text-justify">Add some text here</li>
        <li className=" text-justify">Add some text here</li>
        <li className=" text-justify">Add some text here</li>
      </ul>
    </ArticlePage>
  );
};

export default ContineousAndComprehensiveEvaluation;
