import { Navbar, NavbarContent } from "@lib/next-ui";

import { NAV_LINKS } from "@/lib/frontend-data";
import type { FC } from "react";
import LinksNavbarItem from "./LinksNavbarItem";

const LinksNavbar: FC = () => {
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
        {(Object.keys(NAV_LINKS) as Array<keyof typeof NAV_LINKS>).map(
          navLink => (
            <LinksNavbarItem key={navLink} linkType={navLink} />
          ),
        )}
      </NavbarContent>
    </Navbar>
  );
};

export default LinksNavbar;
