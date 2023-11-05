import ArticleHeading from "@/src/components/ArticleHeading";
import { type NextPageProps } from "@/src/types";
import { setStaticParamsLocale } from "next-international/server";
import { type FC } from "react";
import ArticlePage from "../../_components/ArticlePage";
import GallaryImageFetching from "./_component/GallaryImageFetching";
import Card from "./_component/Card";
const Gallery: FC<NextPageProps> = ({ params: { locale } }) => {
  setStaticParamsLocale(locale);

  return (
    <ArticlePage linkType="school" selected={{ translationKey: "gallery" }}>
      <div className="flex justify-between">
        <ArticleHeading id="gallery">Gallery</ArticleHeading>
      </div>
      <div>
        <Card />
        {/* <GallaryImageFetching /> */}
      </div>
    </ArticlePage>
  );
};

export default Gallery;
