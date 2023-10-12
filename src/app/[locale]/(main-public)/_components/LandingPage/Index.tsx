
import React from "react";
import Page1 from "./MainCarosal";
import Page2 from "./AboutUs";
import Page3 from "./PhotoGallery";
import Page4 from "./KeyCharacteristics";
import Page5 from "./AdmissionOpen";
import Page6 from "./PremiumFacilities";

const Index = () => {
  return (
    <>
      <section>
        <Page1 />
      </section>

      <section>
        <Page2 />
      </section>

      <section>
        <Page3 />
      </section>

      <section>
        <Page4 />
      </section>

      <section>
        <Page5 />
      </section>

      <section>
        <Page6 />
      </section>
    </>
  );
};

export default Index;
