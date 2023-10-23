import { type NextPageProps } from "@/src/types";
import ArticleHeading from "@components/ArticleHeading";
import { setStaticParamsLocale } from "next-international/server";
import type { FC } from "react";
import ArticlePage from "../../_components/ArticlePage";

const TransferCertificatePage: FC<NextPageProps> = ({ params: { locale } }) => {
  setStaticParamsLocale(locale);

  return (
    <ArticlePage
      linkType="student"
      selected={{ translationKey: "certificate" }}
    >
      <ArticleHeading>Students Transfer certificate</ArticleHeading>
      <ul className="list-disc space-y-6">
        <li className="text-justified">Transfer Certificate</li>
        <li className="text-justified">Transfer Certificate</li>
        <li className="text-justified">Transfer Certificate</li>
      </ul>
    </ArticlePage>
  );
};

export default TransferCertificatePage;
