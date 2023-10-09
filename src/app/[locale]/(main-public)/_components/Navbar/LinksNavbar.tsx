"use client";

import { Navbar, NavbarContent } from "@nextui-org/react";

import LinksNavbarItem from "./LinksNavbarItem";

export const LINKS = [
  "school",
  "admission",
  "academic",
  "student",
  "parent",
] as const;

const LinksNavbar = () => {
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
        {LINKS.map(link => (
          <LinksNavbarItem key={link} link={link} />
        ))}
      </NavbarContent>
    </Navbar>
  );
};

export default LinksNavbar;
