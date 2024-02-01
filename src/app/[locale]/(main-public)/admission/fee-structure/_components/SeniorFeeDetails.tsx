import ArticleList from "@/src/components/ArticleList";
import type { FC } from "react";
import FEE_DETAILS from "../data";
import StaticTable from "@/src/components/ui/StaticTable";
import { formatCurrency } from "@/src/utils";

type Props = {
    type: "greenfield-students" | "non-greenfield-students";
    rules: ReadonlyArray<string>;
};
const SeniorFeeDetails: FC<Props> = ({ type, rules }) => {
    return (
        <div className="space-y-8">
            <ul className="space-y-8">
                {Object.entries(FEE_DETAILS["XI-XII"][type]).map(
                    ([subject, tableData]) => (
                        <li key={subject}>
                            <StaticTable
                                caption={{
                                    title: subject,
                                    className: "capitalize",
                                }}
                                headerRow={{
                                    cells: [
                                        { text: "Fee Type" },
                                        { text: "One Time (A)" },
                                        { text: "Annual (B)" },
                                        { text: "Quarterly (C)" },
                                    ],
                                }}
                                // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
                                dataRows={tableData.map(
                                    (feeDetail: {
                                        feeType: unknown;
                                        oneTime: number;
                                        annual: number;
                                        quarterly: number;
                                    }) => ({
                                        cells: [
                                            { text: feeDetail.feeType },
                                            {
                                                text:
                                                    "oneTime" in feeDetail
                                                        ? formatCurrency(
                                                              feeDetail.oneTime,
                                                          )
                                                        : "-",
                                            },
                                            {
                                                text:
                                                    "annual" in feeDetail
                                                        ? formatCurrency(
                                                              feeDetail.annual,
                                                          )
                                                        : "-",
                                            },
                                            {
                                                text:
                                                    "quarterly" in feeDetail
                                                        ? formatCurrency(
                                                              feeDetail.quarterly,
                                                          )
                                                        : "-",
                                            },
                                        ],
                                    }),
                                )}
                            />
                        </li>
                    ),
                )}
            </ul>
            <div className="space-y-2">
                <h3 className="text-lg font-bold">Subject to change</h3>
                <ArticleList list={rules} />
            </div>
        </div>
    );
};
export default SeniorFeeDetails;
