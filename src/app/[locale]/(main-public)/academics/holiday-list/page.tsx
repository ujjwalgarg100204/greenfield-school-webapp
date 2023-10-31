import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from "@/src/components/ui/Table";

import type { NextPageProps } from "@/src/types";
import ArticleHeading from "@components/ArticleHeading";
import { setStaticParamsLocale } from "next-international/server";
import type { FC } from "react";
import ArticlePage from "../../_components/ArticlePage";

const holidays = [
  { date: new Date(2023, 3, 4), title: "Mahavir Jayanti" },
  { date: new Date(2023, 3, 7), title: "Good Friday" },
  { date: new Date(2023, 3, 14), title: "Ambedkar Jayanti" },
  { date: new Date(2023, 3, 15), title: "Bengali New Year" },
  { date: new Date(2022, 3, 22), title: "Id’Ul’Fitre" },
  { date: new Date(2023, 4, 1), title: "May Day" },
  { date: new Date(2023, 4, 5), title: "Buddha Purnima" },
  { date: new Date(2023, 4, 9), title: "Rabindra Jayanti" },
  { date: new Date(2023, 5, 29), title: "Eid-Ul-Zuha" },
  { date: new Date(2023, 6, 29), title: "Muharram" },
  { date: new Date(2023, 7, 15), title: "Independence Day" },
  { date: new Date(2023, 7, 31), title: "Rakshabandhan" },
  { date: new Date(2023, 8, 6), title: "Janmashtami" },
  { date: new Date(2023, 8, 17), title: "Vishwakarma Puja" },
  { date: new Date(2023, 8, 28), title: "Milad-Un-Nabi" },
  { date: new Date(2023, 9, 2), title: "Gandhi Jayanti" },
  { date: new Date(2023, 9, 14), title: "Mahalaya" },
  { date: new Date(2023, 10, 27), title: "Gurunanak’s Birthday" },
  { date: new Date(2024, 0, 12), title: "Vivekananda’s Birthday" },
  { date: new Date(2024, 0, 23), title: "Netaji’s Birthday" },
  { date: new Date(2024, 0, 26), title: "Republic Day" },
  { date: new Date(2024, 1, 14), title: "Saraswati Puja" },
  { date: new Date(2024, 2, 8), title: "Shivaratri" },
  { date: new Date(2024, 2, 25), title: "Dol" },
  { date: new Date(2024, 2, 26), title: "Holi" },
  { date: new Date(2024, 2, 29), title: "Good Friday" },
] as const;

const HolidayListPage: FC<NextPageProps> = ({ params: { locale } }) => {
  setStaticParamsLocale(locale);

  return (
    <ArticlePage linkType="academic" selected={{ translationKey: "holiday" }}>
      <ArticleHeading>Holidays List</ArticleHeading>
      <Table>
        <TableHeader>
          <tr>
            <TableHeaderCell>SR. No.</TableHeaderCell>
            <TableHeaderCell>Date</TableHeaderCell>
            <TableHeaderCell>Title</TableHeaderCell>
          </tr>
        </TableHeader>
        <TableBody>
          {holidays.map(({ date, title }, index) => (
            <TableRow key={title}>
              <TableCell>{index + 1}.</TableCell>
              <TableCell>
                {date.toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </TableCell>
              <TableHeaderCell className="bg-gray-50">{title}</TableHeaderCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </ArticlePage>
  );
};

export default HolidayListPage;
