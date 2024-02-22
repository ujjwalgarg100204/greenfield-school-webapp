import type { FC } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHeader,
    TableHeaderCell,
    TableRow,
} from "~/app/_components/ui/Table";

const SchoolTransportFeesPage: FC = () => {
    const currYear = new Date().getFullYear();

    return (
        <div className="space-y-4">
            <h2 className="text-xl font-semibold">
                Academic Session {currYear} – {currYear + 1}
            </h2>
            <div className="space-y-12">
                <p>
                    This gives an idea of various important bus points and same
                    can change without any further explanations. Even, the bus
                    routes may differ for Junior School and High School and the
                    exact bus pickup & drop point shall be determined and
                    informed only after the beginning of the Academic Session{" "}
                    {currYear}-{currYear + 1}. Bus charges (subject to change
                    due to fuel price, etc.), are mentioned here in below:
                </p>
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
                            <TableCell>
                                Annual - Bus Registration Fees
                            </TableCell>
                            <TableCell>Class Nursery to XII</TableCell>
                            <TableCell>500</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
                <p>
                    One time administrative Charges of Rs. 500/- shall have to
                    be paid in addition to bus charges at the beginning of each
                    academic year. Fees will be charged for all 12 months. A
                    parent who withdraws the transport facility before the
                    vacations and rejoins after the vacations, may not be given
                    the transport facility. The amount is payable along with the
                    school fees on a quarterly basis.
                </p>
            </div>
        </div>
    );
};

export default SchoolTransportFeesPage;
