import type { NextPageProps } from "@/src/types";
import ArticleHeading from "@components/ArticleHeading";
import { setStaticParamsLocale } from "next-international/server";
import type { FC } from "react";
import ArticlePage from "../../_components/ArticlePage";

const HolidayListPage: FC<NextPageProps> = ({ params: { locale } }) => {
  setStaticParamsLocale(locale);

  return (
    <ArticlePage linkType="academic" selected={{ translationKey: "holiday" }}>
      <ArticleHeading>Holidays List</ArticleHeading>
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

export default HolidayListPage;