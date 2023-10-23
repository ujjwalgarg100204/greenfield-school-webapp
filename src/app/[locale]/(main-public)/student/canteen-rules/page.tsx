import type { NextPageProps } from "@/src/types";
import ArticleHeading from "@components/ArticleHeading";
import { setStaticParamsLocale } from "next-international/server";
import type { FC } from "react";
import ArticlePage from "../../_components/ArticlePage";

const CanteenRules: FC<NextPageProps> = ({ params: { locale } }) => {
  setStaticParamsLocale(locale);

  return (
    <ArticlePage linkType="student" selected={{ translationKey: "c-rules" }}>
      <ArticleHeading>School canteen rules</ArticleHeading>
      <ul className="list-disc space-y-6">
        <li className="text-justify"></li>
        <li className="text-justify"></li>
        <li className="text-justify"></li>
        <li className="text-justify"></li>
        <li className="text-justify"></li>
      </ul>
    </ArticlePage>
  );
};

export default CanteenRules;
