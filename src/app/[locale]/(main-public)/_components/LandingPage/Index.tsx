
import React from "react";
import MainCarosal from "./MainCarosal";
import AboutUs from "./AboutUs";
import PhotoGallery from "./PhotoGallery";
import KeyCharacteristics from "./KeyCharacteristics";
import AdmissionOpen from "./AdmissionOpen";
import PremiumFacilities from "./PremiumFacilities";

const Index = () => {
  return (
    <>
      <section>
        <MainCarosal />
      </section>

      <section>
        <AboutUs />
      </section>

      <section>
        <PhotoGallery />
      </section>

      <section>
        <KeyCharacteristics />
      </section>

      <section>
        <AdmissionOpen />
      </section>

      <section>
        <PremiumFacilities />
      </section>
    </>
  );
};

export default Index;
