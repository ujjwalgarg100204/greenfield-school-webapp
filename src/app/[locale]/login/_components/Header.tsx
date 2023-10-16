import { Navbar, NavbarBrand, NavbarContent } from "@lib/next-ui";

import type { FC } from "react";
import GreenfieldLogo from "@/../public/images/logo.png";
import LanguageSwitcher from "@/components/ui/LanguageSwither";
import NextImage from "next/image";
import NextLink from "next/link";

const Header: FC = () => {
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
        <LanguageSwitcher />
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
