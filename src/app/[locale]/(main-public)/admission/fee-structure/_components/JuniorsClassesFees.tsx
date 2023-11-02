import type { FC } from "react";
import SinglePageTabs from "../../../_components/SinglePageTabs";
import FeeTable from "./FeeTable";

const fees = {
  "nursery-ukg": [
    {
      feeType: "Administrative Charges (Non Refundable)",
      oneTime: 85000,
    },
    {
      feeType: "Caution Money (Refundable)",
      annual: 25000,
    },
    {
      feeType: "Annual Session Fees",
      annual: 25500,
    },
    { feeType: "Almanac Fees / ID Card Fees", annual: 1100 },
    {
      feeType: "Quarterly Tuition Fees",
      quarterly: 15600,
    },
  ],
  "I-V": [
    {
      feeType: "Administrative Charges (Non Refundable)",
      oneTime: 85000,
    },
    {
      feeType: "Caution Money (Refundable)",
      annual: 25000,
    },
    {
      feeType: "Annual Session Fees",
      annual: 26700,
    },
    { feeType: "Almanac Fees / ID Card Fees", annual: 1100 },
    {
      feeType: "Quarterly Tuition Fees",
      quarterly: 15900,
    },
  ],
  "VI-X": [
    {
      feeType: "Administrative Charges (Non Refundable)",
      oneTime: 85000,
    },
    {
      feeType: "Caution Money (Refundable)",
      annual: 25000,
    },
    {
      feeType: "Annual Session Fees",
      annual: 26700,
    },
    { feeType: "Almanac Fees / ID Card Fees", annual: 1100 },
    {
      feeType: "Quarterly Tuition Fees",
      quarterly: 16575,
    },
  ],
} as const;

const feeTabs = [
  {
    key: "nursery-ukg",
    title: "Class Nursery - UKG",
    component: <FeeTable tableData={fees["nursery-ukg"]} />,
  },
  {
    key: "first-fifth",
    title: "Class I - V",
    component: <FeeTable tableData={fees["I-V"]} />,
  },
  {
    key: "sixth-tenth",
    title: "Class VI - X",
    component: <FeeTable tableData={fees["VI-X"]} />,
  },
] as const;

const JuniorsClassesFees: FC = () => {
  return (
    <section>
      <h2 className="mb-6 text-2xl">Class Nursery - Class X</h2>
      <SinglePageTabs tabs={feeTabs} defaultSelectedKey="nursery-ukg" />
    </section>
  );
};

export default JuniorsClassesFees;
