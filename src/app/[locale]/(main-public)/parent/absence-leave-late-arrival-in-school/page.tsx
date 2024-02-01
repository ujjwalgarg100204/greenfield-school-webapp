import {
    lateArrivalRules,
    leaveConditions,
    medicalLeaveTable,
    withdrawalRules,
} from "./data";

import ArticleHeading from "@components/ArticleHeading";
import ArticleList from "@/src/components/ArticleList";
import ArticlePage from "../../_components/ArticlePage";
import type { FC } from "react";
import type { NextPageProps } from "@/src/types";
import StaticTable from "@/src/components/ui/StaticTable";
import { setStaticParamsLocale } from "next-international/server";

const AbsenceLeaveLateArrivalInSchoolPage: FC<NextPageProps> = ({
    params: { locale },
}) => {
    setStaticParamsLocale(locale);

    return (
        <ArticlePage linkType="parent" selected={{ translationKey: "absence" }}>
            <ArticleHeading>Absent-Leave-Late Arrival in School</ArticleHeading>
            <p>
                Parents and guardians will appreciate that absence during the
                term is not in the best interest of the student. They are asked
                not to apply for leave if avoidable, but a proper leave
                application has to be submitted under any circumstances. Leave
                can be granted to the student only on the following grounds:
            </p>
            <ArticleList
                list={leaveConditions}
                containerClassName="space-y-1.5"
            />

            <StaticTable
                caption={{
                    title: "When should you appear after a big disease?",
                    desc: "Below is the list of no. of days a student should wait, if he/she falls ill with below mentioned diseases.",
                }}
                headerRow={{
                    cells: [
                        { text: "Disease" },
                        { text: "When should he/she appear?" },
                    ],
                }}
                dataRows={medicalLeaveTable.map(row => ({
                    cells: [{ text: row.disease }, { text: row.whenToAppear }],
                }))}
            />
            <ArticleHeading>Late Arrival In School</ArticleHeading>
            <ArticleList
                list={lateArrivalRules}
                containerClassName="space-y-1"
            />

            <ArticleHeading>Withdrawals</ArticleHeading>
            <ArticleList
                list={withdrawalRules}
                containerClassName="space-y-1"
            />
        </ArticlePage>
    );
};

export default AbsenceLeaveLateArrivalInSchoolPage;
