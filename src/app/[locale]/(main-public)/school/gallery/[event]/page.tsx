import ArticleHeading from "@/src/components/ArticleHeading";
import SchoolEventsGallery from "@/src/services/SchoolEventsGallery";
import type { NextPageProps } from "@/src/types";
import { Image } from "@lib/next-ui";
import { setStaticParamsLocale } from "next-international/server";
import NextImage from "next/image";
import type { FC } from "react";
import ArticlePage from "../../../_components/ArticlePage";

const gallery = new SchoolEventsGallery();

export const generateStaticParams = async () => {
  const folders = await gallery.getGalleryFolders();
  return folders.map(folder => ({
    event: folder.name,
  }));
};

const GalleryEventPage: FC<
  NextPageProps & {
    params: { event: string };
  }
> = async ({ params: { locale, event } }) => {
  setStaticParamsLocale(locale);
  const images = await gallery.getImagesByFolderName(event);

  return (
    <ArticlePage linkType="school" selected={{ translationKey: "gallery" }}>
      <ArticleHeading className="capitalize">Event - {event}</ArticleHeading>
      <div className="flex flex-wrap justify-center gap-4 md:justify-start">
        {images.map(image => (
          <Image
            key={image.id}
            src={image.url}
            alt={image.filename}
            as={NextImage}
            className="h-32 w-32 object-cover object-center md:h-64 md:w-64 lg:h-72 lg:w-72"
            isZoomed
            isBlurred
            width={800}
            height={600}
            quality={95}
          />
        ))}
      </div>
    </ArticlePage>
  );
};

export default GalleryEventPage;
