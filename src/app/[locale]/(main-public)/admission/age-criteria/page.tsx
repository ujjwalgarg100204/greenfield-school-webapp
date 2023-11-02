import ArticleHeading from "@/src/components/ArticleHeading";
import StaticTable from "@/src/components/ui/StaticTable";
import type { NextPageProps } from "@/src/types";
import { setStaticParamsLocale } from "next-international/server";
import type { FC } from "react";
import ArticlePage from "../../_components/ArticlePage";
import AGE_CRITERIA from "./data";

const AdmissionAgeCriteriaPage: FC<NextPageProps> = ({
  params: { locale },
}) => {
  setStaticParamsLocale(locale);
  const year = new Date().getFullYear();

  return (
    <ArticlePage linkType="admission" selected={{ translationKey: "age" }}>
      <ArticleHeading>Admission Age Criteria</ArticleHeading>
      <p>
        Following is the age criteria for Academic Year {year} - {year + 1}
      </p>
      <StaticTable
        headerRow={{
          cells: [
            { text: "Class" },
            { text: "Date of Birth", colSpan: 2 },
            { text: "Age", colSpan: 2 },
          ],
        }}
        dataRows={AGE_CRITERIA.map(({ age, class: class_, dobInBetween }) => ({
          cells: [
            { text: class_ },
            {
              text: dobInBetween.start.toLocaleDateString("en-US", {
                day: "numeric",
                month: "numeric",
                year: "numeric",
              }),
            },
            {
              text: dobInBetween.end.toLocaleDateString("en-US", {
                day: "numeric",
                month: "numeric",
                year: "numeric",
              }),
            },
            {
              component: (
                <>
                  <span className="hidden sm:block">If the child is </span>
                  <strong className="font-semibold">{age} +</strong>
                </>
              ),
            },
          ],
        }))}
      />
    </ArticlePage>
  );
};

export default AdmissionAgeCriteriaPage;
