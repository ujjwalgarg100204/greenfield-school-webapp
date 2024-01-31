import {
  Link,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Navbar as NextUINavbar,
} from "@lib/next-ui";

import AccountMenu from "../../(main-public)/_components/Navbar/MainNavbar/AccountMenu";
import type { FC } from "react";
import GreenfieldLogo from "@/public/images/logo.png";
import Image from "next/image";
import LanguageSwitcher from "@/src/components/ui/LanguageSwitcher";
import NotificationButton from "./NotificationButton";
import YearDropdown from "./YearDropdown";

const Navbar: FC = () => {
  return (
    <NextUINavbar position="static" maxWidth="full" className="bg-gray-50">
      <NavbarBrand>
        <Link href="/" className="flex h-full w-full gap-4">
          <Image
            src={GreenfieldLogo}
            alt="Greenfield School Logo"
            quality={95}
            className="rounded-full"
            priority
          />
          <p className="hidden text-sm font-bold text-primary md:block md:text-xl">
          Greenfield Campus
            <br />  [V.C.S.M matric. Hr. sec. School]
          </p>
        </Link>
      </NavbarBrand>

      <NavbarContent justify="end" className="items-center gap-4 lg:gap-5">
        <NavbarItem>
          <YearDropdown />
        </NavbarItem>
        <NavbarItem>
          <LanguageSwitcher />
        </NavbarItem>
        <NavbarItem>
          <NotificationButton />
        </NavbarItem>
        <NavbarItem>
          <AccountMenu />
        </NavbarItem>
      </NavbarContent>
    </NextUINavbar>
  );
};

export default Navbar;
