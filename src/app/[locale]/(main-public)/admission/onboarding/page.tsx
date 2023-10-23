import type { NextPageProps } from "@/src/types";
import ArticleHeading from "@components/ArticleHeading";
import { getScopedI18n } from "@locales/server";
import { setStaticParamsLocale } from "next-international/server";
import type { FC } from "react";
import AdmissionPortalImg from "../_components/AdmissionPortalImg";
import OnboardingForm from "./_components/OnboardingForm";

const AdmissionOnboarding: FC<NextPageProps> = async ({
  params: { locale },
}) => {
  setStaticParamsLocale(locale);
  const t = await getScopedI18n(
    "Pages.admission.sub-links.admission-portal.sub-links.onboarding",
  );
  return (
    <div className="container mx-auto my-12 flex justify-between gap-16 px-6 lg:px-8 xl:px-12 2xl:px-16">
      <section className="w-2/3 max-w-xl flex-grow space-y-12 lg:max-w-3xl">
        <ArticleHeading>{t("heading")}</ArticleHeading>
        <OnboardingForm />
      </section>

      <div className="mx-auto hidden w-1/3 lg:block">
        <AdmissionPortalImg />
      </div>
    </div>
  );
};

export default AdmissionOnboarding;
