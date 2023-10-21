import SectionHeading from "@/components/ui/SectionHeading";
import type { NextPageProps } from "@/types";
import { setStaticParamsLocale } from "next-international/server";
import type { FC } from "react";
import ArticlePage from "../../_components/ArticlePage";

const SchoolPrayer: FC<NextPageProps> = ({ params: { locale } }) => {
  setStaticParamsLocale(locale);
  return (
    <ArticlePage linkType="student" selected={{ translationKey: "prayer" }}>
      <SectionHeading>School Prayer</SectionHeading>
      <p>Itni skti hame dena data</p>
    </ArticlePage>
  );
};

export default SchoolPrayer;
