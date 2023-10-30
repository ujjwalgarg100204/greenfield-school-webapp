import type { FC } from "react";
import FeeTable from "./FeeTable";
import JuniorClassesTabs from "./JuniorClassesTabs";

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

const JuniorsClassesFees: FC = () => {
  return (
    <section>
      <h2 className="mb-6 text-2xl">Class Nursery - Class X</h2>
      <JuniorClassesTabs
        nurseryToUkg={<FeeTable tableData={fees["nursery-ukg"]} />}
        firstToFifth={<FeeTable tableData={fees["I-V"]} />}
        sixthToTenth={<FeeTable tableData={fees["VI-X"]} />}
      />
    </section>
  );
};

export default JuniorsClassesFees;
