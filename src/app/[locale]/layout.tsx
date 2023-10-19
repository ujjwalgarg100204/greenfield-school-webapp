import "../globals.css";

import type { FC } from "react";
import { I18nProviderClient } from "@/locales/client";
import type { Metadata } from "next";
import NextAuthProvider from "@/contexts/NextAuthProvider";
import Providers from "@/contexts";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { getStaticParams } from "@/locales/server";
import localFont from "next/font/local";
import { setStaticParamsLocale } from "next-international/server";

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
  const session = await getServerSession(authOptions);

  return (
    <html lang={locale} className="scroll-smooth">
      <body className={`${satoshiFont.variable} font-satoshi`}>
        <NextAuthProvider session={session}>
          <I18nProviderClient locale={locale}>
            <Providers>{children}</Providers> 
          </I18nProviderClient>
        </NextAuthProvider>
      </body>
    </html>
  );
};

export default LocaleLayout;
