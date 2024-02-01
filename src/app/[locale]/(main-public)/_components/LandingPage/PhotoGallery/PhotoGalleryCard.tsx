import { Card, CardHeader } from "@/src/app/_lib/next-ui";
import NextImage from "next/image";

import type Translation from "@/src/app/_locales/languages/en";
import { getScopedI18n } from "@/src/app/_locales/server";
import type { FC } from "react";

type Props = Readonly<{
    translationKey: keyof (typeof Translation)["Pages"]["home"]["sub-links"]["photo-gallery"]["content"]["cards"];
    image: {
        url: string;
        alt: string;
    };
}>;

const PhotoGalleryCard: FC<Props> = async ({ translationKey, image }) => {
    const t = await getScopedI18n(
        "Pages.home.sub-links.photo-gallery.content.cards",
    );

    return (
        <Card className="group h-[300px] w-full">
            <CardHeader className="absolute top-1/2 z-10 w-full -translate-y-1/2 flex-col items-start text-center">
                <p className="w-full text-center text-tiny font-bold uppercase text-white/60">
                    {t(`${translationKey}.heading`)}
                </p>
                <h4 className="w-full text-center text-lg font-bold text-slate-50 lg:font-medium">
                    {t(`${translationKey}.sub-heading`)}
                </h4>
            </CardHeader>
            <NextImage
                src={image.url}
                alt={image.alt}
                className="z-0 object-cover object-top brightness-[.4] transition-all duration-500 group-hover:blur-md"
                quality={95}
                fill
            />
        </Card>
    );
};

export default PhotoGalleryCard;
