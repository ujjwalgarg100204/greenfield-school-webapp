"use client";

import "pure-react-carousel/dist/react-carousel.es.css";

import type { CarouselProviderProps } from "pure-react-carousel";
import { CarouselProvider } from "pure-react-carousel";

const Carousel = (props: CarouselProviderProps) => {
  return <CarouselProvider {...props}></CarouselProvider>;
};

export default Carousel;
