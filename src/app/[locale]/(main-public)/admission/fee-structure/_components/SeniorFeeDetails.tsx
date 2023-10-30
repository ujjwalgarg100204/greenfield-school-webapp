import ArticleList from "@/src/components/ArticleList";
import type { FC } from "react";
import type { Props as FeeTableProps } from "./FeeTable";
import FeeTable from "./FeeTable";

type Props = {
  type: "greenfield-students" | "non-greenfield-students";
  feesData: Record<
    string,
    {
      "greenfield-students": FeeTableProps["tableData"];
      "non-greenfield-students": FeeTableProps["tableData"];
    }
  >;
  rules: ReadonlyArray<string>;
};
const SeniorFeeDetails: FC<Props> = ({ type, feesData, rules }) => {
  return (
    <div className="space-y-8">
      <ul className="space-y-8">
        {Object.entries(feesData).map(([subject, tableData]) => (
          <li key={subject}>
            <FeeTable subject={subject} tableData={tableData[type]} />
          </li>
        ))}
      </ul>
      <div className="space-y-2">
        <h3 className="text-lg font-bold">Subject to change</h3>
        <ArticleList list={rules} />
      </div>
    </div>
  );
};
export default SeniorFeeDetails;
