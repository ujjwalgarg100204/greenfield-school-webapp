"use client";

import { Button } from "@/src/app/_lib/next-ui";
import type { FC } from "react";
import { BiLeftArrow } from "react-icons/bi";

type Props = { onClick: () => void; className?: string };

const CarouselPrevBtn: FC<Props> = ({ onClick, className }) => {
    return (
        <Button
            isIconOnly
            color="secondary"
            radius="full"
            onClick={onClick}
            className={className}
        >
            <BiLeftArrow className="h-1/2 w-1/2 text-amber-950/50" />
        </Button>
    );
};

export default CarouselPrevBtn;
