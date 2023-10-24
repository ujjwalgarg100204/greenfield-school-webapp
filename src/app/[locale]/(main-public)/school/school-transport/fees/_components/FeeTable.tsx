"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@lib/next-ui";
import type { FC } from "react";

const FeeTable: FC = () => {
  return (
    <Table isStriped color="primary">
      <TableHeader>
        <TableColumn>Fees Particulars</TableColumn>
        <TableColumn>Distance (Km)</TableColumn>
        <TableColumn>Bus Charges Both side (Rs.)</TableColumn>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell rowSpan={5}>Monthly Bus Fees</TableCell>
          <TableCell>0 – 05.50 Kms </TableCell>
          <TableCell>3,700</TableCell>
        </TableRow>
        <TableRow>
          <TableCell hidden> </TableCell>
          <TableCell>05.50 – 10.50 Kms </TableCell>
          <TableCell>3,850</TableCell>
        </TableRow>
        <TableRow>
          <TableCell hidden> </TableCell>
          <TableCell>10.50 – 15.50 Kms </TableCell>
          <TableCell>4,000</TableCell>
        </TableRow>
        <TableRow>
          <TableCell hidden> </TableCell>
          <TableCell>15.50 – 30.00 Kms</TableCell>
          <TableCell>4,250</TableCell>
        </TableRow>
        <TableRow>
          <TableCell hidden> </TableCell>
          <TableCell> &gt; 30.00 Kms</TableCell>
          <TableCell>4,350</TableCell>
        </TableRow>
        <TableRow key="2">
          <TableCell>Annual – Bus Registration Fees</TableCell>
          <TableCell>Class Nursery to XII</TableCell>
          <TableCell>500</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default FeeTable;
