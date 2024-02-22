"use client";

import { Tab, Tabs } from "@nextui-org/react";
import { type FC } from "react";
import StaticTable from "~/app/_components/ui/StaticTable";
import { SCHOOL_TIMINGS } from "../data";

const SchoolTimingsTabs: FC = () => {
    return (
        <Tabs variant="solid" color="primary">
            <Tab title="Junior School" key="junior">
                <div className="space-y-8">
                    <StaticTable
                        caption={{
                            title: "Reporting Timings",
                        }}
                        headerRow={{
                            cells: [
                                { text: "Means of Transport" },
                                { text: "Timings" },
                            ],
                        }}
                        dataRows={SCHOOL_TIMINGS.junior.reporting.map(
                            reportTimings => ({
                                cells: Object.values(reportTimings).map(
                                    val => ({
                                        text: val,
                                    }),
                                ),
                            }),
                        )}
                    />
                    <StaticTable
                        caption={{ title: "Dispersal Timings" }}
                        headerRow={{
                            cells: [
                                { text: "Type of Transport" },
                                { text: "Class" },
                                { text: "Timings" },
                            ],
                        }}
                        dataRows={SCHOOL_TIMINGS.junior.dispersal.map(
                            dispersalTimings => ({
                                cells: Object.values(dispersalTimings).map(
                                    val => ({
                                        text: val,
                                    }),
                                ),
                            }),
                        )}
                    />
                </div>
            </Tab>
            <Tab key="senior" title="Senior School">
                <div className="space-y-8">
                    <StaticTable
                        caption={{
                            title: "Reporting Timings",
                        }}
                        headerRow={{
                            cells: [
                                { text: "Means of Transport" },
                                { text: "Timings" },
                            ],
                        }}
                        dataRows={SCHOOL_TIMINGS.senior.reporting.map(
                            reportTimings => ({
                                cells: Object.values(reportTimings).map(
                                    val => ({
                                        text: val,
                                    }),
                                ),
                            }),
                        )}
                    />
                    <StaticTable
                        caption={{ title: "Dispersal Timings" }}
                        headerRow={{
                            cells: [{ text: "Class" }, { text: "Timings" }],
                        }}
                        dataRows={SCHOOL_TIMINGS.senior.dispersal.map(
                            dispersalTimings => ({
                                cells: Object.values(dispersalTimings).map(
                                    val => ({
                                        text: val,
                                    }),
                                ),
                            }),
                        )}
                    />
                </div>
            </Tab>
        </Tabs>
    );
};

export default SchoolTimingsTabs;
