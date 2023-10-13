import { Card, CardBody, CardHeader, Image } from "@lib/next-ui";

import NextImage from "next/image";
import type { FC } from "react";

const CarouselCard: FC<{ imgUrl: string }> = ({ imgUrl }) => {
  return (
    <Card className="m-4 py-4">
      <CardHeader className="flex-col items-start px-4 pb-0 pt-2">
        <p className="text-tiny font-bold uppercase">Daily Mix</p>
        <small className="text-default-500">12 Tracks</small>
        <h4 className="text-large font-bold">Frontend Radio</h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          as={NextImage}
          alt="Card background"
          className="rounded-xl object-cover"
          src={imgUrl}
          height={270}
          width={270}
        />
      </CardBody>
    </Card>
  );
};

export default CarouselCard;
