/* eslint-disable @next/next/no-img-element */
"use client";

import { Carousel } from "flowbite-react";
import { useEffect, useState } from "react";
import HeroCarouselThree from "../HeroCarouselThree";
import HeroCarousel from "../HeroCarousel";

export default function Page6() {
  return (
    <section className="m-5 my-10 rounded-xl bg-slate-100 md:m-10">
      <section>
        <h1 className="my-4 p-3 text-3xl font-bold md:text-3xl">
          Premium Facilities
        </h1>
      </section>
      <section className="md:hidden">
        <HeroCarousel />
      </section>

      <section className="hidden md:block">
        <HeroCarouselThree />
      </section>
    </section>
  );
}
