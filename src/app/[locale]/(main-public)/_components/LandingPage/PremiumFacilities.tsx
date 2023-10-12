"use client";
import HeroCarouselThree from "../PremiumCarousel";
import HeroCarousel from "../HeroCarousel";

export default function PremiumFacilities() {
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