import ArticleHeading from "@/src/app/_components/ArticleHeading";
import ArticleList from "@/src/app/_components/ArticleList";
import type { NextPageProps } from "@/src/types";
import { setStaticParamsLocale } from "next-international/server";
import type { FC } from "react";
import ArticlePage from "../../_components/ArticlePage";
import POSITIVE_BEHAVIOR_MANAGEMENT_DATA from "./data";

const PositiveBehaviorPage: FC<NextPageProps> = ({ params: { locale } }) => {
    setStaticParamsLocale(locale);

    return (
        <ArticlePage
            linkType="student"
            selected={{ translationKey: "+ve-behavior-manage" }}
        >
            <ArticleHeading>Positive Behavior Management</ArticleHeading>
            <p>
                The following disciplinary measures may be adopted by the school
                in dealing with students behaving in an unruly manner and / or
                breaching schools disciplinary code/rules.
            </p>
            <ArticleList
                list={POSITIVE_BEHAVIOR_MANAGEMENT_DATA}
                containerClassName="py-2 space-y-1.5"
            />
            <p>
                Students indulging in aggressive or very violent behaviour will
                be dropped to and picked up from the school by their parents.
                They will not be permitted to travel by school bus.
            </p>
        </ArticlePage>
    );
};

export default PositiveBehaviorPage;
