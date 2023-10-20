import {
  Button,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@lib/next-ui";

import GreenfieldLogo from "@/../public/images/logo.png";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getScopedI18n } from "@/locales/server";
import LanguageSwitcher from "@components/ui/LanguageSwither";
import { getServerSession } from "next-auth";
import Image from "next/image";
import NextLink from "next/link";
import type { FC } from "react";

const MainNavbar: FC = async () => {
  const t = await getScopedI18n("Root.main-navbar");

  const session = await getServerSession(authOptions);

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

      <NavbarContent justify="end" className="gap-1 md:gap-4">
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
          {session?.user?.email ? (
            <>
              <Button
                as={NextLink}
                href="/logout"
                color="primary"
                variant="solid"
                className="font-semibold text-white sm:hidden"
                radius="sm"
                size="sm"
              >
                {t("signout")}
              </Button>

              <Button
                as={NextLink}
                href="/logout"
                color="primary"
                variant="solid"
                className="hidden font-semibold text-white sm:flex"
                radius="sm"
              >
                {t("signout")}
              </Button>
            </>
          ) : (
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
          )}
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default MainNavbar;
