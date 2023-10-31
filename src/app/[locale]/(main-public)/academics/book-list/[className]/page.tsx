import ArticleHeading from "@/src/components/ArticleHeading";
import type { NextPageProps } from "@/src/types";
import { setStaticParamsLocale } from "next-international/server";
import type { FC } from "react";
import ArticlePage from "../../../_components/ArticlePage";
import BooksTable from "../_components/BooksTable";
import booklist from "../booklist";

export const generateStaticParams = () => {
  return Object.keys(booklist).map(className => ({
    className,
  }));
};

const ClassBookPage: FC<
  NextPageProps & { params: { className: keyof typeof booklist } }
> = ({ params: { className, locale } }) => {
  setStaticParamsLocale(locale);

  return (
    <ArticlePage linkType="academic" selected={{ translationKey: "book-list" }}>
      <ArticleHeading>
        Book-List for Class {className.toUpperCase()}
      </ArticleHeading>
      <BooksTable books={booklist[className]} />
    </ArticlePage>
  );
};

export default ClassBookPage;
