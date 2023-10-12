import type { FC } from "react";
import PremiumFacilitiesCarousel from "./PremiumFacilitiesCarousel";

const PremiumFacilities: FC = () => {
  return (
    <section className="space-y-8 rounded-xl bg-slate-100 p-8 md:p-10">
      <h3 className="text-3xl font-bold md:text-4xl">Premium Facilities</h3>
      <PremiumFacilitiesCarousel />
    </section>
  );
};

export default PremiumFacilities;
