"use client";

import { useEffect, useState } from "react";

import Carousel from "@/components/ui/Carousel";
import useResponsiveScreen from "@/hooks/useResponsiveScreen";
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

const PremiumFacilitiesCarousel: FC = () => {
  const screenSize = useResponsiveScreen();
  const [centerSlidePercentage, setCenterSlidePercentage] = useState(100);
  const [currSlideIndex, setCurrSlideIndex] = useState(0);

  useEffect((): void => {
    let percentage: number;
    switch (screenSize) {
      case "sm":
        percentage = 100;
        break;
      case "md":
        percentage = 70;
        break;
      case "lg":
        percentage = 50;
        break;
      default:
        percentage = 30;
    }
    setCenterSlidePercentage(percentage);
  }, [screenSize]);

  const handleSlideChange = (index: number): void => {
    setCurrSlideIndex(index);
  };

  const handlePrevSlide = (): void => {
    setCurrSlideIndex(prev =>
      prev - 1 === 0 ? premiumFacilitiesCards.length - 1 : prev - 1,
    );
  };

  const handleNextSlide = (): void => {
    setCurrSlideIndex(prev => (prev + 1) % premiumFacilitiesCards.length);
  };

  return (
    <div className="flex flex-col items-center justify-between gap-0 sm:flex-row">
      <CarouselPrevBtn onClick={handlePrevSlide} className="hidden sm:flex" />
      <Carousel
        onChange={handleSlideChange}
        selectedItem={currSlideIndex}
        autoPlay
        swipeable
        transitionTime={200}
        className="w-full sm:w-[80%] lg:w-[90%]"
        centerSlidePercentage={centerSlidePercentage}
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        useKeyboardArrows
        emulateTouch
        centerMode
        infiniteLoop
      >
        {premiumFacilitiesCards.map(premiumFacility => (
          <CarouselCard
            key={premiumFacility.translationKey}
            {...premiumFacility}
          />
        ))}
      </Carousel>
      <CarouselNextBtn onClick={handleNextSlide} className="hidden sm:flex" />
      <div className="space-x-16 sm:hidden">
        <CarouselPrevBtn onClick={handlePrevSlide} />
        <CarouselNextBtn onClick={handleNextSlide} />
      </div>
    </div>
  );
};

export default PremiumFacilitiesCarousel;
