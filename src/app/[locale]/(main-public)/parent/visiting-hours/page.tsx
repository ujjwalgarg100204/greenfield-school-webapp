import ArticleHeading from "@components/ArticleHeading";
import ArticlePage from "../../_components/ArticlePage";
import type { FC } from "react";
import type { NextPageProps } from "@/src/types";
import StaticTable from "@/src/components/ui/StaticTable";
import VISITING_HOURS_DATA from "./data";
import { setStaticParamsLocale } from "next-international/server";

const VisitingHoursPage: FC<NextPageProps> = ({ params: { locale } }) => {
    setStaticParamsLocale(locale);

    return (
        <ArticlePage linkType="parent" selected={{ translationKey: "hours" }}>
            <ArticleHeading>School visiting hours</ArticleHeading>
            <p>
                The school would like the parents to maintain a rapport with the
                teachers. Parents are advised to meet the Principal, the
                Administrator or the teachers according to the schedule given
                below after taking prior appointments. All appointments should
                be routed through the school diary.
            </p>
            <StaticTable
                caption={{ title: "Principal Timings" }}
                headerRow={{ cells: [{ text: "Time" }, { text: "Days" }] }}
                dataRows={VISITING_HOURS_DATA.principal.map(row => ({
                    cells: [{ text: row.time }, { text: row.days }],
                }))}
            />
            <StaticTable
                caption={{ title: "Administrator Timings" }}
                headerRow={{ cells: [{ text: "Time" }, { text: "Days" }] }}
                dataRows={VISITING_HOURS_DATA.administrator.map(row => ({
                    cells: [{ text: row.time }, { text: row.days }],
                }))}
            />
            <StaticTable
                caption={{
                    title: "Vice Principal/Head Master/ Headmistress/ Coordinator Timings",
                }}
                headerRow={{ cells: [{ text: "Time" }, { text: "Days" }] }}
                dataRows={VISITING_HOURS_DATA[
                    "Vice Principal/Head Master/ Headmistress/ Co-ordinator"
                ].map(row => ({
                    cells: [{ text: row.time }, { text: row.days }],
                }))}
            />
            <StaticTable
                caption={{ title: "Teacher Class I - XII Timings" }}
                headerRow={{ cells: [{ text: "Time" }, { text: "Days" }] }}
                dataRows={VISITING_HOURS_DATA["Teachers Class II - XII"].map(
                    row => ({
                        cells: [{ text: row.time }, { text: row.days }],
                    }),
                )}
            />
        </ArticlePage>
    );
};

export default VisitingHoursPage;
