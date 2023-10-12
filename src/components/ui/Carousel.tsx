"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css";

import type { FC } from "react";
import type { CarouselProps } from "react-responsive-carousel";
import { Carousel as ReactResponsiveCarousel } from "react-responsive-carousel";

const Carousel: FC<Partial<CarouselProps>> = ({ children, ...props }) => {
  return (
    <ReactResponsiveCarousel {...props}>{children}</ReactResponsiveCarousel>
  );
};

export default Carousel;
