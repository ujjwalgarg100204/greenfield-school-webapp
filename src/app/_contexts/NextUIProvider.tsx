"use client";

import type { FC, ReactNode } from "react";

import { NextUIProvider as NextProvider } from "@nextui-org/react";
import { useRouter } from "next/navigation";

type Props = { children: ReactNode };

const NextUIProvider: FC<Props> = ({ children }) => {
    const router = useRouter();

    return (
        <NextProvider navigate={router.push.bind(null)}>
            {children}
        </NextProvider>
    );
};

export default NextUIProvider;
