import React, { FC } from "react";

import ArticlePage from "../../_components/ArticlePage";
import { NextPageProps } from "@/types";
import SectionHeading from "@/components/ui/SectionHeading";
import { setStaticParamsLocale } from "next-international/server";

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
