import type { NextPageProps } from "@/src/types";
import ArticleHeading from "@components/ArticleHeading";
import { setStaticParamsLocale } from "next-international/server";
import type { FC } from "react";
import ArticlePage from "../../_components/ArticlePage";
import HolidayCard from "./_components/HolidayCard";
import holidaysList from "./holidays-list";

const BlockHolidaysPage: FC<NextPageProps> = ({ params: { locale } }) => {
  setStaticParamsLocale(locale);

  return (
    <ArticlePage
      linkType="academic"
      selected={{ translationKey: "block-holidays" }}
    >
      <ArticleHeading>Block holidays</ArticleHeading>
      <ul className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {holidaysList.map(holiday => (
          <HolidayCard key={holiday.title} {...holiday} />
        ))}
      </ul>
    </ArticlePage>
  );
};

export default BlockHolidaysPage;
