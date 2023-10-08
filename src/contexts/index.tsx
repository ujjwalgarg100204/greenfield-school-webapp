// app/providers.tsx
"use client";

import TRPCProvider from "@/app/_trpc/TRPCProvider";
import { NextUIProvider } from "@nextui-org/react";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <TRPCProvider>
      <NextUIProvider>{children}</NextUIProvider>
    </TRPCProvider>
  );
}
