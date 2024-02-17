import {
    Card,
    CardBody,
    CardHeader,
    Image,
    Link,
} from "@/src/app/_lib/next-ui";

import NextImage from "next/image";
import type { FC } from "react";
import { FaImage } from "react-icons/fa6";

type Props = {
    name: string;
    imgCount: number;
    thumbnail: string | null;
    createdAt: Date;
};

const GalleryEventCard: FC<Props> = ({
    name,
    imgCount,
    thumbnail,
    createdAt,
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
                    Held in{" "}
                    {createdAt.toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                    })}
                </p>
                <small className="text-default-500">
                    <strong className="font-bold underline">{imgCount}</strong>{" "}
                    Image
                    {imgCount > 1 ? "s" : ""}
                </small>
                <h4 className="text-large font-bold capitalize">
                    {name.replaceAll("-", " ")}
                </h4>
            </CardHeader>
            <CardBody className="py-2">
                {thumbnail ? (
                    <Image
                        alt={name}
                        className="h-56 w-full rounded-xl object-cover object-center"
                        src={thumbnail}
                        width={800}
                        height={600}
                        as={NextImage}
                    />
                ) : (
                    <div className="flex h-56 w-full items-center justify-center rounded-xl bg-gray-100">
                        <FaImage className="h-10 w-10 text-gray-500" />
                    </div>
                )}
            </CardBody>
        </Card>
    );
};

export default GalleryEventCard;
