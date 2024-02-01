import ArticleHeading from "@/src/app/_components/ArticleHeading";
import StaticTable from "@/src/app/_components/ui/StaticTable";
import type { NextPageProps } from "@/src/types";
import { formatCurrency } from "@/src/utils/currency";
import { setStaticParamsLocale } from "next-international/server";
import type { FC } from "react";
import ArticlePage from "../../_components/ArticlePage";
import SinglePageTabs from "../../_components/SinglePageTabs";
import SeniorFeeDetails from "./_components/SeniorFeeDetails";
import FEE_DETAILS from "./data";

const seniorFeeTabs = [
    {
        key: "non-greenfield-students",
        title: "Non-Greenfield Students",
        component: (
            <SeniorFeeDetails
                type="non-greenfield-students"
                rules={FEE_DETAILS.rules}
            />
        ),
    },
    {
        key: "greenfield-students",
        title: "Greenfield Students",
        component: (
            <SeniorFeeDetails
                type="greenfield-students"
                rules={FEE_DETAILS.rules}
            />
        ),
    },
] as const;

const juniorFeeTabs = [
    {
        key: "nursery-ukg",
        title: "Class Nursery - UKG",
        component: (
            <StaticTable
                headerRow={{
                    cells: [
                        { text: "Fee Type" },
                        { text: "One Time (A)" },
                        { text: "Annual (B)" },
                        { text: "Quarterly (C)" },
                    ],
                }}
                dataRows={FEE_DETAILS["nursery-ukg"].map(feeDetail => ({
                    cells: [
                        { text: feeDetail.feeType },
                        {
                            text:
                                "oneTime" in feeDetail
                                    ? formatCurrency(feeDetail.oneTime)
                                    : "-",
                        },
                        {
                            text:
                                "annual" in feeDetail
                                    ? formatCurrency(feeDetail.annual)
                                    : "-",
                        },
                        {
                            text:
                                "quarterly" in feeDetail
                                    ? formatCurrency(feeDetail.quarterly)
                                    : "-",
                        },
                    ],
                }))}
            />
        ),
    },
    {
        key: "first-fifth",
        title: "Class I - V",
        component: (
            <StaticTable
                headerRow={{
                    cells: [
                        { text: "Fee Type" },
                        { text: "One Time (A)" },
                        { text: "Annual (B)" },
                        { text: "Quarterly (C)" },
                    ],
                }}
                dataRows={FEE_DETAILS["I-V"].map(feeDetail => ({
                    cells: [
                        { text: feeDetail.feeType },
                        {
                            text:
                                "oneTime" in feeDetail
                                    ? formatCurrency(feeDetail.oneTime)
                                    : "-",
                        },
                        {
                            text:
                                "annual" in feeDetail
                                    ? formatCurrency(feeDetail.annual)
                                    : "-",
                        },
                        {
                            text:
                                "quarterly" in feeDetail
                                    ? formatCurrency(feeDetail.quarterly)
                                    : "-",
                        },
                    ],
                }))}
            />
        ),
    },
    {
        key: "sixth-tenth",
        title: "Class VI - X",
        component: (
            <StaticTable
                headerRow={{
                    cells: [
                        { text: "Fee Type" },
                        { text: "One Time (A)" },
                        { text: "Annual (B)" },
                        { text: "Quarterly (C)" },
                    ],
                }}
                dataRows={FEE_DETAILS["VI-X"].map(feeDetail => ({
                    cells: [
                        { text: feeDetail.feeType },
                        {
                            text:
                                "oneTime" in feeDetail
                                    ? formatCurrency(feeDetail.oneTime)
                                    : "-",
                        },
                        {
                            text:
                                "annual" in feeDetail
                                    ? formatCurrency(feeDetail.annual)
                                    : "-",
                        },
                        {
                            text:
                                "quarterly" in feeDetail
                                    ? formatCurrency(feeDetail.quarterly)
                                    : "-",
                        },
                    ],
                }))}
            />
        ),
    },
] as const;

const AdmissionFeeStructure: FC<NextPageProps> = ({ params: { locale } }) => {
    setStaticParamsLocale(locale);
    const currentSession = new Date().getFullYear();

    return (
        <ArticlePage linkType="admission" selected={{ translationKey: "fee" }}>
            <ArticleHeading>
                Fees Structure of all clasSeniorFeeDetailsses for the session{" "}
                {currentSession} - {currentSession + 1}
            </ArticleHeading>
            <section>
                <h2 className="mb-6 text-2xl">Class XI - XII</h2>
                <SinglePageTabs
                    tabs={seniorFeeTabs}
                    defaultSelectedKey="non-greenfield-students"
                />
            </section>
            <section>
                <h2 className="mb-6 text-2xl">Class Nursery - Class X</h2>
                <SinglePageTabs
                    tabs={juniorFeeTabs}
                    defaultSelectedKey="nursery-ukg"
                />
            </section>
        </ArticlePage>
    );
};

export default AdmissionFeeStructure;
