import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@lib/next-ui";

import GreenfieldLogo from "@/public/images/logo.png";
import LanguageSwitcher from "@/src/components/ui/LanguageSwitcher";
import { getScopedI18n } from "@/src/locales/server";
import Image from "next/image";
import NextLink from "next/link";
import type { FC } from "react";
import PrimaryAction from "./PrimaryAction";

const MainNavbar: FC = async () => {
  const t = await getScopedI18n("Root.main-navbar");

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
          <p className="text-primary hidden text-sm font-bold md:block md:text-xl">
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
          <PrimaryAction />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default MainNavbar;
