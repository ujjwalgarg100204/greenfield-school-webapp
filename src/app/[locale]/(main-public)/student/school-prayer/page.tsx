import ArticlePage from "../../_components/ArticlePage";
import type { FC } from "react";
import type { NextPageProps } from "@/types";
import SectionHeading from "@/components/ui/SectionHeading";
import { getScopedI18n } from "@/locales/server";
import { setStaticParamsLocale } from "next-international/server";

const SchoolPrayer: FC<NextPageProps> = async({ params: { locale } }) => {
  setStaticParamsLocale(locale);
  const t = await getScopedI18n("Pages.student.sub-links.c-rules");
  return (
    <ArticlePage linkType="student" selected={{ translationKey: "prayer" }}>
      <SectionHeading>School Prayer</SectionHeading>
      <p>Itni skti hame dena data</p>
    </ArticlePage>
  );
};

export default SchoolPrayer;
