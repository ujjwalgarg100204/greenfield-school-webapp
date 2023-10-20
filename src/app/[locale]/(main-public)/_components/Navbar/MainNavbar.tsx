"use client";

import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@lib/next-ui";

import GreenfieldLogo from "@/../public/images/logo.png";
import { useScopedI18n } from "@/locales/client";
import LanguageSwitcher from "@components/ui/LanguageSwither";
import { useSession } from "next-auth/react";
import Image from "next/image";
import NextLink from "next/link";
import type { FC } from "react";
import AccountMenu from "./AccountMenu";

const MainNavbar: FC = () => {
  const t = useScopedI18n("Root.main-navbar");
  const { status, data } = useSession();

  return (
    <Navbar position="static" maxWidth="full">
      <NavbarBrand>
        <NextLink href="/" className="flex h-full w-full gap-4">
          <Image
            src={GreenfieldLogo}
            alt="Greenfield School Logo"
            quality={95}
            className="rounded-full"
            priority
          />
          <p className="hidden text-sm font-bold text-primary md:block md:text-xl">
            Greenfield School,
            <br /> Tamil Nadu
          </p>
        </NextLink>
      </NavbarBrand>

      <NavbarContent justify="end" className="gap-2 md:gap-4">
        <NavbarItem>
          <LanguageSwitcher />
        </NavbarItem>
        <NavbarItem>
          <Button
            as={NextLink}
            href="/admission/portal"
            variant="ghost"
            color="primary"
            className="hidden font-semibold sm:flex"
          >
            {t("admission-portal")}
          </Button>
          <Button
            as={NextLink}
            href="/admission/portal"
            variant="ghost"
            color="primary"
            size="sm"
            className="font-semibold sm:hidden"
          >
            {t("admission-portal")}
          </Button>
        </NavbarItem>
        <NavbarItem>
          {status === "loading" || data === null ? (
            <>
              <Button
                as={NextLink}
                href="/login"
                color="primary"
                variant="solid"
                className="font-semibold text-white sm:hidden"
                radius="sm"
                size="sm"
              >
                {t("login")}
              </Button>

              <Button
                as={NextLink}
                href="/login"
                color="primary"
                variant="solid"
                className="hidden font-semibold text-white sm:flex"
                radius="sm"
              >
                {t("login")}
              </Button>
            </>
          ) : (
            <AccountMenu />
          )}
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default MainNavbar;
