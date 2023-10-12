"use client";

import { Card, CardHeader, Image } from "@nextui-org/react";

import NextImage from "next/image";
import type { FC } from "react";
import { v4 as uuid } from "uuid";

const photoGalleryCards = [
  {
    heading: "What to watch",
    subHeading: "Stream the Acme event",
    image: {
      url: "https://picsum.photos/id/1025/1920/1080",
      alt: "adorable dog",
    },
  },
  {
    heading: "Plant a tree",
    subHeading: "Contribute to the planet",
    image: {
      url: "https://images.pexels.com/photos/5212344/pexels-photo-5212344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "boy studying",
    },
  },
  {
    heading: "Supercharged",
    subHeading: "Creates beauty like a beast",
    image: {
      url: "https://images.pexels.com/photos/3494806/pexels-photo-3494806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "students in classroom",
    },
  },
  {
    heading: "Super-duper-charged",
    subHeading: "Creates beauty like a beast",
    image: {
      url: "https://images.pexels.com/photos/3494806/pexels-photo-3494806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      alt: "students in classroom",
    },
  },
];

const PhotoGallery: FC = () => {
  return (
    <section className="space-y-12 rounded-xl bg-slate-100 p-8 md:p-10">
      <header>
        <h1 className="text-3xl font-bold md:text-4xl">Photo Gallery</h1>
      </header>
      <div className="grid max-w-full grid-rows-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {photoGalleryCards.map(({ heading, image, subHeading }) => (
          <Card key={heading} className="group h-[300px] w-full">
            <CardHeader className="absolute top-1/2 z-10 w-full -translate-y-1/2 flex-col items-start text-center">
              <p className="w-full text-center text-tiny font-bold uppercase text-white/60">
                {heading}
              </p>
              <h4 className="w-full text-center text-lg font-bold text-slate-50 lg:font-medium">
                {subHeading}
              </h4>
            </CardHeader>
            <Image
              removeWrapper
              as={NextImage}
              key={uuid()}
              src={image.url}
              alt={image.url}
              className="z-0 object-cover object-top brightness-[.4] transition-all duration-500 group-hover:blur-md"
              quality={95}
              fill
            />
            ,
          </Card>
        ))}
      </div>
    </section>
  );
};

export default PhotoGallery;
