import type { NextPageProps } from "@/src/types";
import ArticleHeading from "@components/ArticleHeading";
import { setStaticParamsLocale } from "next-international/server";
import type { FC } from "react";
import StaticTable from "../../../../../components/ui/StaticTable";
import ArticlePage from "../../_components/ArticlePage";
import SinglePageTabs from "../../_components/SinglePageTabs";
import SCHOOL_TIMINGS from "./data";

const timingsTabs = [
  {
    key: "junior",
    title: "Junior School",
    component: (
      <div className="space-y-8">
        <StaticTable
          caption={{
            title: "Reporting Timings",
          }}
          headerRow={{
            cells: [{ text: "Means of Transport" }, { text: "Timings" }],
          }}
          dataRows={SCHOOL_TIMINGS.junior.reporting.map(reportTimings => ({
            cells: Object.values(reportTimings).map(val => ({
              text: val,
            })),
          }))}
        />
        <StaticTable
          caption={{ title: "Dispersal Timings" }}
          headerRow={{
            cells: [
              { text: "Type of Transport" },
              { text: "Class" },
              { text: "Timings" },
            ],
          }}
          dataRows={SCHOOL_TIMINGS.junior.dispersal.map(dispersalTimings => ({
            cells: Object.values(dispersalTimings).map(val => ({
              text: val,
            })),
          }))}
        />
      </div>
    ),
  },
  {
    key: "senior",
    title: "Senior School",
    component: (
      <div className="space-y-8">
        <StaticTable
          caption={{
            title: "Reporting Timings",
          }}
          headerRow={{
            cells: [{ text: "Means of Transport" }, { text: "Timings" }],
          }}
          dataRows={SCHOOL_TIMINGS.senior.reporting.map(reportTimings => ({
            cells: Object.values(reportTimings).map(val => ({
              text: val,
            })),
          }))}
        />
        <StaticTable
          caption={{ title: "Dispersal Timings" }}
          headerRow={{
            cells: [{ text: "Class" }, { text: "Timings" }],
          }}
          dataRows={SCHOOL_TIMINGS.senior.dispersal.map(dispersalTimings => ({
            cells: Object.values(dispersalTimings).map(val => ({
              text: val,
            })),
          }))}
        />
      </div>
    ),
  },
];

const SchoolTimingsPage: FC<NextPageProps> = ({ params: { locale } }) => {
  setStaticParamsLocale(locale);

  return (
    <ArticlePage linkType="student" selected={{ translationKey: "timings" }}>
      <ArticleHeading>School Timings</ArticleHeading>
      <SinglePageTabs tabs={timingsTabs} defaultSelectedKey="junior" />
      <p>
        The management reserves the right to change the school timing as well as
        location of classes as and when deemed necessary.
      </p>
    </ArticlePage>
  );
};

export default SchoolTimingsPage;
