import SectionHeading from "@/components/ui/SectionHeading";
import { NextPageProps } from "@/types";
import { setStaticParamsLocale } from "next-international/server";
import { FC } from "react";
import ArticlePage from "../../_components/ArticlePage";

const SpecialRules: FC<NextPageProps> = ({ params: { locale } }) => {
  setStaticParamsLocale(locale);
  return (
    <ArticlePage
      linkType="student"
      selected={{ translationKey: "certificate" }}
    >
      <SectionHeading>Students special rules</SectionHeading>
      <ul className="list-disc space-y-6">
        <li className=" text-justify">Add some text here</li>
        <li className=" text-justify">Add some text here</li>
        <li className=" text-justify">Add some text here</li>
      </ul>
    </ArticlePage>
  );
};

export default SpecialRules;
