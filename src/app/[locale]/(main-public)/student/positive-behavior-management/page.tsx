import type { NextPageProps } from "@/src/types";
import ArticleHeading from "@components/ArticleHeading";
import { setStaticParamsLocale } from "next-international/server";
import type { FC } from "react";
import ArticlePage from "../../_components/ArticlePage";

const PositiveBehaviorPage: FC<NextPageProps> = ({ params: { locale } }) => {
  setStaticParamsLocale(locale);

  return (
    <ArticlePage
      linkType="student"
      selected={{ translationKey: "+ve-behavior-manage" }}
    >
      <ArticleHeading>Positive Behavior Management</ArticleHeading>
      <ul className="list-disc space-y-6">
        <li className=" text-justify">Add some text here</li>
        <li className=" text-justify">Add some text here</li>
        <li className=" text-justify">Add some text here</li>
      </ul>
    </ArticlePage>
  );
};

export default PositiveBehaviorPage;
