import ArticleHeading from "@/src/components/ArticleHeading";
import SchoolEventsGallery from "@/src/services/SchoolEventsGallery";
import type { NextPageProps } from "@/src/types";
import { setStaticParamsLocale } from "next-international/server";
import type { FC } from "react";
import ArticlePage from "../../_components/ArticlePage";
import GalleryEventCard from "./_components/GalleryEventCard";

const gallery = new SchoolEventsGallery();

const Gallery: FC<NextPageProps> = async ({ params: { locale } }) => {
  setStaticParamsLocale(locale);
  const galleryFolders = await gallery.getGalleryFolders();

  return (
    <ArticlePage linkType="school" selected={{ translationKey: "gallery" }}>
      <div className="flex justify-between">
        <ArticleHeading id="gallery">Gallery</ArticleHeading>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {galleryFolders.map(folder => (
          <GalleryEventCard
            key={folder.id}
            {...folder}
            imageCount={folder._count.images}
          />
        ))}
      </div>
    </ArticlePage>
  );
};

export default Gallery;
