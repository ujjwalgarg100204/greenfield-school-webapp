"use client";

import { Accordion, AccordionItem } from "@/src/app/_lib/next-ui";

import type { FC } from "react";
import UniformList from "./UniformList";
import { uniforms } from "../data";

const UniformAccordion: FC = () => {
    return (
        <Accordion
            defaultExpandedKeys={["nursery"]}
            variant="splitted"
            selectionMode="multiple"
        >
            {Object.entries(uniforms).map(([key, value]) => (
                <AccordionItem key={key} title={key.toUpperCase()}>
                    <UniformList
                        uniformData={value.uniform}
                        uniformImages={value.images}
                    />
                </AccordionItem>
            ))}
        </Accordion>
    );
};

export default UniformAccordion;
