import type { FC, HTMLAttributes, ThHTMLAttributes } from "react";

import { twMerge } from "tailwind-merge";

const Table: FC<
  Pick<HTMLAttributes<HTMLTableElement>, "children" | "className">
> = ({ children, className }) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table
        className={twMerge(
          "w-full text-left text-sm text-gray-500 dark:text-gray-400",
          className,
        )}
      >
        {children}
      </table>
    </div>
  );
};

const TableHeader: FC<
  Pick<HTMLAttributes<HTMLTableSectionElement>, "children" | "className">
> = ({ children, className }) => {
  return (
    <thead
      className={twMerge(
        "bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400",
        className,
      )}
    >
      {children}
    </thead>
  );
};

const TableHeaderCell: FC<
  Pick<
    ThHTMLAttributes<HTMLTableCellElement>,
    "children" | "className" | "rowSpan" | "colSpan"
  >
> = ({ children, className, ...props }) => {
  return (
    <th
      scope="col"
      className={twMerge(
        "whitespace-nowrap px-6 py-3 font-medium text-gray-900 dark:text-white",
        className,
      )}
      {...props}
    >
      {children}
    </th>
  );
};

const TableCell: FC<
  Pick<
    ThHTMLAttributes<HTMLTableCellElement>,
    "children" | "className" | "rowSpan" | "colSpan"
  >
> = ({ children, className, ...props }) => {
  return (
    <td className={twMerge("px-6 py-4", className)} {...props}>
      {children}
    </td>
  );
};

const TableBody: FC<
  Pick<HTMLAttributes<HTMLTableSectionElement>, "children" | "className">
> = ({ children, className }) => {
  return <tbody className={className}>{children}</tbody>;
};

const TableRow: FC<
  Pick<HTMLAttributes<HTMLTableRowElement>, "children" | "className">
> = ({ children, className }) => {
  return (
    <tr
      className={twMerge(
        "border-b bg-white last:border-none dark:border-gray-700 dark:bg-gray-800",
        className,
      )}
    >
      {children}
    </tr>
  );
};

const TableCaption: FC<
  Pick<HTMLAttributes<HTMLTableCaptionElement>, "className"> & {
    title: string;
    desc?: string;
  }
> = ({ className, title, desc }) => {
  return (
    <caption
      className={twMerge(
        "bg-white p-5 text-left text-lg font-semibold text-gray-900 dark:bg-gray-800 dark:text-white",
        className,
      )}
    >
      {title}
      {desc && (
        <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">
          {desc}
        </p>
      )}
    </caption>
  );
};

export {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
};
