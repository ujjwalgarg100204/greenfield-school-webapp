"use client";

import type { FC } from "react";
import { Accordion, AccordionItem } from "~/app/next-ui";

type Props = {
    achievements: {
        title: string;
        desc: string;
    }[];
};
const AchievementsAccordion: FC<Props> = ({ achievements }) => {
    return (
        <Accordion
            variant="splitted"
            defaultExpandedKeys={[achievements[0]!.title]}
        >
            {achievements.map(({ title, desc }) => (
                <AccordionItem key={title} title={title}>
                    {desc}
                </AccordionItem>
            ))}
        </Accordion>
    );
};

export default AchievementsAccordion;
