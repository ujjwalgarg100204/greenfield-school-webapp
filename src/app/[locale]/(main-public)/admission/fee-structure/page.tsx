import ArticleHeading from "@/src/components/ArticleHeading";
import type { NextPageProps } from "@/src/types";
import { setStaticParamsLocale } from "next-international/server";
import type { FC } from "react";
import ArticlePage from "../../_components/ArticlePage";
import JuniorsClassesFees from "./_components/JuniorsClassesFees";
import SeniorClassesFees from "./_components/SeniorClassesFees";

const AdmissionFeeStructure: FC<NextPageProps> = ({ params: { locale } }) => {
  setStaticParamsLocale(locale);
  const currentSession = new Date().getFullYear();

  return (
    <ArticlePage linkType="admission" selected={{ translationKey: "fee" }}>
      <ArticleHeading>
        Fees Structure of all classes for the session {currentSession} -{" "}
        {currentSession + 1}
      </ArticleHeading>
      <SeniorClassesFees />
      <JuniorsClassesFees />
    </ArticlePage>
  );
};

export default AdmissionFeeStructure;
