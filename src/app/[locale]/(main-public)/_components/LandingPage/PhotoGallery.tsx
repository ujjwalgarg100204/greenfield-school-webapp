"use client"
import Image from "next/image";
import { v4 as uuid } from "uuid";
import { Card, CardHeader } from "@nextui-org/react";

const PhotoGallery = () => {
  return (
    <section className=" m-4 my-20 rounded-xl bg-slate-100  md:m-9 md:my-20">
      <header>
        <h1 className="my-4 p-3 text-3xl font-bold md:text-3xl">
          Photo Gallery
        </h1>
      </header>
      <div className="grid max-w-full grid-rows-1 gap-5 px-8 md:grid-cols-5">
        <Card className="col-span-5 h-[300px]  sm:col-span-1">
          <CardHeader className="absolute top-1 z-10 flex-col !items-start">
            <p className="text-tiny font-bold uppercase text-white/60">
              What to watch
            </p>
            <h4 className="text-large font-medium text-white">
              Stream the Acme event
            </h4>
          </CardHeader>
          <Image
            key={uuid()}
            src="https://picsum.photos/id/1025/1920/1080"
            alt="adorable dob"
            className="object-cover object-top"
            quality={95}
            fill
            priority
          />
          ,
        </Card>
        <Card className="col-span-5 h-[300px] sm:col-span-1">
          <CardHeader className="absolute top-1 z-10 flex-col !items-start">
            <p className="text-tiny font-bold uppercase text-white/60">
              Plant a tree
            </p>
            <h4 className="text-large font-medium text-white">
              Contribute to the planet
            </h4>
          </CardHeader>
          <Image
            alt="Card background"
            quality={95}
            fill
            priority
            className="object-cover object-top hover:blur-sm"
            src="https://images.pexels.com/photos/5212344/pexels-photo-5212344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </Card>
        <Card className="col-span-5 h-[300px] sm:col-span-1">
          <CardHeader className="absolute top-1 z-10 flex-col !items-start">
            <p className="text-tiny font-bold uppercase text-white/60">
              Supercharged
            </p>
            <h4 className="text-large font-medium text-white">
              Creates beauty like a beast
            </h4>
          </CardHeader>
          <Image
            key={uuid()}
            quality={95}
            fill
            priority
            alt="Card background"
            className="object-cover object-top  hover:blur-sm"
            src="https://images.pexels.com/photos/5211446/pexels-photo-5211446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </Card>

        <Card className="col-span-5 h-[300px] sm:col-span-1">
          <CardHeader className="absolute top-1 z-10 flex-col !items-start">
            <p className="text-tiny font-bold uppercase text-white/60">
              Supercharged
            </p>
            <h4 className="text-large font-medium text-white">
              Creates beauty like a beast
            </h4>
          </CardHeader>
          <Image
            quality={95}
            fill
            priority
            alt="Card background"
            className="object-cover object-top hover:blur-sm"
            src="https://images.pexels.com/photos/3494806/pexels-photo-3494806.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </Card>

        <Card className="col-span-5 h-[300px] sm:col-span-1">
          <CardHeader className="absolute top-1 z-10 flex-col !items-start">
            <p className="text-tiny font-bold uppercase text-white/60">
              Supercharged
            </p>
            <h4 className="text-large font-medium text-white">
              Creates beauty like a beast
            </h4>
          </CardHeader>
          <Image
            quality={95}
            fill
            priority
            alt="Card background"
            className="object-cover object-top hover:blur-sm"
            src="https://images.pexels.com/photos/3747512/pexels-photo-3747512.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          />
        </Card>
      </div>
    </section>
  );
};

export default PhotoGallery;
