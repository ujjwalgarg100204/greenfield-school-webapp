import ArticleList from "@/src/components/ArticleList";
import type { NextPageProps } from "@/src/types";
import ArticleHeading from "@components/ArticleHeading";
import { setStaticParamsLocale } from "next-international/server";
import type { FC } from "react";
import ArticlePage from "../../_components/ArticlePage";
import TRIP_DATA from "./data";

const TripsAndExcursionPage: FC<NextPageProps> = ({ params: { locale } }) => {
    setStaticParamsLocale(locale);

    return (
        <ArticlePage linkType="student" selected={{ translationKey: "trips" }}>
            <ArticleHeading>Trips and excursion</ArticleHeading>
            <p>
                Trips are helps for Classes I - XII, and trips will be organized
                to following places:
            </p>
            <ArticleList list={TRIP_DATA} containerClassName="space-y-1.5" />
            <p className="font-semibold">
                The School will organize educational trips at the convenience of
                the Management
            </p>
        </ArticlePage>
    );
};

export default TripsAndExcursionPage;
