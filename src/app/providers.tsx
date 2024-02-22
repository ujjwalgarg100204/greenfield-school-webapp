"use client";

import { type FC, type ReactNode } from "react";

import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { TRPCReactProvider } from "~/trpc/react";

type ProvidersProps = { children: ReactNode };

const Providers: FC<ProvidersProps> = ({ children }) => {
    const router = useRouter();
    return (
        <TRPCReactProvider>
            <NextUIProvider navigate={path => router.push(path)}>
                {children}
            </NextUIProvider>
        </TRPCReactProvider>
    );
};

export default Providers;
