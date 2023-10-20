import { Button, Navbar, NavbarBrand, NavbarContent } from "@lib/next-ui";

import GreenfieldLogo from "@/../public/images/logo.png";
import LanguageSwitcher from "@/components/ui/LanguageSwither";
import Lottie from "@/components/ui/Lottie";
import { getScopedI18n } from "@/locales/server";
import NextImage from "next/image";
import NextLink from "next/link";
import type { FC } from "react";

const Header: FC = async () => {
  const t = await getScopedI18n("Pages.home");
  return (
    <Navbar position="static">
      <NavbarBrand as={NextLink} href="/" className="gap-4">
        <NextImage
          src={GreenfieldLogo}
          alt="Greenfield Logo"
          className="h-12 w-12 rounded-full object-cover object-center"
          priority
        />
        <h1 className="flex-grow font-bold text-black/80 md:text-xl">
          Greenfield School <br /> Tamil Nadu
        </h1>
      </NavbarBrand>
      <NavbarContent justify="end">
        <Button
          isIconOnly
          as={NextLink}
          href="/"
          color="primary"
          variant="solid"
          className="font-semibold text-white sm:hidden"
          radius="sm"
          size="sm"
        >
          <Lottie
            src="https://lottie.host/c48712ea-8e16-40b1-bc08-38538fa927c6/EFGH7qXtwX.json"
            autoplay
            loop
          />
        </Button>

        <Button
          as={NextLink}
          href="/"
          color="primary"
          variant="solid"
          className="hidden font-semibold text-white sm:flex"
          radius="sm"
        >
          {t("title")}
        </Button>
        <LanguageSwitcher />
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
