import { Button, Navbar, NavbarContent } from "@lib/next-ui";

import { NAV_LINKS } from "@/lib/frontend-data";
import { getScopedI18n } from "@/locales/server";
import { default as NextLink } from "next/link";
import type { FC } from "react";
import LinksNavbarItem from "./LinksNavbarItem";

const LinksNavbar: FC = async () => {
  const t = await getScopedI18n("Pages.home");
  return (
    <Navbar
      height="3"
      className="grid place-content-start"
      isBordered
      isBlurred
    >
      <NavbarContent
        className="flex flex-wrap gap-y-0 sm:gap-x-8"
        justify="center"
      >
        <Button
          as={NextLink}
          href="/"
          disableRipple
          className="bg-slate-400 bg-transparent p-0 text-xs data-[hover=true]:bg-transparent sm:text-sm md:text-base"
        >
          {t("title")}
        </Button>
        {(Object.keys(NAV_LINKS) as Array<keyof typeof NAV_LINKS>).map(
          navLink =>
            navLink === "home" ? null : (
              <LinksNavbarItem key={navLink} linkType={navLink} />
            ),
        )}
      </NavbarContent>
    </Navbar>
  );
};

export default LinksNavbar;
