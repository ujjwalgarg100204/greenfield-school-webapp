import ArticleList from "@/src/components/ArticleList";
import type { NextPageProps } from "@/src/types";
import ArticleHeading from "@components/ArticleHeading";
import { setStaticParamsLocale } from "next-international/server";
import type { FC } from "react";
import ArticlePage from "../../_components/ArticlePage";
import PROGRESS_REPORT_DATA from "./data";

const ProgressReportPage: FC<NextPageProps> = ({ params: { locale } }) => {
    setStaticParamsLocale(locale);

    return (
        <ArticlePage linkType="parent" selected={{ translationKey: "report" }}>
            <ArticleHeading>Progress Report</ArticleHeading>
            {Object.entries(PROGRESS_REPORT_DATA).map(([grade, report]) => (
                <div key={grade} className="space-y-2">
                    <h2 className="text-xl font-bold">Class {grade}</h2>
                    <ArticleList list={report} containerClassName="space-y-1" />
                </div>
            ))}
        </ArticlePage>
    );
};

export default ProgressReportPage;
