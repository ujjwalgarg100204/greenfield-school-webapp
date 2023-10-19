import AboutUs from "./_components/LandingPage/AboutUs";
import AdmissionOpen from "./_components/LandingPage/AdmissionOpen";
import type { FC } from "react";
import HeroCarousel from "./_components/LandingPage/HeroCarousel";
import KeyCharacteristics from "./_components/LandingPage/KeyCharacteristics";
import type { NextPageProps } from "@/types";
import PhotoGallery from "./_components/LandingPage/PhotoGallery";
import PremiumFacilities from "./_components/LandingPage/PremiumFacilities";
import SignInForm from "../login/_components/SignInForm";
import UserAuthenticated from "../login/_components/UserAuthenticated";
import { setStaticParamsLocale } from "next-international/server";
import { useSession } from "next-auth/react";

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
