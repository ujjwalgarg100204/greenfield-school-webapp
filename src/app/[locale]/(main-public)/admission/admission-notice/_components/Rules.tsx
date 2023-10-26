import ArticleList from "@/src/components/ArticleList";
import type { FC } from "react";

const rules = {
  new: [
    `Registration Form, duly completed in all respects, should be submitted latest by ${new Date().getFullYear()}.`,
    "Incomplete Registration Form and Registration Form with false information will be treated as invalid.",
    "The Candidate should have appeared for Board Examination for the Academic Session 2022-23 by April 2023.",
    "Age of the candidate should be 15+ years as on 31st March 2023.",
    "The percentage of marks or grades obtained in all subjects and the aggregate should be clearly mentioned in the Registration Form.",
    "Kindly note that students who have opted for Basic Level Mathematics of Class X CBSE Board Examination 2023 will be allowed to take form in any available subject combinations without Mathematics provided they satisfy the minimum mark criteria as laid by DPS Ruby Park.",
    "Please submit the following documents after attestation by the parents of the candidate.",
    "Class X Board Result / half yearly and class IX Final results",
    "Copy of Attested Birth Certificate.",
    "Please paste identical passport sized coloured photographs of the candidate on the Registration Form as well as the Admit Card, together with passport sized coloured photographs of the parents of the candidate on the Registration Form.",
    "Securing mere cut-off marks or grades is no guarantee for admission.",
    "Admission test of class XI ( Non GIS + GIS pending) will be confirmed soon",
    "Admission will be granted to Non-GIS Ruby Park Students only if they clear the Written Admission Test as well as the interview.",
    "The School provides transport facilities but offers no guarantee that a seat in the school vehicle will be available (the vehicles can be full to capacity or may not ply in the area of residence of the students).",
    "Registration Fee with Prospectus is Rs. 2000/-",
    "Note : School reserves all rights to change the admission criteria",
  ],
  old: [
    "Kindly note that students who have opted for Basic Level Mathematics of Class X CBSE Board Examination 2023 will be allowed to take form in any available subject combinations without Mathematics provided they satisfy the minimum mark criteria as laid by DPS Ruby Park.",
    "Students of DPS Ruby Park have to apply online at /admissions/",
    "Provisional admission will be granted to DPS Ruby Park Students. Admission to Class XI will be regularized from Provisional, only if the Candidate passes in the Class X Board Examination.",
    "Registration Fee is Rs. 2000/-",
  ],
} as const;

type Props = {
  type: "new" | "old";
};

const Rules: FC<Props> = ({ type }) => {
  return (
    <section className="space-y-4">
      <h4 className="text-lg font-bold">Some Rules to adhere</h4>
      <ArticleList list={rules[type]} containerClassName="space-y-2.5" />
    </section>
  );
};

export default Rules;
