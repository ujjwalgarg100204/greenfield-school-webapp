import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHeaderCell,
  TableRow,
} from "@/src/components/ui/Table";

import ArticleHeading from "@/src/components/ArticleHeading";
import ArticlePage from "../../_components/ArticlePage";
import type { FC } from "react";
import type { NextPageProps } from "@/src/types";
import { setStaticParamsLocale } from "next-international/server";

const ageCriteria = [
  {
    class: "Nursery",
    dobInBetween: {
      start: new Date(2020, 3, 1),
      end: new Date(2021, 2, 31),
    },
    age: 3,
  },
  {
    class: "LKG",
    dobInBetween: {
      start: new Date(2019, 3, 1),
      end: new Date(2020, 2, 31),
    },
    age: 4,
  },
  {
    class: "UKG",
    dobInBetween: {
      start: new Date(2018, 3, 1),
      end: new Date(2019, 2, 31),
    },
    age: 5,
  },
  {
    class: "I",
    dobInBetween: {
      start: new Date(2017, 3, 1),
      end: new Date(2018, 2, 31),
    },
    age: 6,
  },
  {
    class: "II",
    dobInBetween: {
      start: new Date(2016, 3, 1),
      end: new Date(2017, 2, 31),
    },
    age: 7,
  },
  {
    class: "III",
    dobInBetween: {
      start: new Date(2015, 3, 1),
      end: new Date(2016, 2, 31),
    },
    age: 8,
  },
  {
    class: "IV",
    dobInBetween: {
      start: new Date(2014, 3, 1),
      end: new Date(2015, 2, 31),
    },
    age: 9,
  },
  {
    class: "V",
    dobInBetween: {
      start: new Date(2013, 3, 1),
      end: new Date(2014, 2, 31),
    },
    age: 10,
  },
  {
    class: "VI",
    dobInBetween: {
      start: new Date(2012, 3, 1),
      end: new Date(2013, 2, 31),
    },
    age: 11,
  },
  {
    class: "VII",
    dobInBetween: {
      start: new Date(2011, 3, 1),
      end: new Date(2012, 2, 31),
    },
    age: 12,
  },
  {
    class: "VIII",
    dobInBetween: {
      start: new Date(2010, 3, 1),
      end: new Date(2011, 2, 31),
    },
    age: 13,
  },
  {
    class: "IX",
    dobInBetween: {
      start: new Date(2009, 3, 1),
      end: new Date(2010, 2, 31),
    },
    age: 14,
  },
  {
    class: "X",
    dobInBetween: {
      start: new Date(2008, 3, 1),
      end: new Date(2009, 2, 31),
    },
    age: 15,
  },
  {
    class: "XI",
    dobInBetween: {
      start: new Date(2007, 3, 1),
      end: new Date(2008, 2, 31),
    },
    age: 16,
  },
  {
    class: "XII",
    dobInBetween: {
      start: new Date(2006, 3, 1),
      end: new Date(2007, 2, 31),
    },
    age: 17,
  },
] as const;

const AdmissionAgeCriteriaPage: FC<NextPageProps> = ({
  params: { locale },
}) => {
  setStaticParamsLocale(locale);
  const year = new Date().getFullYear();

  return (
    <ArticlePage linkType="admission" selected={{ translationKey: "age" }}>
      <ArticleHeading>Admission Age Criteria</ArticleHeading>
      <p>
        Following is the age criteria for Academic Year {year} - {year + 1}
      </p>
      <Table>
        <TableHeader>
          <tr>
            <TableHeaderCell>Class</TableHeaderCell>
            <TableHeaderCell colSpan={2} className="text-center">
              Date of Birth
            </TableHeaderCell>
            <TableHeaderCell colSpan={2}>Age</TableHeaderCell>
          </tr>
        </TableHeader>
        <TableBody>
          {ageCriteria.map(criteria => (
            <TableRow key={criteria.class}>
              <TableHeaderCell>{criteria.class}</TableHeaderCell>
              <TableCell>
                {criteria.dobInBetween.start.toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "numeric",
                  year: "numeric",
                })}
              </TableCell>
              <TableCell>
                {criteria.dobInBetween.end.toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "numeric",
                  year: "numeric",
                })}
              </TableCell>
              <TableCell>
                <span className="hidden sm:block">If the child is </span>
                <strong className="font-semibold">{criteria.age} +</strong>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </ArticlePage>
  );
};

export default AdmissionAgeCriteriaPage;
