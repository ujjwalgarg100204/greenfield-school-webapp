"use client";

import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

import GreenfieldLogo from "@/../public/images/logo.png";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "../../../../../components/ui/LanguageSwither";

const MainNavbar = () => {
  const t = useTranslations("Root.main-navbar");
  return (
    <Navbar position="static" maxWidth="full">
      <NavbarBrand>
        <Link href="/" className="flex h-full w-full gap-4">
          <Image
            src={GreenfieldLogo}
            alt="Greenfield School Logo"
            quality={95}
            className="rounded-full"
            priority
          />
          <p className="text-sm font-bold text-primary md:text-xl">
            Greenfield School,
            <br /> Tamil Nadu
          </p>
        </Link>
      </NavbarBrand>

      <NavbarContent justify="end" className="gap-1 md:gap-4">
        <NavbarItem>
          <LanguageSwitcher />
        </NavbarItem>
        <NavbarItem>
          <Button
            variant="ghost"
            color="primary"
            className="hidden font-semibold sm:flex"
          >
            {t("admission-portal")}
          </Button>
          <Button
            variant="ghost"
            color="primary"
            size="sm"
            className="font-semibold sm:hidden"
          >
            {t("admission-portal")}
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button
            color="primary"
            variant="solid"
            className="font-semibold text-white sm:hidden"
            radius="sm"
            size="sm"
          >
            {t("login")}
          </Button>
          <Button
            color="primary"
            variant="solid"
            className="hidden font-semibold text-white sm:flex"
            radius="sm"
          >
            {t("login")}
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default MainNavbar;
