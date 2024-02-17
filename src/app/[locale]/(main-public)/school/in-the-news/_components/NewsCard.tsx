import {
    Card,
    CardBody,
    CardHeader,
    Image,
    Link,
} from "@/src/app/_lib/next-ui";

import type { FC } from "react";
import NextImage from "next/image";

type Props = {
    image: {
        src: string;
        alt: string;
    };
    categories: string[];
    heading: string;
    date: string;
};

const NewsCard: FC<Props> = ({ image, categories, heading, date }) => {
    return (
        <Card className="max-w-sm border-none shadow-none">
            <CardHeader className="">
                {/* eslint-disable-next-line jsx-a11y/alt-text */}
                <Image
                    {...image}
                    className="h-full w-full object-cover"
                    radius="sm"
                    as={NextImage}
                    width={500}
                    height={500}
                />
            </CardHeader>
            <CardBody className="grid pt-0">
                <ul className="col-span-2 flex flex-wrap gap-x-4">
                    {categories.map((category, i) => (
                        <li
                            key={category}
                            className="text-xs font-bold uppercase tracking-wide text-primary"
                        >
                            {category}
                            {i === categories.length - 1 ? "" : ","}
                        </li>
                    ))}
                </ul>
                <h3 className="col-span-2 mt-2 text-lg font-bold leading-tight">
                    {heading}
                </h3>
                <time className="mt-4 text-sm font-bold italic text-slate-400">
                    {date}
                </time>
                <Link
                    href="#"
                    underline="hover"
                    className="mt-4 justify-self-end"
                >
                    Read More
                </Link>
            </CardBody>
        </Card>
    );
};
export default NewsCard;
