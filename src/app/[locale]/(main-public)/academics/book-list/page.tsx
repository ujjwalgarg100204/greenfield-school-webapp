import { Card, CardBody, Link } from "@/src/lib/next-ui";

import ArticleHeading from "@components/ArticleHeading";
import ArticlePage from "../../_components/ArticlePage";
import BOOK_LIST from "./data";
import type { FC } from "react";
import type { NextPageProps } from "@/src/types";
import { setStaticParamsLocale } from "next-international/server";

const BookListPage: FC<NextPageProps> = ({ params: { locale } }) => {
  setStaticParamsLocale(locale);

  return (
    <ArticlePage linkType="academic" selected={{ translationKey: "book-list" }}>
      <ArticleHeading>Book List</ArticleHeading>
      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {Object.keys(BOOK_LIST).map(className => (
          <Card
            key={className}
            isPressable
            shadow="sm"
            as={Link}
            href={`/academics/book-list/${className}`}
          >
            <CardBody className="grid aspect-square h-[140px] place-content-center text-xl font-bold text-primary-400">
              Class {className.toUpperCase()}
            </CardBody>
          </Card>
        ))}
      </ul>
    </ArticlePage>
  );
};

export default BookListPage;
