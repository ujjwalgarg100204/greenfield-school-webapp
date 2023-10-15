import { Navbar, NavbarContent } from "@lib/next-ui";

import { NAV_LINK_TYPES } from "@/lib/frontend-data";
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
        {NAV_LINK_TYPES.map(type => (
          <LinksNavbarItem key={type} linkType={type} />
        ))}
      </NavbarContent>
    </Navbar>
  );
};

export default LinksNavbar;
