// app/providers.tsx
"use client";

import TRPCProvider from "@/app/_trpc/TRPCProvider";
import { NextUIProvider } from "@nextui-org/react";
import type { FC } from "react";

const Providers: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <TRPCProvider>
      <NextUIProvider>{children}</NextUIProvider>
    </TRPCProvider>
  );
};

export default Providers;
