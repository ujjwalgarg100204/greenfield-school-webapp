import ArticleHeading from "@/src/components/ArticleHeading";
import ArticleList from "@/src/components/ArticleList";
import type { NextPageProps } from "@/src/types";
import { setStaticParamsLocale } from "next-international/server";
import type { FC } from "react";
import ArticlePage from "../../_components/ArticlePage";

const procedure = [
  "The list of selected candidates will be put up on the Notice Board at the Admission Office and on the School website www.greenfield-international.com.",
  "The Admission procedure will be intimated to the parents of the selected candidates. It is mandatory for both the parents and local / legal guardian to be present to complete various admission formalities.",
  "For students seeking admission to Class I onwards, it is mandatory to submit the Original Transfer Certificate from the last school attended.",
  "Fees once paid at the time of admission is non refundable, except the Caution Money (Refundable) in case of withdrawal.",
  "Please check the dates for the admission procedure and adhere to them strictly.",
  "The Management reserves the right to have the last word in all matters related to admission.",
] as const;

const AdmissionProcedurePage: FC<NextPageProps> = ({ params: { locale } }) => {
  setStaticParamsLocale(locale);

  return (
    <ArticlePage
      linkType="admission"
      selected={{ translationKey: "procedure" }}
    >
      <ArticleHeading>Admission Procedure</ArticleHeading>
      <ArticleList list={procedure} />
    </ArticlePage>
  );
};

export default AdmissionProcedurePage;
