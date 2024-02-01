"use client";

import { Accordion, AccordionItem } from "@/src/app/_lib/next-ui";

import DownloadablePdfCard from "@/src/app/_components/DownloadablePdfCard";
import type { FC } from "react";

const newsletters = [
    {
        category: "2022 - 23",
        letters: [
            {
                title: "October 2022 - March 2023",
                link: "/public/newsletters/2022-23/October 2022 - March 2023.pdf",
            },
            {
                title: "April - July 2022",
                link: "/public/newsletters/2022-23/April - July 2022.pdf",
            },
        ],
    },
    {
        category: "2020 - 21",
        letters: [
            {
                title: "April - June 2021",
                link: "/public/newsletters/2020-21/April - June 2021.pdf",
            },
        ],
    },
    {
        category: "2019 - 20",
        letters: [
            {
                title: "May - November 2020",
                link: "/public/newsletters/2019-20/May - November 2020.pdf",
            },
        ],
    },
    {
        category: "2018 - 19",
        letters: [
            {
                title: "July - September 2018",
                link: "/public/newsletters/2018-19/July - September 2018.pdf",
            },
            {
                title: "April - June 2018",
                link: "/public/newsletters/2018-19/April - June 2018.pdf",
            },
        ],
    },
] as const;

const NewsletterAccordion: FC = () => {
    return (
        <Accordion
            variant="splitted"
            selectionMode="multiple"
            defaultExpandedKeys={[newsletters[0].category]}
        >
            {newsletters.map(({ category, letters }) => (
                <AccordionItem key={category} title={`Newsletter ${category}`}>
                    <div
                        role="list"
                        className="flex flex-wrap justify-center gap-4 md:justify-start"
                    >
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
