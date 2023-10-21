import React, { FC } from "react";

import ArticlePage from "../../_components/ArticlePage";
import { NextPageProps } from "@/types";
import SectionHeading from "@/components/ui/SectionHeading";
import local from "next/font/local";
import { setStaticParamsLocale } from "next-international/server";

const TrpisAndExcursion: FC<NextPageProps> = ({ params: { locale } }) => {
  setStaticParamsLocale(locale);
  return (
    <ArticlePage linkType="student" selected={{ translationKey: "trips" }}>
      <SectionHeading>Child's Trancfer certificate</SectionHeading>
      <ul className="list-disc space-y-6">
        <li className=" text-justify">Add some text here</li>
        <li className=" text-justify">Add some text here</li>
        <li className=" text-justify">Add some text here</li>
      </ul>
    </ArticlePage>
  );
};

export default TrpisAndExcursion;
