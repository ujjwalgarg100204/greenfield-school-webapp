import SectionHeading from "@/components/ui/SectionHeading";
import { getScopedI18n } from "@/locales/server";
import type { FC } from "react";
import ArticlePage from "../../_components/ArticlePage";

const MissionAndVisionPage: FC = async () => {
  const t = await getScopedI18n("Pages.school.sub-links.pledge");

  return (
    <ArticlePage linkType="school" selected={{ translationKey: "pledge" }}>
      <SectionHeading>{t("title")}</SectionHeading>
      <div className="space-y-4">
        <p className="text-justify">{t("content.para-1")}</p>
        <p className="text-justify">{t("content.para-2")}</p>
      </div>
    </ArticlePage>
  );
};

export default MissionAndVisionPage;
