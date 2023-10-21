import ArticlePage from "../../_components/ArticlePage";
import { FC } from "react";
import { NextPageProps } from "@/types";
import SectionHeading from "@/components/ui/SectionHeading";
import local from "next/font/local";
import { setStaticParamsLocale } from "next-international/server";

const SchoolTiming: FC<NextPageProps> = ({ params: { locale } }) => {
  setStaticParamsLocale(locale);
  return (
    <ArticlePage linkType="student" selected={{ translationKey: "timings" }}>
      <SectionHeading>School Timings</SectionHeading>
      <ul className=" list-disc space-y-6">
        <li className=" text-justify">8 to 2</li>
        <li className=" text-justify">8 to 2</li>
        <li className=" text-justify">8 to 2</li>
      </ul>
    </ArticlePage>
  );
};

export default SchoolTiming;
