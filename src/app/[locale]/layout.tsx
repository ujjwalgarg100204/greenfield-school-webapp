import "../globals.css";

import Providers from "@/contexts";
import NextAuthSessionProvider from "@/contexts/NextAuthSessionProvider";
import { I18nProviderClient } from "@/locales/client";
import { getStaticParams } from "@/locales/server";
import type { Metadata } from "next";
import { setStaticParamsLocale } from "next-international/server";
import localFont from "next/font/local";
import type { FC } from "react";
import React from "react";
import { auth } from "../api/auth/[...nextauth]/route";

export const metadata: Metadata = {
  title: "Greenfield School",
  description: "Generated by create next app",
};

const satoshiFont = localFont({
  src: [
    {
      path: "../../../public/fonts/Satoshi-Variable.ttf",
      style: "normal",
    },
    {
      path: "../../../public/fonts/Satoshi-VariableItalic.ttf",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-satoshi",
});

export const generateStaticParams = (): ReturnType<typeof getStaticParams> =>
  getStaticParams();

type Props = {
  params: { locale: string };
  children: React.ReactNode;
};
const LocaleLayout: FC<Props> = async ({ children, params: { locale } }) => {
  setStaticParamsLocale(locale);
  const session = await auth();

  return (
    <html lang={locale} className="scroll-smooth">
      <body className={`${satoshiFont.variable} font-satoshi`}>
        <NextAuthSessionProvider session={session}>
          <I18nProviderClient locale={locale}>
            <Providers>{children}</Providers>
          </I18nProviderClient>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
};

export default LocaleLayout;
