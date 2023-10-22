import SectionHeading from "@/components/ui/SectionHeading";
import type { NextPageProps } from "@/types";
import { setStaticParamsLocale } from "next-international/server";
import type { FC } from "react";
import ArticlePage from "../../_components/ArticlePage";

const CoCurricularActivites: FC<NextPageProps> =  ({
  params: { locale },
}) => {
  setStaticParamsLocale(locale);
  // const t = await getScopedI18n("Pages.student.sub-links.c-rules");
  return (
    <ArticlePage linkType="student" selected={{ translationKey: "activities" }}>
      <SectionHeading>Schools Co-curricular Activites</SectionHeading>
      <ul className="list-disc space-y-6">
        <li className=" text-justify">Volly ball</li>
        <li className=" text-justify">Volly ball</li>
        <li className=" text-justify">Volly ball</li>
      </ul>
    </ArticlePage>
  );
};

export default CoCurricularActivites;
