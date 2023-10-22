import SectionHeading from "@/components/ui/SectionHeading";
import { getScopedI18n } from "@/locales/server";
import type { NextPageProps } from "@/types";
import { setStaticParamsLocale } from "next-international/server";
import type { FC } from "react";
import ArticlePage from "../../_components/ArticlePage";

const CodeOfConductPage: FC<NextPageProps> = async ({ params: { locale } }) => {
  setStaticParamsLocale(locale);
  const t = await getScopedI18n("Pages.student.sub-links.cc.content");

  return (
    <ArticlePage linkType="student" selected={{ translationKey: "cc" }}>
      <SectionHeading>{t("heading")}</SectionHeading>
      <ul className="list-disc space-y-6">
        <li className="text-justify">{t("para-1")}</li>
        <li className="text-justify">{t("para-2")}</li>
        <li className="text-justify">{t("para-3")}</li>
        <li className="text-justify">{t("para-4")}</li>
        <li className="text-justify">{t("para-5")}</li>
        <li className="text-justify">{t("para-6")}</li>
        <li className="text-justify">{t("para-7")}</li>
        <li className="text-justify">{t("para-8")}</li>
      </ul>
    </ArticlePage>
  );
};

export default CodeOfConductPage;
