import ArticleHeading from "@components/ArticleHeading";
import ArticleList from "@/src/components/ArticleList";
import ArticlePage from "../../_components/ArticlePage";
import type { FC } from "react";
import type { NextPageProps } from "@/src/types";
import STUDENT_DISPERSAL_DATA from "./data";
import { setStaticParamsLocale } from "next-international/server";

const StudentDispersalPage: FC<NextPageProps> = ({ params: { locale } }) => {
    setStaticParamsLocale(locale);

    return (
        <ArticlePage
            linkType="parent"
            selected={{ translationKey: "dispersal" }}
        >
            <ArticleHeading>Student Dispersal</ArticleHeading>
            <p>
                This page primarily exists for students who don{"'"}t avail
                school transport services: -
            </p>
            <ArticleList list={STUDENT_DISPERSAL_DATA} />
        </ArticlePage>
    );
};

export default StudentDispersalPage;
