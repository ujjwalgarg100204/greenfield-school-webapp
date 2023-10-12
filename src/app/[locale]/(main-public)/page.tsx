"use client";

import type { FC } from "react";
import HeroCarousel from "./_components/HeroCarousel";

const IndexPage: FC = () => {
  return (
    <main className="mb-8 text-center">
      <HeroCarousel />
    </main>
  );
};

export default IndexPage;
