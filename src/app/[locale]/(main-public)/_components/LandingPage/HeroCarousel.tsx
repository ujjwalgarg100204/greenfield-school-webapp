"use client";

import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

import Carousel from "@/components/ui/Carousel";
import type { FC } from "react";
import Image from "next/image";
import mainCarosoulImage from "@/../public/images/mainCarosoulImg.png";
import mainCarosoulImage1 from "@/../public/images/mainCarosoulImg1.png";
import mainCarosoulImage2 from "@/../public/images/Screenshot_1.png";
import mainCarosoulImage3 from "@/../public/images/Screenshot_2.png";
import mainCarosoulImage4 from "@/../public/images/Screenshot_3.png";

const imagesLinks = [
  {translationKey : "first" , image : mainCarosoulImage},
  {translationKey : "second" ,image : mainCarosoulImage1},
  {translationKey : "third" ,image :mainCarosoulImage2},
  {translationKey : "fourth" ,image :mainCarosoulImage3},
  {translationKey : "fifth" ,image :mainCarosoulImage4},
]as const;

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
      {imagesLinks.map(({translationKey, image}) => (
        <div key={translationKey} className="relative h-64 sm:h-72 md:h-[35rem]">
          <Image
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
