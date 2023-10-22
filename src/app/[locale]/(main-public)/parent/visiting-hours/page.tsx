import ArticlePage from "../../_components/ArticlePage";
import type { FC } from "react";
import type { NextPageProps } from "@/types";
import SectionHeading from "@/components/ui/SectionHeading";
import { setStaticParamsLocale } from "next-international/server";

const CanteenRules: FC<NextPageProps> = ({ params: { locale } }) => {
  setStaticParamsLocale(locale);    
  // const t = await getScopedI18n("Pages.student.sub-links.c-rules");
  return (
    <ArticlePage linkType="parent" selected={{ translationKey: "hours" }}>
      <SectionHeading>School visiting hours</SectionHeading>
      <ul className="list-disc space-y-6">
        <li className="text-justify">Add text</li>
        <li className="text-justify">Add text</li>
        <li className="text-justify">Add text</li>
        <li className="text-justify">Add text</li>
        <li className="text-justify">Add text</li>
      </ul>
    </ArticlePage>
  );
};

export default CanteenRules;
