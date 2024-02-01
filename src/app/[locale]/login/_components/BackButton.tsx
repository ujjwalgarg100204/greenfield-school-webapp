"use client";

import { BiArrowBack } from "react-icons/bi";
import { Button } from "@lib/next-ui";
import type { FC } from "react";
import { useRouter } from "next/navigation";

const BackButton: FC = () => {
    const router = useRouter();
    const clickHandler = (): void => {
        router.back();
    };

    return (
        <Button variant="light" isIconOnly onClick={clickHandler} size="sm">
            <BiArrowBack className="h-4/5 w-4/5 text-foreground" />
        </Button>
    );
};

export default BackButton;
