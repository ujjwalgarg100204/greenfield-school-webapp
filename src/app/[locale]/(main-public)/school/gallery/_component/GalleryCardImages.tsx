import { Galleryawsintegration } from "@/src/services/GalleryAWSIntegration";
import { Image } from "@nextui-org/react";
import NextImage from "next/image";
import { type FC } from "react";

type Props = {
  imageKey?: string;
};
const GalleryCard: FC<Props> = async ({ imageKey }) => {
  const galleryIntegration = new Galleryawsintegration();

  const result = galleryIntegration.ListObjects();
  return (
    <div>
      {imageKey !== undefined &&
        (await result).Contents?.filter(
          ({ Key }) =>
            Key?.startsWith(
              `${imageKey}teahub.io-mountain-wallpaper-14065.png`,
            ),
        ).map(async images => (
          <div key={images.ETag}>
            <Image
              key={images.ETag}
              className="h-full w-full object-cover"
              src={await galleryIntegration.GetObjectUrl(`${images.Key}`)}
              radius="sm"
              as={NextImage}
              width={800}
              height={500}
              quality={30}
              alt="card image"
            />
          </div>
        ))}
    </div>
  );
};

export default GalleryCard;
