import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from "@/src/components/ui/Table";

import type { FC } from "react";
import { Fragment } from "react";

type Props = {
  books: ReadonlyArray<{
    subject: string;
    books: ReadonlyArray<{
      title: string;
      publisher: string;
    }>;
  }>;
};

const BooksTable: FC<Props> = ({ books }) => {
  return (
    <Table>
      <TableHeader>
        <tr>
          <TableHeaderCell>Subject</TableHeaderCell>
          <TableHeaderCell>Book Title</TableHeaderCell>
          <TableHeaderCell>Publisher</TableHeaderCell>
        </tr>
      </TableHeader>
      <TableBody>
        {books.map(({ subject, books: bookList }) => (
          <Fragment key={subject}>
            <TableRow>
              <TableHeaderCell rowSpan={bookList.length} className="bg-gray-50">
                {subject}
              </TableHeaderCell>
              <TableCell>{bookList[0]?.title}</TableCell>
              <TableCell>{bookList[0]?.publisher}</TableCell>
            </TableRow>
            {bookList.slice(1).map(({ title, publisher }) => (
              <TableRow key={title}>
                <TableCell>{title}</TableCell>
                <TableCell>{publisher}</TableCell>
              </TableRow>
            ))}
          </Fragment>
        ))}
      </TableBody>
    </Table>
  );
};

export default BooksTable;
