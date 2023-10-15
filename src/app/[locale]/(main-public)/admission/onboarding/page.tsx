import AdmissionPortalImg from "../_components/AdmissionPortalImg";
import type { FC } from "react";
import type { NextPageProps } from "@/types";
import OnboardingForm from "./_components/OnboardingForm";
import SectionHeading from "@/components/ui/SectionHeading";
import { getScopedI18n } from "@/locales/server";
import { setStaticParamsLocale } from "next-international/server";

const AdmissionOnboarding: FC<NextPageProps> =async ({ params: { locale } }) => {
  setStaticParamsLocale(locale);

  const t =await getScopedI18n("Pages.admission_portal.content.onboarding")

  return (
    <div className="container mx-auto my-12 flex justify-between gap-16 px-6 lg:px-8 xl:px-12 2xl:px-16">
      <section className="w-2/3 max-w-xl flex-grow space-y-12 lg:max-w-3xl">
        <SectionHeading>{t("heading")}</SectionHeading>
        <OnboardingForm />
      </section>

      <div className="mx-auto hidden w-1/3 lg:block">
        <AdmissionPortalImg />
      </div>
    </div>
  );
};

export default AdmissionOnboarding;
