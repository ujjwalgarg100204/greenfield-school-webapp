"use client";

import { Accordion, AccordionItem } from "@/lib/next-ui";

import type { FC } from "react";

type Props = {
  achievements: Array<{
    title: string;
    content: string;
  }>;
};

const AchievementsAccordion: FC<Props> = ({ achievements }) => {
  return (
    <Accordion variant="splitted" defaultExpandedKeys={[achievements[0].title]}>
      {achievements.map(({ title, content }) => (
        <AccordionItem key={title} title={title}>
          {content}
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AchievementsAccordion;
