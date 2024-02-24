import { type FC } from "react";
import StaticTable from "~/app/_components/ui/StaticTable";
import H1 from "../../_components/H1";
import TwoSectionPage from "../../_components/TwoSectionPage";

const SCHOOL_HOURS_DATA = {
    principal: [{ time: "10.00 a.m. - 11.00 a.m.", days: "Monday & Thursday" }],
    administrator: [
        { time: "10.00 a.m. - 01.00 p.m.", days: "Monday - Friday" },
    ],
    "Vice Principal/Head Master/ Headmistress/ Coordinator": [
        {
            time: "02.00 p.m. - 03.00 p.m.",
            days: "Monday & Thursday",
        },
        {
            time: "10.00 a.m. - 11.00 a.m.",
            days: "2nd & 4th Saturday",
        },
    ],
    "Teachers Class II - XII": [
        { time: "02.00 p.m. - 03.00 p.m.", days: "Monday" },
        { time: "10.00 a.m. - 11.00 a.m.", days: "2nd & 4th Saturday" },
    ],
} as const;

const SchoolHoursPage: FC = () => {
    return (
        <TwoSectionPage linkTitle="Campus Life" currentLink="School Hours">
            <H1>School Hours</H1>
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
                dataRows={SCHOOL_HOURS_DATA.principal.map(row => ({
                    cells: [{ text: row.time }, { text: row.days }],
                }))}
            />
            <StaticTable
                caption={{ title: "Administrator Timings" }}
                headerRow={{ cells: [{ text: "Time" }, { text: "Days" }] }}
                dataRows={SCHOOL_HOURS_DATA.administrator.map(row => ({
                    cells: [{ text: row.time }, { text: row.days }],
                }))}
            />
            <StaticTable
                caption={{
                    title: "Vice Principal/Head Master/ Headmistress/ Coordinator Timings",
                }}
                headerRow={{ cells: [{ text: "Time" }, { text: "Days" }] }}
                dataRows={SCHOOL_HOURS_DATA[
                    "Vice Principal/Head Master/ Headmistress/ Coordinator"
                ].map(row => ({
                    cells: [{ text: row.time }, { text: row.days }],
                }))}
            />
            <StaticTable
                caption={{ title: "Teacher Class I - XII Timings" }}
                headerRow={{ cells: [{ text: "Time" }, { text: "Days" }] }}
                dataRows={SCHOOL_HOURS_DATA["Teachers Class II - XII"].map(
                    row => ({
                        cells: [{ text: row.time }, { text: row.days }],
                    }),
                )}
            />
        </TwoSectionPage>
    );
};

export default SchoolHoursPage;
