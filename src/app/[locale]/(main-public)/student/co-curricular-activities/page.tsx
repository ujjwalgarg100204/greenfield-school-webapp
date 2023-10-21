import { defaultLocale, locales } from "@/locales";

import ArticlePage from "../../_components/ArticlePage";
import { FC } from "react";
import { NextPageProps } from "@/types";
import SectionHeading from "@/components/ui/SectionHeading";
import local from "next/font/local";
import { setStaticParamsLocale } from "next-international/server";

const CoCurricularActivites: FC<NextPageProps> = async ({
  params: { locale },
}) => {
  setStaticParamsLocale(locale);
  return (
    <ArticlePage linkType="student" selected={{ translationKey: "activities" }}>
      <SectionHeading>School's Co-curricular Activites</SectionHeading>
      <ul className="list-disc space-y-6">
        <li className=" text-justify">Volly ball</li>
        <li className=" text-justify">Volly ball</li>
        <li className=" text-justify">Volly ball</li>
      </ul>
    </ArticlePage>
  );
};

export default CoCurricularActivites;
