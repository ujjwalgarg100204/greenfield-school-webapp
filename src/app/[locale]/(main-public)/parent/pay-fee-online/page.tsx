import type { NextPageProps } from "@/src/types";
import ArticleHeading from "@components/ArticleHeading";
import { setStaticParamsLocale } from "next-international/server";
import type { FC } from "react";
import ArticlePage from "../../_components/ArticlePage";

const PayFeeOnlinePage: FC<NextPageProps> = ({ params: { locale } }) => {
  setStaticParamsLocale(locale);

  return (
    <ArticlePage linkType="parent" selected={{ translationKey: "fee" }}>
      <ArticleHeading>Online fees Portal</ArticleHeading>
      <ul className="list-disc space-y-6">
        <li className="text-justify">Add text</li>
        <li className="text-justify">Add text</li>
        <li className="text-justify">Add text</li>
        <li className="text-justify">Add text</li>
        <li className="text-justify">Add text</li>
      </ul>
    </ArticlePage>
  );
};

export default PayFeeOnlinePage;
