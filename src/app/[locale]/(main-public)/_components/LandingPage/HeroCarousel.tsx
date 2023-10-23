"use client";

import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

import MainCarouselImage1 from "@/public/images/hero-carousel/1.png";
import MainCarouselImage2 from "@/public/images/hero-carousel/2.png";
import MainCarouselImage3 from "@/public/images/hero-carousel/3.png";
import MainCarouselImage4 from "@/public/images/hero-carousel/4.png";
import MainCarouselImage5 from "@/public/images/hero-carousel/5.png";
import Carousel from "@ui/Carousel";
import NextImage from "next/image";
import type { FC } from "react";
import { v4 as uuid } from "uuid";

const imagesLinks = [
  MainCarouselImage5,
  MainCarouselImage1,
  MainCarouselImage2,
  MainCarouselImage3,
  MainCarouselImage4,
] as const;

const HeroCarousel: FC = () => {
  return (
    <Carousel
      autoPlay
      swipeable
      showArrows
      emulateTouch
      infiniteLoop
      showIndicators
      showThumbs={false}
      showStatus={false}
      className="group"
      renderArrowNext={(clickHandler) => (
        <button
          onClick={clickHandler}
          className="absolute right-0 top-0 z-10 flex h-full items-center justify-center rounded-l-sm bg-black/20 px-2 transition md:px-6 md:opacity-0 md:group-hover:opacity-100"
        >
          <BiRightArrow className="h-4 w-4 text-white/80 md:h-6 md:w-6" />
        </button>
      )}
      renderArrowPrev={(clickHandler) => (
        <button
          onClick={clickHandler}
          className="absolute left-0 top-0 z-10 flex h-full items-center justify-center rounded-r-sm bg-black/20 px-2 transition md:px-6 md:opacity-0 md:group-hover:opacity-100"
        >
          <BiLeftArrow className="h-4 w-4 text-white/80 md:h-6 md:w-6" />
        </button>
      )}
    >
      {imagesLinks.map((image) => (
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
