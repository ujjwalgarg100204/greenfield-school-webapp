"use client";

import { useEffect, useState } from "react";

import { Button } from "@nextui-org/react";
import Link from "next/link";

const AdmissionButton = () => {
    const [variant, setVariant] = useState<"solid" | "light">("solid");

    useEffect(() => {
        const timeout = setTimeout(
            () =>
                setVariant(prev => {
                    if (prev === "solid") return "light";
                    else return "solid";
                }),
            500,
        );
        return () => {
            clearTimeout(timeout);
        };
    }, [variant]);

    return (
        <>
            <Button
                as={Link}
                href="/admission"
                variant={variant}
                color="primary"
                className="hidden font-semibold sm:flex"
            >
                Admission
            </Button>
            <Button
                as={Link}
                href="/admission"
                variant={variant}
                color="primary"
                size="sm"
                className="font-semibold sm:hidden"
            >
                Admission
            </Button>
        </>
    );
};

export default AdmissionButton;
