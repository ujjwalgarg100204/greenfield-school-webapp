import ArticleHeading from "@/src/components/ArticleHeading";

import { Galleryawsintegration } from "@/src/services/GalleryAWSIntegration";
import { type NextPageProps } from "@/src/types";
import { Card, CardBody, CardHeader, Link } from "@lib/next-ui";
import { setStaticParamsLocale } from "next-international/server";
import NextLink from "next/link";
import { type FC } from "react";
import ArticlePage from "../../_components/ArticlePage";
import GalleryCard from "./_component/GalleryCardImages";

const Gallery: FC<NextPageProps> = async ({ params: { locale } }) => {
  setStaticParamsLocale(locale);

  const galleryIntegration = new Galleryawsintegration();

  const result = galleryIntegration.ListObjects();

  

  return (
    <ArticlePage linkType="school" selected={{ translationKey: "gallery" }}>
      <div className="flex justify-between">
        <ArticleHeading id="gallery">Gallery</ArticleHeading>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {(await result).Contents?.filter(
          ({ Key }) => Key && Key?.startsWith("gallery/"),
        ).map(
          (images, index) =>
            images.Size === 0 &&
            index > 0 && (
              <Link
                key={images.ETag}
                href={`/school/gallery/${images.Key?.slice(8)}`}
                // underline="hover"

                className="mt-4 text-center"
                as={NextLink}
              >
                <Card className="max-w-lg shadow-2xl">
                  <CardHeader className="items-center">
                    {/* {console.log("We are inside the main page", images.Key)} */}

                    <GalleryCard imageKey={images.Key} />
                  </CardHeader>
                  <CardBody className="my-2 grid pt-3">
                    <h1 className=" text-center text-xl font-bold">
                      {images.Key?.slice(8).replace("/", " ").toUpperCase()}
                    </h1>
                    <Link
                      key={images.ETag}
                      href={`/school/gallery/${images.Key?.slice(8)}`}
                      underline="hover"
                      className="mt-4 text-center"
                      as={NextLink}
                    >
                      View all images --{">"}
                    </Link>
                  </CardBody>
                </Card>
              </Link>
            ),
        )}
      </div>
    </ArticlePage>
  );
};

export default Gallery;
