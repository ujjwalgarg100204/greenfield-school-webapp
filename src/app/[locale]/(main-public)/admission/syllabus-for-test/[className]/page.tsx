import ArticleHeading from "@/src/app/_components/ArticleHeading";
import type { NextPageProps } from "@/src/types";
import { setStaticParamsLocale } from "next-international/server";
import type { FC } from "react";
import ArticlePage from "../../../_components/ArticlePage";
import Syllabus from "../_components/Syllabus";
import SYLLABUS_DATA from "../data";

export const generateStaticParams = () => {
    return Object.keys(SYLLABUS_DATA).map(c => ({
        className: c,
    }));
};

const SyllabusPage: FC<
    NextPageProps & { params: { className: keyof typeof SYLLABUS_DATA } }
> = ({ params: { locale, className } }) => {
    setStaticParamsLocale(locale);

    return (
        <ArticlePage
            linkType="admission"
            selected={{ translationKey: "syllabus" }}
        >
            <ArticleHeading>
                Class {className.toUpperCase()} Syllabus
            </ArticleHeading>
            <Syllabus syllabus={SYLLABUS_DATA[className]} />
        </ArticlePage>
    );
};

export default SyllabusPage;
