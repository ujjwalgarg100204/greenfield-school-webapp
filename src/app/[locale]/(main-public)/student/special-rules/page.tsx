import ArticleHeading from "@/src/app/_components/ArticleHeading";
import ArticleList from "@/src/app/_components/ArticleList";
import type { NextPageProps } from "@/src/types";
import { setStaticParamsLocale } from "next-international/server";
import type { FC } from "react";
import ArticlePage from "../../_components/ArticlePage";
import SPECIAL_RULES_DATA from "./data";

const SpecialRulesPage: FC<NextPageProps> = ({ params: { locale } }) => {
    setStaticParamsLocale(locale);

    return (
        <ArticlePage
            linkType="student"
            selected={{ translationKey: "s-rules" }}
        >
            <ArticleHeading>Students special rules</ArticleHeading>
            <ArticleList list={SPECIAL_RULES_DATA} />
        </ArticlePage>
    );
};

export default SpecialRulesPage;
