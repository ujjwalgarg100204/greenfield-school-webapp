import ArticlePage from "../../_components/ArticlePage";
import { FC } from "react";
import { NextPageProps } from "@/types";
import SectionHeading from "@/components/ui/SectionHeading";
import { setStaticParamsLocale } from "next-international/server";

const CanteenRules: FC<NextPageProps> = async ({ params: { locale } }) => {
  setStaticParamsLocale(locale);

  return (
    <ArticlePage linkType="student" selected={{ translationKey: "c-rules" }}>
      <SectionHeading>School canteen rules</SectionHeading>
      <ul className="list-disc space-y-6">
        <li className="text-justify"></li>
        <li className="text-justify"></li>
        <li className="text-justify"></li>
        <li className="text-justify"></li>
        <li className="text-justify"></li>
      </ul>
    </ArticlePage>
  );
};

export default CanteenRules;
