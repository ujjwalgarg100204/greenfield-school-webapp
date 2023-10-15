"use client";

import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

import MainCarouselImage2 from "@/../public/images/Screenshot_1.png";
import MainCarouselImage3 from "@/../public/images/Screenshot_2.png";
import MainCarouselImage4 from "@/../public/images/Screenshot_3.png";
import MainCarouselImage from "@/../public/images/mainCarosoulImg.png";
import MainCarouselImage1 from "@/../public/images/mainCarosoulImg1.png";
import Carousel from "@/components/ui/Carousel";
import NextImage from "next/image";
import type { FC } from "react";
import { v4 as uuid } from "uuid";

const imagesLinks = [
  MainCarouselImage,
  MainCarouselImage1,
  MainCarouselImage2,
  MainCarouselImage3,
  MainCarouselImage4,
] as const;

const HeroCarousel: FC = () => {
  return (
    <Carousel
      showArrows
      showIndicators
      infiniteLoop
      swipeable
      autoPlay
      emulateTouch
      showThumbs={false}
      showStatus={false}
      className="group"
      renderArrowNext={clickHandler => (
        <button
          onClick={clickHandler}
          className="absolute right-0 top-0 z-10 flex h-full items-center justify-center rounded-l-sm bg-black/20 px-2 transition md:px-6 md:opacity-0 md:group-hover:opacity-100"
        >
          <BiRightArrow className="h-4 w-4 text-white/80 md:h-6 md:w-6" />
        </button>
      )}
      renderArrowPrev={clickHandler => (
        <button
          onClick={clickHandler}
          className="absolute left-0 top-0 z-10 flex h-full items-center justify-center rounded-r-sm bg-black/20 px-2 transition md:px-6 md:opacity-0 md:group-hover:opacity-100"
        >
          <BiLeftArrow className="h-4 w-4 text-white/80 md:h-6 md:w-6" />
        </button>
      )}
    >
      {imagesLinks.map(image => (
        <div key={uuid()} className="relative h-64 sm:h-72 md:h-[26rem]">
          <NextImage
            src={image}
            alt="bear"
            className="object-cover object-top"
            quality={95}
            fill
            priority
          />
        </div>
      ))}
    </Carousel>
  );
};

export default HeroCarousel;
