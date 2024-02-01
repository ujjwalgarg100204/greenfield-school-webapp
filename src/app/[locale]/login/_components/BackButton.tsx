"use client";

import { Button } from "@/src/app/_lib/next-ui";
import { useRouter } from "next/navigation";
import type { FC } from "react";
import { BiArrowBack } from "react-icons/bi";

const BackButton: FC = () => {
    const router = useRouter();
    const clickHandler = (): void => {
        router.back();
    };

    return (
        <Button variant="light" isIconOnly onClick={clickHandler} size="sm">
            <BiArrowBack className="h-5 w-5 text-foreground md:h-7 md:w-7" />
        </Button>
    );
};

export default BackButton;
