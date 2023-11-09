import ArticleHeading from "@/src/components/ArticleHeading";
import StaticTable from "@/src/components/ui/StaticTable";
import type { NextPageProps } from "@/src/types";
import { setStaticParamsLocale } from "next-international/server";
import type { FC } from "react";
import ArticlePage from "../../../_components/ArticlePage";
import BOOK_LIST from "../data";

export const generateStaticParams = () => {
  return Object.keys(BOOK_LIST).map(className => ({
    className,
  }));
};

const ClassBookPage: FC<
  NextPageProps & { params: { className: keyof typeof BOOK_LIST } }
> = ({ params: { className, locale } }) => {
  setStaticParamsLocale(locale);

  return (
    <ArticlePage linkType="academic" selected={{ translationKey: "book-list" }}>
      <ArticleHeading>
        Book-List for Class {className.toUpperCase()}
      </ArticleHeading>
      <StaticTable
        headerRow={{
          cells: [
            { text: "Subject" },
            { text: "Book Title" },
            { text: "Publisher" },
          ],
        }}
        dataRows={BOOK_LIST[className]
          .map(({ books, subject }) => [
            {
              cells: [
                { text: subject, rowSpan: books.length },
                { text: books[0].title },
                { text: books[0].publisher },
              ],
            },
            ...books.map(({ title, publisher }) => ({
              cells: [{ text: title }, { text: publisher }],
            })),
          ])
          .flat(1)}
      />
    </ArticlePage>
  );
};

export default ClassBookPage;
