import ArticleHeading from "@/src/components/ArticleHeading";
import { type NextPageProps } from "@/src/types";
import { setStaticParamsLocale } from "next-international/server";
import { type FC } from "react";
import ArticlePage from "../../../_components/ArticlePage";
import GalleryImageFetching from "../_component/GalleryImageFetching";

const GalleryCardImages: FC<
  NextPageProps & {
    params: { galleryCardImages: string };
  }
> = ({ params: { locale, galleryCardImages } }) => {
  setStaticParamsLocale(locale);
  return (
    <ArticlePage linkType="school" selected={{ translationKey: "gallery" }}>
      <div className="flex justify-between">
        <ArticleHeading id="gallery">
          {galleryCardImages?.toString().toUpperCase()}
        </ArticleHeading>
      </div>
      <div>
        <GalleryImageFetching galleryCardImages={galleryCardImages} />
      </div>
    </ArticlePage>
  );
};

export default GalleryCardImages;
