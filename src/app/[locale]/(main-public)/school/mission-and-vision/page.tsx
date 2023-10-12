import SectionHeading from "@/components/ui/SectionHeading";
import { useTranslations } from "next-intl";
import type { FC } from "react";
import SideNavbar from "../../_components/Navbar/SideNavbar";

const MissionAndVisionPage: FC = () => {
  const t = useTranslations("Pages.school.sub-links.mission");
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
        <SideNavbar
          linkType="school"
          selected={{ translationKey: "mission" }}
        />
      </div>
    </div>
  );
};

export default MissionAndVisionPage;
