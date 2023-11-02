import ArticleHeading from "@components/ArticleHeading";
import ArticleList from "@/src/components/ArticleList";
import ArticlePage from "../../_components/ArticlePage";
import type { FC } from "react";
import type { NextPageProps } from "@/src/types";
import { setStaticParamsLocale } from "next-international/server";

const SchoolPrayerPage: FC<NextPageProps> = ({ params: { locale } }) => {
  setStaticParamsLocale(locale);

  return (
    <ArticlePage linkType="student" selected={{ translationKey: "prayer" }}>
      <ArticleHeading>School Prayer</ArticleHeading>
      <ArticleList
        list={[
          "May there be peace in the sky,",
          "May there be peace in the water,",
          "May there be peace on the earth,",
          "May there be peace in the plants and trees,",
          "May there be peace in all",
          "May that real peace be mine.",
          "May my Creator grant me peace of mind.",
          "May we work together in peace and harmony.",
          "May our study be vigorous and fruitful",
          "May love and harmony dwell among us",
        ]}
        containerClassName="list-none space-y-1"
      />
      <ArticleList
        list={[
          "Where the mind is without fear and the head is held high;",
          "Where knowledge is free;",
          "Where the world has not been broken up into fragments by narrow domestic walls;",
          "Where words come out from the depth of truth; Where tireless striving stretches its arms towards perfection;",
          "Where the clear stream of reason has not lost its way into the dreary desert sand of dead habit.",
          "Where the mind is led forward by thee, into ever-widening thought and action",
          "into that heaven of freedom, my Father,",
          "Let my country awake",
        ]}
        containerClassName="list-none space-y-1"
      />
    </ArticlePage>
  );
};

export default SchoolPrayerPage;
