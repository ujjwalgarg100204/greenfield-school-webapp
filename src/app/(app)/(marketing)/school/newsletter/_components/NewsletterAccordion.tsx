"use client";

import type { FC } from "react";
import DownloadablePdfCard from "~/app/_components/DownloadablePdfCard";
import { Accordion, AccordionItem } from "~/app/next-ui";

type Props = {
    newsletters: {
        category: string;
        letters: { title: string; link: string }[];
    }[];
};
const NewsletterAccordion: FC<Props> = ({ newsletters }) => {
    return (
        <Accordion
            variant="splitted"
            selectionMode="multiple"
            defaultExpandedKeys={[newsletters[0]!.category]}
        >
            {newsletters.map(({ category, letters }) => (
                <AccordionItem key={category} title={`Newsletter ${category}`}>
                    <div className="flex flex-wrap justify-center gap-4 md:justify-start">
                        {letters.map(letter => (
                            <DownloadablePdfCard
                                {...letter}
                                key={letter.title}
                            />
                        ))}
                    </div>
                </AccordionItem>
            ))}
        </Accordion>
    );
};

export default NewsletterAccordion;
