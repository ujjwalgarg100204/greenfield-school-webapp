import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@lib/next-ui";

import type { FC } from "react";
import GreenfieldLogo from "@/public/images/logo.png";
import Image from "next/image";
import LanguageSwitcher from "@/src/components/ui/LanguageSwitcher";
import PrimaryAction from "./PrimaryAction";
import { getScopedI18n } from "@/src/locales/server";

const MainNavbar: FC = async () => {
  const t = await getScopedI18n("Root.main-navbar");

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
          <p className="hidden text-sm font-bold text-primary md:block md:text-xl">
            Greenfield Campus
            <br /> [V.C.S.M matric. Hr. sec. School]
          </p>
        </Link>
      </NavbarBrand>

      <NavbarContent justify="end" className="gap-2 md:gap-4">
        <NavbarItem>
          <LanguageSwitcher />
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            href="/admission/portal"
            variant="ghost"
            color="primary"
            className="hidden font-semibold sm:flex"
          >
            {t("admission-portal")}
          </Button>
          <Button
            as={Link}
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
