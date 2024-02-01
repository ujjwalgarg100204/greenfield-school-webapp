import ArticleList from "@/src/components/ArticleList";
import type { NextPageProps } from "@/src/types";
import ArticleHeading from "@components/ArticleHeading";
import { setStaticParamsLocale } from "next-international/server";
import type { FC } from "react";
import ArticlePage from "../../_components/ArticlePage";
import SCHOOL_INFIRMARY_DATA from "./data";

const SchoolInfirmaryPage: FC<NextPageProps> = ({ params: { locale } }) => {
    setStaticParamsLocale(locale);

    return (
        <ArticlePage
            linkType="parent"
            selected={{ translationKey: "infirmary" }}
        >
            <ArticleHeading>School Infirmary</ArticleHeading>
            <p>
                The School Infirmary is looked after by a qualified nurse.
                Medical check-up of students are regularly carried out and a
                record is maintained. If the doctor is of the opinion that a
                child needs special medical attention, the parents are informed
                of the same.
            </p>
            <p className="font-semibold">
                Parents are requested not to send sick children to school for
                attending classes or for appearing for examinations. This is in
                the interest of the child and at times his/her classmates, as
                well. Medical Certificates must be submitted so that the child
                {"'"}s results are not affected.
            </p>

            <div className="space-y-2">
                <h3 className="text-xl font-bold">
                    It is important that students: -
                </h3>
                <ArticleList
                    list={SCHOOL_INFIRMARY_DATA}
                    containerClassName="space-y-1.5"
                />
            </div>
        </ArticlePage>
    );
};

export default SchoolInfirmaryPage;
