import type { FC } from "react";
import SectionHeading from "@/components/ui/SectionHeading";
import SideNavbar from "../../_components/Navbar/SideNavbar";
import { getScopedI18n } from "@/locales/server";
import { useScopedI18n } from "@/locales/client";

const MissionAndVisionPage: FC = async () => {
  const t = await getScopedI18n("Pages.school.sub-links.pledge");

  return (
    <div className="container mx-auto my-12 flex justify-between gap-16 px-6 lg:px-8 xl:px-12 2xl:px-16">
      <div className="w-2/3 flex-grow space-y-12">
        <section className="max-w-xl space-y-4 lg:max-w-3xl">
          <SectionHeading>{t("title")}</SectionHeading>
          <div className="space-y-4">
            <p className="text-justify">{t("content.para-1")}</p>
            <p className="text-justify">{t("content.para-2")}</p>
          </div>
        </section>
      </div>

      <div className="hidden w-1/5 lg:block">
        <SideNavbar linkType="school" selected={{ translationKey: "pledge" }} />
      </div>
    </div>
  );
};

export default MissionAndVisionPage;
