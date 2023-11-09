import { Galleryawsintegration } from "@/src/services/GalleryAWSIntegration";
import { Image } from "@lib/next-ui";
import NextImage from "next/image";
import { type FC } from "react";

type Props = {
  galleryCardImages: string;
};

const galleryIntegration = new Galleryawsintegration();

const result = galleryIntegration.ListObjects();

const GallaryImageFetching: FC<Props> = async ({ galleryCardImages }) => {
  return (
    <div className="grid grid-cols-4 gap-3 rounded-2xl shadow-xl">
      {(await result)?.Contents?.filter(
        ({ Key }) => Key?.startsWith(`gallery/${galleryCardImages}`),
      ).map(
        async images =>
          images.Size != undefined &&
          images.Size > 0 && (
            <div key={images.ETag}>
              <Image
                key={images.ETag}
                isBlurred
                src={await galleryIntegration.GetObjectUrl(`${images.Key}`)}
                alt="image"
                height={1000}
                width={500}
                quality={30}
                priority
                as={NextImage}
              />
            </div>
          ),
      )}
    </div>
  );
};

export default GallaryImageFetching;
