import { Navbar, NavbarBrand, NavbarContent } from "@lib/next-ui";

import GreenfieldLogo from "@/../public/images/logo.png";
import LanguageSwitcher from "@/components/ui/LanguageSwither";
import NextImage from "next/image";
import NextLink from "next/link";
import type { FC } from "react";

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
        {/* <div className="absolute -right-2 sm:-right-4 md:-right-6 lg:-right-8 xl:-right-10 2xl:-right-12"> */}
        <LanguageSwitcher />
        {/* </div> */}
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
