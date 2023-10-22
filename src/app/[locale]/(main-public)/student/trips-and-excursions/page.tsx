import SectionHeading from "@/components/ui/SectionHeading";
import type { NextPageProps } from "@/types";
import { setStaticParamsLocale } from "next-international/server";
import type { FC } from "react";
import ArticlePage from "../../_components/ArticlePage";

const TrpisAndExcursion: FC<NextPageProps> = ({ params: { locale } }) => {
  setStaticParamsLocale(locale);
  // const t = await getScopedI18n("Pages.student.sub-links.c-rules");
  return (
    <ArticlePage linkType="student" selected={{ translationKey: "trips" }}>
      <SectionHeading>Trips and excursion</SectionHeading>
      <ul className="list-disc space-y-6">
        <li className=" text-justify">Add some text here</li>
        <li className=" text-justify">Add some text here</li>
        <li className=" text-justify">Add some text here</li>
      </ul>
    </ArticlePage>
  );
};

export default TrpisAndExcursion;
