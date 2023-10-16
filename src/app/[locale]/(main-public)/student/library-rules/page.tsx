import ArticlePage from "../../_components/ArticlePage";
import type { FC } from "react";
import type { NextPageProps } from "@/types";
import React from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import { getScopedI18n } from "@/locales/server";
import { setStaticParamsLocale } from "next-international/server";

const LibraryRules: FC<NextPageProps> = async ({ params: { locale } }) => {
  setStaticParamsLocale(locale);
  const t = await getScopedI18n("Pages.student.sub-links.l-rules");

  return (
    <ArticlePage linkType="student" selected={{ translationKey: "l-rules" }}>
      <SectionHeading> {t("title")} </SectionHeading>
      <ul className="list-disc space-y-6">
        <li className="text-justify">{t("content.para-1")}</li>
        <li className="text-justify">{t("content.para-2")}</li>
        <li className="text-justify">{t("content.para-3")}</li>
        <li className="text-justify">{t("content.para-4")}</li>
        <li className="text-justify">{t("content.para-5")}</li>
        <li className="text-justify">{t("content.para-6")}</li>
        <li className="text-justify">{t("content.para-7")}</li>
        <li className="text-justify">{t("content.para-8")}</li>
      </ul>
    </ArticlePage>
  );
};

export default LibraryRules;
