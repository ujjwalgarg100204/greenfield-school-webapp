"use client";

import { Card, CardBody, CardHeader } from "@lib/next-ui";
import NextImage, { type StaticImageData } from "next/image";

import { useScopedI18n } from "@locales/client";
import type Translation from "@locales/languages/en";
import type { FC } from "react";

type Props = {
    translationKey: keyof (typeof Translation)["Pages"]["home"]["sub-links"]["premium-facilities"]["content"]["cards"];
    img: { url: StaticImageData; alt: string };
};

const CarouselCard: FC<Props> = ({ translationKey, img }) => {
    const t = useScopedI18n(
        "Pages.home.sub-links.premium-facilities.content.cards",
    );

    return (
        <Card className="m-4 py-4">
            <CardHeader className="flex-col items-start px-4 pb-0 pt-2">
                <p className="text-tiny font-bold uppercase">
                    {t(`${translationKey}.sub-heading`)}
                </p>
                <small className="text-default-500">
                    {t(`${translationKey}.sub-heading`)}
                </small>
                <h4 className="text-large font-bold">
                    {t(`${translationKey}.heading`)}
                </h4>
            </CardHeader>
            <CardBody className="overflow-visible py-2">
                <NextImage
                    alt={img.alt}
                    className="rounded-xl object-cover"
                    src={img.url}
                    height={270}
                    width={270}
                />
            </CardBody>
        </Card>
    );
};

export default CarouselCard;
