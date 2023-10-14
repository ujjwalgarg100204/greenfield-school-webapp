import { Card, CardHeader, Image } from "@lib/next-ui";

import type { FC } from "react";
import NextImage from "next/image";
import { getScopedI18n } from "@/locales/server";
import { v4 as uuid } from "uuid";

const photoGalleryCards = [
  {
    translationKey: "first",
    // heading: "What to watch",
    // subHeading: "Stream the Acme event",
    image: {
      url: "https://picsum.photos/id/1025/1920/1080",
      alt: "adorable dog",
    },
  },
  {
    translationKey: "second",
    // heading: "Plant a tree",
    // subHeading: "Contribute to the planet",
    image: {
      url: "https://images.pexels.com/photos/5212344/pexels-photo-5212344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "boy studying",
    },
  },
  {
    translationKey: "third",
    // heading: "Supercharged",
    // subHeading: "Creates beauty like a beast",
    image: {
      url: "https://images.pexels.com/photos/3494806/pexels-photo-3494806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "students in classroom",
    },
  },
  {
    translationKey: "forth",
    // heading: "Super-duper-charged",
    // subHeading: "Creates beauty like a beast",
    image: {
      url: "https://images.pexels.com/photos/3494806/pexels-photo-3494806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "students in classroom",
    },
  },
]as const ;

const PhotoGallery: FC = async () => {
  const t = await getScopedI18n("Root.LandingPage.photogallery");
  return (
    <section className="space-y-12 rounded-xl bg-slate-100 p-8 md:p-10">
      <header>
        <h1 className="text-3xl font-bold md:text-4xl">{t("title")}</h1>
      </header>
      <div className="grid max-w-full grid-rows-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {photoGalleryCards.map(({ translationKey , image } ) => (
          <Card key={translationKey} className="group h-[300px] w-full">
            <CardHeader className="absolute top-1/2 z-10 w-full -translate-y-1/2 flex-col items-start text-center">
              <p className="w-full text-center text-tiny font-bold uppercase text-white/60">
                {t(`cardElements.${translationKey}.heading`)}
              </p>
              <h4 className="w-full text-center text-lg font-bold text-slate-50 lg:font-medium">
                {t(`cardElements.${translationKey}.subHeading`)}
              </h4>
            </CardHeader>
            <Image
              removeWrapper
              as={NextImage}
              key={uuid()}
              src={image.url}
              alt={image.alt}
              className="z-0 object-cover object-top brightness-[.4] transition-all duration-500 group-hover:blur-md"
              quality={95}
              fill
            />
          </Card>
        ))}
      </div>
    </section>
  );
};

export default PhotoGallery;
