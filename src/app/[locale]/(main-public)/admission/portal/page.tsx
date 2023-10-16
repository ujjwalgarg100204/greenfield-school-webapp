import ArticlePage from "../../_components/ArticlePage";
import { Button } from "@lib/next-ui";
import type { FC } from "react";
import NextLink from "next/link";
import type { NextPageProps } from "@/types";
import SectionHeading from "@/components/ui/SectionHeading";
import { getScopedI18n } from "@/locales/server";
import { setStaticParamsLocale } from "next-international/server";

const AdmissionPortal: FC<NextPageProps> = async ({ params: { locale } }) => {
  setStaticParamsLocale(locale);
  const t = await getScopedI18n(
    "Pages.admission.sub-links.admission-portal.sub-links.index",
  );

  return (
    <ArticlePage
      linkType="admission"
      selected={{ translationKey: "admission-portal" }}
    >
      <SectionHeading>{t("heading")}</SectionHeading>
      <div className="space-y-4">
        <p>{t("para-1")}</p>
        <p>{t("para-2")}</p>
      </div>
      <Button
        size="md"
        radius="sm"
        as={NextLink}
        color="primary"
        href="/admission/onboarding"
        className="w-full font-semibold"
      >
        {t("button-text")}
      </Button>
    </ArticlePage>
  );
};

export default AdmissionPortal;
