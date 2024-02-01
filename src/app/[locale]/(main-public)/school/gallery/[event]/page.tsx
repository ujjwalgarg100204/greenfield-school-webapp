import ArticleHeading from "@/src/app/_components/ArticleHeading";
import { Image } from "@/src/app/_lib/next-ui";
import { db } from "@/src/server/db";
import { getImagesByFolderNameWithSignedUrl } from "@/src/server/services/SchoolEventsGallery";
import type { NextPageProps } from "@/src/types";
import { toSentenceCase } from "@/src/utils/string";
import { setStaticParamsLocale } from "next-international/server";
import NextImage from "next/image";
import type { FC } from "react";
import ArticlePage from "../../../_components/ArticlePage";

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
