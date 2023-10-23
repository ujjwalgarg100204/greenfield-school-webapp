"use client";

import useResponsiveScreen, {
  type ScreenSize,
} from "@hooks/useResponsiveScreen";
import { useState } from "react";

import Carousel from "@ui/Carousel";
import type { FC } from "react";
import CarouselCard from "./CarouselCard";
import CarouselNextBtn from "./CarouselNextBtn";
import CarouselPrevBtn from "./CarouselPrevBtn";

const premiumFacilitiesCards = [
  {
    translationKey: 1,
    img: {
      url: "https://picsum.photos/id/1020/1920/1080",
      alt: "image",
    },
  },
  {
    translationKey: 2,
    img: {
      url: "https://picsum.photos/id/1025/1920/1080",
      alt: "image",
    },
  },
  {
    translationKey: 3,
    img: {
      url: "https://picsum.photos/id/642/1920/1080",
      alt: "image",
    },
  },
  {
    translationKey: 4,
    img: {
      url: "https://picsum.photos/id/743/1920/1080",
      alt: "image",
    },
  },
  {
    translationKey: 5,
    img: {
      url: "https://picsum.photos/id/1060/1920/1080",
      alt: "image",
    },
  },
  {
    translationKey: 6,
    img: {
      url: "https://picsum.photos/id/377/1920/1080",
      alt: "image",
    },
  },
  {
    translationKey: 7,
    img: {
      url: "https://picsum.photos/id/684/1920/1080",
      alt: "image",
    },
  },
] as const;

const getCarouselPercentage = (screenSize: ScreenSize) => {
  switch (screenSize) {
    case "sm":
      return 100;
    case "md":
      return 70;
    case "lg":
      return 50;
    default:
      return 30;
  }
};

const PremiumFacilitiesCarousel: FC = () => {
  const screenSize = useResponsiveScreen();
  const [currSlideIndex, setCurrSlideIndex] = useState(0);
  const centerSlidePercentage = getCarouselPercentage(screenSize);

  const handleSlideChange = (index: number) => {
    setCurrSlideIndex(index);
  };

  const handlePrevSlide = () => {
    setCurrSlideIndex((prev) =>
      prev - 1 === 0 ? premiumFacilitiesCards.length - 1 : prev - 1,
    );
  };

  const handleNextSlide = () => {
    setCurrSlideIndex((prev) => (prev + 1) % premiumFacilitiesCards.length);
  };

  return (
    <div className="flex flex-col items-center justify-between gap-0 sm:flex-row">
      <CarouselPrevBtn className="hidden sm:flex" onClick={handlePrevSlide} />
      <Carousel
        autoPlay
        swipeable
        centerMode
        infiniteLoop
        emulateTouch
        useKeyboardArrows
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        transitionTime={200}
        showIndicators={false}
        onChange={handleSlideChange}
        selectedItem={currSlideIndex}
        className="w-full sm:w-[80%] lg:w-[90%]"
        centerSlidePercentage={centerSlidePercentage}
      >
        {premiumFacilitiesCards.map((premiumFacility) => (
          <CarouselCard
            key={premiumFacility.translationKey}
            {...premiumFacility}
          />
        ))}
      </Carousel>
      <CarouselNextBtn className="hidden sm:flex" onClick={handleNextSlide} />
      <div className="space-x-16 sm:hidden">
        <CarouselPrevBtn onClick={handlePrevSlide} />
        <CarouselNextBtn onClick={handleNextSlide} />
      </div>
    </div>
  );
};

export default PremiumFacilitiesCarousel;
