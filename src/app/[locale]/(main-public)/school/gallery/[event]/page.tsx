import ArticleHeading from "@/src/components/ArticleHeading";
import ArticlePage from "../../../_components/ArticlePage";
import type { FC } from "react";
import { Image } from "@lib/next-ui";
import NextImage from "next/image";
import type { NextPageProps } from "@/src/types";
import { db } from "@/src/server/db";
import { getImagesByFolderNameWithSignedUrl } from "@/src/services/SchoolEventsGallery";
import { setStaticParamsLocale } from "next-international/server";
import { toSentenceCase } from "@/src/utils";

export const generateStaticParams = async () => {
  const folderNames = await db.galleryFolder.findMany({
    select: { name: true },
  });
  return folderNames.map(folder => ({
    event: folder.name,
  }));
};

const GalleryEventPage: FC<
  NextPageProps & {
    params: { event: string };
  }
> = async ({ params: { locale, event } }) => {
  setStaticParamsLocale(locale);
  const images = await getImagesByFolderNameWithSignedUrl(event);

  return (
    <ArticlePage linkType="school" selected={{ translationKey: "gallery" }}>
      <ArticleHeading className="capitalize">
        Event - {toSentenceCase(event, "-")}
      </ArticleHeading>
      <div className="flex flex-wrap justify-center gap-4 md:justify-start">
        {images.map((image, i) => (
          <Image
            key={image.id}
            src={image.src}
            alt={`${event} image-${i + 1}`}
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
