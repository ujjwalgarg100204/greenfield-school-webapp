import type { NextPageProps } from "@/types";
import { setStaticParamsLocale } from "next-international/server";
import type { FC } from "react";
import UserAuthenticated from "../login/_components/UserAuthenticated";
import AboutUs from "./_components/LandingPage/AboutUs";
import AdmissionOpen from "./_components/LandingPage/AdmissionOpen";
import HeroCarousel from "./_components/LandingPage/HeroCarousel";
import KeyCharacteristics from "./_components/LandingPage/KeyCharacteristics";
import PhotoGallery from "./_components/LandingPage/PhotoGallery";
import PremiumFacilities from "./_components/LandingPage/PremiumFacilities";

const IndexPage: FC<NextPageProps> = ({ params: { locale } }) => {
  setStaticParamsLocale(locale);

  return (
    <main className="mb-8 text-center">
      <div className="space-y-4">
        <UserAuthenticated />
        <HeroCarousel />
        <div className="space-y-20 p-4 sm:p-6 md:p-10 lg:p-12">
          <AboutUs />
          <PhotoGallery />
          <KeyCharacteristics />
          <AdmissionOpen />
          <PremiumFacilities />
        </div>
      </div>
    </main>
  );
};

export default IndexPage;
