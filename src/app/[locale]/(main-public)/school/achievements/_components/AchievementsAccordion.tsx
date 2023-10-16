"use client";

import { Accordion, AccordionItem } from "@/lib/next-ui";

import { useScopedI18n } from "@/locales/client";
import type { FC } from "react";

const achievementsDataTranslationKeys = [1, 2, 3, 4] as const;

const AchievementsAccordion: FC = () => {
  const t = useScopedI18n(
    "Pages.school.sub-links.achievements.content.accordions",
  );

  return (
    <Accordion
      variant="splitted"
      defaultExpandedKeys={[achievementsDataTranslationKeys[0]]}
    >
      {achievementsDataTranslationKeys.map(translationKey => (
        <AccordionItem
          key={translationKey}
          title={t(`${translationKey}.heading`)}
        >
          {t(`${translationKey}.desc`)}
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AchievementsAccordion;
