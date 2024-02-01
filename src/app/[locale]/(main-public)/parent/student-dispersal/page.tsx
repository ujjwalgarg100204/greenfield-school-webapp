import ArticleHeading from "@/src/app/_components/ArticleHeading";
import ArticleList from "@/src/app/_components/ArticleList";
import type { NextPageProps } from "@/src/types";
import { setStaticParamsLocale } from "next-international/server";
import type { FC } from "react";
import ArticlePage from "../../_components/ArticlePage";
import STUDENT_DISPERSAL_DATA from "./data";

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
