import ArticleHeading from "@components/ArticleHeading";
import ArticlePage from "../../_components/ArticlePage";
import type { FC } from "react";
import HolidayCard from "./_components/HolidayCard";
import type { NextPageProps } from "@/src/types";
import { setStaticParamsLocale } from "next-international/server";

export const holidays = [
  {
    title: "Summer Holidays",
    duration: "30 days",
    startDate: new Date(2023, 4, 13),
    endDate: new Date(2023, 5, 11),
  },
  {
    title: "Puja Holidays",
    duration: "10 days",
    startDate: new Date(2023, 9, 20),
    endDate: new Date(2023, 9, 29),
  },
  {
    title: "Diwali Holidays",
    duration: "6 days",
    startDate: new Date(2023, 10, 10),
    endDate: new Date(2023, 10, 15),
  },
  {
    title: "Winter Holidays",
    duration: "10 days",
    startDate: new Date(2023, 11, 23),
    endDate: new Date(2024, 2, 0),
  },
] as const;

const BlockHolidaysPage: FC<NextPageProps> = ({ params: { locale } }) => {
  setStaticParamsLocale(locale);

  return (
    <ArticlePage
      linkType="academic"
      selected={{ translationKey: "block-holidays" }}
    >
      <ArticleHeading>Block holidays</ArticleHeading>
      <ul className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {holidays.map(holiday => (
          <HolidayCard key={holiday.title} {...holiday} />
        ))}
      </ul>
    </ArticlePage>
  );
};

export default BlockHolidaysPage;
