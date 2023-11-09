import StaticTable from "@/src/components/ui/StaticTable";
import type { NextPageProps } from "@/src/types";
import ArticleHeading from "@components/ArticleHeading";
import { setStaticParamsLocale } from "next-international/server";
import type { FC } from "react";
import ArticlePage from "../../_components/ArticlePage";
import HOLIDAY_LIST from "./data";

const HolidayListPage: FC<NextPageProps> = ({ params: { locale } }) => {
  setStaticParamsLocale(locale);

  return (
    <ArticlePage linkType="academic" selected={{ translationKey: "holiday" }}>
      <ArticleHeading>Holidays List</ArticleHeading>
      <StaticTable
        headerRow={{
          cells: [{ text: "SR. No." }, { text: "Date" }, { text: "Title" }],
        }}
        dataRows={HOLIDAY_LIST.map(({ date, title }, i) => ({
          cells: [
            { text: `${i + 1}` },
            {
              text: date.toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              }),
            },
            { text: title },
          ],
        }))}
      />
    </ArticlePage>
  );
};

export default HolidayListPage;
