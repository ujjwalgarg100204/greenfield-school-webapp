import ArticleHeading from "@/src/components/ArticleHeading";
import ArticlePage from "../../../_components/ArticlePage";
import type { FC } from "react";
import type { NextPageProps } from "@/src/types";
import SYLLABUS_DATA from "../data";
import Syllabus from "../_components/Syllabus";
import { setStaticParamsLocale } from "next-international/server";

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
