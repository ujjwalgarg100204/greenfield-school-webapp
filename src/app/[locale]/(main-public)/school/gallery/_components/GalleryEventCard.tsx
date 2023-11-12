import { Card, CardBody, CardHeader, Image, Link } from "@/src/lib/next-ui";

import type { GalleryFolder } from "@prisma/client";
import NextImage from "next/image";
import type { FC } from "react";

type Props = Pick<GalleryFolder, "name" | "thumbnail" | "createdAt"> & {
  imageCount: number;
};

const GalleryEventCard: FC<Props> = ({
  name,
  createdAt,
  imageCount,
  thumbnail,
}) => {
  return (
    <Card
      className="py-4"
      as={Link}
      href={`/school/gallery/${name}`}
      isPressable
    >
      <CardHeader className="flex-col items-start px-4 pb-0 pt-2">
        <p className="text-tiny font-bold uppercase">
          Held on{" "}
          {createdAt.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
          })}
        </p>
        <small className="text-default-500">
          <strong className="font-bold underline">{imageCount}</strong> Image
          {imageCount > 1 ? "s" : ""}
        </small>
        <h4 className="text-large font-bold capitalize">
          {name.replaceAll("-", " ")}
        </h4>
      </CardHeader>
      <CardBody className="py-2">
        <Image
          alt={""}
          className="h-56 w-full rounded-xl object-cover object-center"
          src={thumbnail}
          width={800}
          height={600}
          as={NextImage}
        />
      </CardBody>
    </Card>
  );
};

export default GalleryEventCard;
