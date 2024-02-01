import { housePrefects, studentCouncil } from "./data";

import ArticleHeading from "@/src/app/_components/ArticleHeading";
import StaticTable from "@/src/app/_components/ui/StaticTable";
import type { NextPageProps } from "@/src/types";
import { setStaticParamsLocale } from "next-international/server";
import type { FC } from "react";
import ArticlePage from "../../_components/ArticlePage";
import StudentCard from "./_components/StudentCard";

const StudentCouncilPage: FC<NextPageProps> = ({ params: { locale } }) => {
    setStaticParamsLocale(locale);

    return (
        <ArticlePage
            linkType="student"
            selected={{ translationKey: "council" }}
        >
            <ArticleHeading>Student Council</ArticleHeading>
            <section className="space-y-8">
                <div className="space-y-2.5">
                    <h2 className="text-xl font-semibold underline">
                        School Appointments
                    </h2>
                    <p>
                        We are glad to announce the selected list of School
                        Appointments for session 2022-23 Students{"'"} Council
                    </p>
                </div>
                <div className="flex items-center justify-center gap-8 sm:justify-around">
                    <StudentCard
                        {...studentCouncil["2022-23"].schoolAppointments
                            .headBoy}
                        designation="Head Boy"
                    />
                    <StudentCard
                        {...studentCouncil["2022-23"].schoolAppointments
                            .headGirl}
                        designation="Head Girl"
                    />
                </div>
                <div className="grid grid-cols-2 justify-items-center gap-x-8 gap-y-4 xl:grid-cols-4">
                    <StudentCard
                        {...studentCouncil["2022-23"].schoolAppointments
                            .viceHeadBoyI}
                        designation="Vice Head Boy"
                    />
                    <StudentCard
                        {...studentCouncil["2022-23"].schoolAppointments
                            .viceHeadBoyII}
                        designation="Vice Head Boy"
                    />
                    <StudentCard
                        {...studentCouncil["2022-23"].schoolAppointments
                            .viceHeadGirlI}
                        designation="Vice Head Girl"
                    />
                    <StudentCard
                        {...studentCouncil["2022-23"].schoolAppointments
                            .viceHeadGirlII}
                        designation="Vice Head Girl"
                    />
                </div>
                <div className="flex items-center justify-center gap-8 sm:justify-around">
                    <StudentCard
                        {...studentCouncil["2022-23"].schoolAppointments
                            .juniorHeadBoy}
                        designation="Junior Head Boy"
                    />
                    <StudentCard
                        {...studentCouncil["2022-23"].schoolAppointments
                            .juniorHeadGirl}
                        designation="Junior Head Girl"
                    />
                </div>
                <div className="grid grid-cols-2 justify-items-center gap-x-8 gap-y-4 xl:grid-cols-4">
                    <StudentCard
                        {...studentCouncil["2022-23"].schoolAppointments
                            .sportsCaptainI}
                        designation="Sports Captain"
                    />
                    <StudentCard
                        {...studentCouncil["2022-23"].schoolAppointments
                            .sportsCaptainII}
                        designation="Sports Captain"
                    />
                    <div className="col-span-2 sm:col-span-1">
                        <StudentCard
                            {...studentCouncil["2022-23"].schoolAppointments
                                .viceSportsCaptainI}
                            designation="Vice Sports Captain"
                        />
                    </div>
                    <div className="col-span-2 sm:col-span-1">
                        <StudentCard
                            {...studentCouncil["2022-23"].schoolAppointments
                                .viceSportsCaptainII}
                            designation="Vice Sports Captain"
                        />
                    </div>
                </div>
            </section>
            <section className="space-y-4">
                <h2 className="text-xl font-bold underline">House Prefects</h2>
                <div className="space-y-8">
                    <StaticTable
                        caption={{ title: "Kautilya House Prefects" }}
                        headerRow={{
                            cells: [
                                { text: "" },
                                { text: "Name" },
                                { text: "Grade" },
                            ],
                        }}
                        dataRows={Object.entries(housePrefects.kautilya)
                            .map(([grade, students]) => [
                                {
                                    cells: [
                                        {
                                            text: grade,
                                            rowSpan: students.length,
                                        },
                                        { text: students[0].name },
                                        { text: students[0].grade },
                                    ],
                                },
                                ...students.slice(1).map(({ name, grade }) => ({
                                    cells: [{ text: name }, { text: grade }],
                                })),
                            ])
                            .flat(1)}
                    />
                    <StaticTable
                        caption={{ title: "Aryabhatta House Prefects" }}
                        headerRow={{
                            cells: [
                                { text: "" },
                                { text: "Name" },
                                { text: "Grade" },
                            ],
                        }}
                        dataRows={Object.entries(housePrefects.aryabhatta)
                            .map(([grade, students]) => [
                                {
                                    cells: [
                                        {
                                            text: grade,
                                            rowSpan: students.length,
                                        },
                                        { text: students[0].name },
                                        { text: students[0].grade },
                                    ],
                                },
                                ...students.slice(1).map(({ name, grade }) => ({
                                    cells: [{ text: name }, { text: grade }],
                                })),
                            ])
                            .flat(1)}
                    />
                    <StaticTable
                        caption={{ title: "Chakra House Prefects" }}
                        headerRow={{
                            cells: [
                                { text: "" },
                                { text: "Name" },
                                { text: "Grade" },
                            ],
                        }}
                        dataRows={Object.entries(housePrefects.chakra)
                            .map(([grade, students]) => [
                                {
                                    cells: [
                                        {
                                            text: grade,
                                            rowSpan: students.length,
                                        },
                                        { text: students[0].name },
                                        { text: students[0].grade },
                                    ],
                                },
                                ...students.slice(1).map(({ name, grade }) => ({
                                    cells: [{ text: name }, { text: grade }],
                                })),
                            ])
                            .flat(1)}
                    />
                </div>
            </section>
        </ArticlePage>
    );
};

export default StudentCouncilPage;
