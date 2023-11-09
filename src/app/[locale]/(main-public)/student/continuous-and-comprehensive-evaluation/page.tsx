import {
  markRange,
  scholasticAreas,
  subjectViseHomeworkActivityEvaluationPlan,
} from "./data";

import ArticleHeading from "@components/ArticleHeading";
import ArticleList from "@/src/components/ArticleList";
import ArticlePage from "../../_components/ArticlePage";
import type { FC } from "react";
import type { NextPageProps } from "@/src/types";
import StaticTable from "@/src/components/ui/StaticTable";
import { setStaticParamsLocale } from "next-international/server";

const ContinuousAndComprehensiveEvaluation: FC<NextPageProps> = ({
  params: { locale },
}) => {
  setStaticParamsLocale(locale);

  return (
    <ArticlePage linkType="student" selected={{ translationKey: "cce" }}>
      <ArticleHeading>Continuous And Comprehensive Evaluation</ArticleHeading>

      <StaticTable
        caption={{ title: "Class II - IV SCHOLASTICS AREAS" }}
        headerRow={{
          cells: [
            { text: "Assessment Type" },
            { text: "Assessment Name" },
            { text: "Term" },
            { text: "Evaluation Basis" },
            { text: "Weightage" },
          ],
        }}
        dataRows={scholasticAreas["II-IV"].map(
          ({
            assessmentType,
            assessmentName,
            evaluationBasis,
            term,
            weightage,
          }) =>
            assessmentType === "term"
              ? {
                  cells: [
                    {
                      text: assessmentName,
                      colSpan: 2,
                      className: "text-center",
                    },
                    {
                      text: evaluationBasis,
                      colSpan: 2,
                      className: "text-center",
                    },
                    { text: weightage },
                  ],
                }
              : {
                  cells: [
                    { text: assessmentType },
                    { text: assessmentName },
                    { text: evaluationBasis },
                    { text: term },
                    { text: weightage },
                  ],
                },
        )}
      />
      <StaticTable
        caption={{ title: "Class V - VIII SCHOLASTICS AREAS" }}
        headerRow={{
          cells: [
            { text: "Assessment Type" },
            { text: "Assessment Name" },
            { text: "Term" },
            { text: "Evaluation Basis" },
            { text: "Weightage" },
          ],
        }}
        dataRows={scholasticAreas["V-VIII"].map(
          ({
            assessmentName,
            assessmentType,
            evaluationBasis,
            term,
            weightage,
          }) =>
            assessmentType === "term"
              ? {
                  cells: [
                    {
                      text: assessmentName,
                      colSpan: 2,
                      className: "text-center",
                    },
                    {
                      text: evaluationBasis,
                      colSpan: 2,
                      className: "text-center",
                    },
                    { text: weightage },
                  ],
                }
              : {
                  cells: [
                    { text: assessmentType },
                    { text: assessmentName },
                    { text: evaluationBasis },
                    { text: term },
                    { text: weightage },
                  ],
                },
        )}
      />
      <StaticTable
        caption={{ title: "Class IX - X SCHOLASTICS AREAS" }}
        headerRow={{
          cells: [
            { text: "Assessment Type" },
            { text: "Assessment Name" },
            { text: "Term" },
            { text: "Evaluation Basis" },
            { text: "Weightage" },
          ],
        }}
        dataRows={scholasticAreas["IX-X"].map(
          ({
            assessmentName,
            assessmentType,
            evaluationBasis,
            term,
            weightage,
          }) =>
            assessmentType === "term"
              ? {
                  cells: [
                    {
                      text: assessmentName,
                      colSpan: 2,
                      className: "text-center",
                    },
                    {
                      text: evaluationBasis,
                      colSpan: 2,
                      className: "text-center",
                    },
                    { text: weightage },
                  ],
                }
              : {
                  cells: [
                    { text: assessmentType },
                    { text: assessmentName },
                    { text: evaluationBasis },
                    { text: term },
                    { text: weightage },
                  ],
                },
        )}
      />
      <StaticTable
        caption={{
          title: "Subject Wise H.W/C.W. and Activity Evaluation Plan",
        }}
        headerRow={{
          cells: [
            { text: "Sl. No." },
            { text: "Subjects" },
            { text: "C.W./H.W. based on" },
            { text: "Activities" },
          ],
        }}
        dataRows={subjectViseHomeworkActivityEvaluationPlan.map(
          ({ subjects, work, activities }, i) => ({
            cells: [
              { text: `${i + 1}` },
              { text: subjects },
              {
                component: (
                  <ArticleList list={work} containerClassName="space-y-1.5" />
                ),
              },
              {
                component: (
                  <ArticleList
                    list={activities}
                    containerClassName="space-y-1.5"
                  />
                ),
              },
            ],
          }),
        )}
      />
      <StaticTable
        caption={{
          title: "Grading System",
          desc: "Students are to be awarded grades according to the following schemes:",
        }}
        headerRow={{
          cells: [{ text: "Marks Range (In Percentage)" }, { text: "Grade" }],
        }}
        dataRows={markRange.map(({ grade, percentage }) => ({
          cells: [{ text: `${percentage} %` }, { text: grade }],
        }))}
      />
    </ArticlePage>
  );
};

export default ContinuousAndComprehensiveEvaluation;
