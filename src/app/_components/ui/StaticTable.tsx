import type { FC, HTMLAttributes, ReactNode, ThHTMLAttributes } from "react";
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHeader,
    TableHeaderCell,
    TableRow,
} from "./Table";

import { v4 as uuid } from "uuid";

export type Cell = Omit<ThHTMLAttributes<HTMLTableCellElement>, "children"> &
    (
        | {
              text: string;
          }
        | { component: ReactNode }
    );

export interface Row
    extends Omit<HTMLAttributes<HTMLTableRowElement>, "children"> {
    cells: ReadonlyArray<Cell>;
}

export interface Caption
    extends Omit<HTMLAttributes<HTMLTableCaptionElement>, "children"> {
    title: string;
    desc?: string;
}

export type StaticTableProps = {
    headerRow: Row;
    dataRows: ReadonlyArray<Row>;
    caption?: Caption;
};

const StaticTable: FC<StaticTableProps> = ({
    headerRow: { cells: headerCells, ...headerRowProps },
    dataRows,
    caption,
}) => {
    return (
        <Table>
            {caption && <TableCaption {...caption} />}
            <TableHeader>
                <tr {...headerRowProps}>
                    {headerCells.map(headerCell => (
                        <TableHeaderCell key={uuid()} {...headerCell}>
                            {"text" in headerCell
                                ? headerCell.text
                                : headerCell.component}
                        </TableHeaderCell>
                    ))}
                </tr>
            </TableHeader>
            <TableBody>
                {dataRows.map(({ cells: dataCells, ...dataRowProps }) => (
                    <TableRow key={uuid()} {...dataRowProps}>
                        {dataCells.flatMap(dataCell => (
                            <TableCell key={uuid()} {...dataCell}>
                                {"text" in dataCell
                                    ? dataCell.text
                                    : dataCell.component}
                            </TableCell>
                        ))}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};

export default StaticTable;
