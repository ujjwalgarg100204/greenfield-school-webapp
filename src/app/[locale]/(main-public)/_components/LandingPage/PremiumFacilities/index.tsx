import { getScopedI18n } from "@/locales/server";
import type { FC } from "react";
import PremiumFacilitiesCarousel from "./PremiumFacilitiesCarousel";

const PremiumFacilities: FC = async() => {
  const t = await getScopedI18n("Root.LandingPage.premiunFacilities")
  return (
    <section className="space-y-8 rounded-xl bg-slate-100 p-8 md:p-10">
      <h3 className="text-3xl font-bold md:text-4xl">{t("title")}</h3>
      <PremiumFacilitiesCarousel />
    </section>
  );
};

export default PremiumFacilities;
