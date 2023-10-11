"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import {
  CarouselProps,
  Carousel as ReactResponsiveCarousel,
} from "react-responsive-carousel";

const Carousel = ({ children, ...props }: Partial<CarouselProps>) => {
  return (
    <ReactResponsiveCarousel {...props}>{children}</ReactResponsiveCarousel>
  );
};

export default Carousel;
