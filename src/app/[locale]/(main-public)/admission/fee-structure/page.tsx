import ArticleHeading from "@/src/components/ArticleHeading";
import ArticlePage from "../../_components/ArticlePage";
import type { FC } from "react";
import FEE_DETAILS from "./data";
import type { NextPageProps } from "@/src/types";
import SeniorFeeDetails from "./_components/SeniorFeeDetails";
import SinglePageTabs from "../../_components/SinglePageTabs";
import StaticTable from "@/src/components/ui/StaticTable";
import { formatCurrency } from "@/src/utils";
import { setStaticParamsLocale } from "next-international/server";

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
      <SeniorFeeDetails type="greenfield-students" rules={FEE_DETAILS.rules} />
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
                "annual" in feeDetail ? formatCurrency(feeDetail.annual) : "-",
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
                "annual" in feeDetail ? formatCurrency(feeDetail.annual) : "-",
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
                "annual" in feeDetail ? formatCurrency(feeDetail.annual) : "-",
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
        <SinglePageTabs tabs={juniorFeeTabs} defaultSelectedKey="nursery-ukg" />
      </section>
    </ArticlePage>
  );
};

export default AdmissionFeeStructure;
