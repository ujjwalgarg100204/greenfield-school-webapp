import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from "@ui/Table";

import type { FC } from "react";
import { formatCurrency } from "@/src/utils";

export type Props = {
  subject?: string;
  tableData: ReadonlyArray<{
    feeType: string;
    oneTime?: number;
    annual?: number;
    quarterly?: number;
  }>;
};

const FeeTable: FC<Props> = ({ subject, tableData }) => {
  return (
    <Table>
      {subject && <TableCaption title={subject} className="capitalize" />}
      <TableHeader>
        <tr>
          <TableHeaderCell>Fee Type</TableHeaderCell>
          <TableHeaderCell>One Time (A)</TableHeaderCell>
          <TableHeaderCell>Annual (B)</TableHeaderCell>
          <TableHeaderCell>quarterly (C)</TableHeaderCell>
        </tr>
      </TableHeader>
      <TableBody>
        {tableData.map(({ feeType, oneTime, annual, quarterly }) => (
          <TableRow key={feeType}>
            <TableHeaderCell>{feeType}</TableHeaderCell>
            <TableCell>{oneTime ? formatCurrency(oneTime) : "-"}</TableCell>
            <TableCell>{annual ? formatCurrency(annual) : "-"}</TableCell>
            <TableCell>{quarterly ? formatCurrency(quarterly) : "-"}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default FeeTable;
