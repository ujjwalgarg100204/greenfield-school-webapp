import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableHeaderCell,
    TableRow,
} from "@/src/app/_components/ui/Table";

import type { FC } from "react";

const FeeTable: FC = () => {
    return (
        <Table>
            <TableHeader>
                <tr>
                    <TableHeaderCell>Fees Particulars</TableHeaderCell>
                    <TableHeaderCell>Distance (Km)</TableHeaderCell>
                    <TableHeaderCell>
                        Bus Charges Both side (Rs.)
                    </TableHeaderCell>
                </tr>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell rowSpan={5}>Monthly Bus Fees</TableCell>
                    <TableCell>0 - 05.50 Kms </TableCell>
                    <TableCell>3,700</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>05.50 - 10.50 Kms </TableCell>
                    <TableCell>3,850</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>10.50 - 15.50 Kms </TableCell>
                    <TableCell>4,000</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>15.50 - 30.00 Kms</TableCell>
                    <TableCell>4,250</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell> &gt; 30.00 Kms</TableCell>
                    <TableCell>4,350</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>Annual - Bus Registration Fees</TableCell>
                    <TableCell>Class Nursery to XII</TableCell>
                    <TableCell>500</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
};

export default FeeTable;
