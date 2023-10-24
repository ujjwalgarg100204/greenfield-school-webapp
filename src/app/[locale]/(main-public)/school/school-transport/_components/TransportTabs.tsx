"use client";

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Tab,
  Tabs,
} from "@lib/next-ui";

import NextLink from "next/link";
import { usePathname } from "next/navigation";
import type { FC } from "react";

const tabs = [
  {
    title: "Transport",
    href: "/school/school-transport",
  },
  {
    title: "Bus Rules",
    href: "/school/school-transport/rules",
  },
  {
    title: "Bus Fees",
    href: "/school/school-transport/fees",
  },
  {
    title: "Bus Routes(Tentative)",
    href: "/school/school-transport/routes",
  },
] as const;

const getCurrentTab = (path: string) => {
  const currentTab = tabs.find(({ href }) => href === path);
  return currentTab?.title ?? tabs[0].title;
};

const TransportTabs: FC = () => {
  const path = usePathname();
  const selectedKey = getCurrentTab(path);

  return (
    <>
      <div className="mx-auto w-fit">
        <Dropdown className="sm:hidden">
          <DropdownTrigger className="sm:hidden">
            <Button variant="bordered" color="primary">
              {tabs.find(({ title }) => title === selectedKey)!.title}
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Static Actions"
            selectedKeys={selectedKey}
            color="primary"
          >
            {tabs.map(({ title, href }) => (
              <DropdownItem key={title} as={NextLink} href={href}>
                {title}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      </div>
      <Tabs
        variant="solid"
        selectedKey={selectedKey}
        color="primary"
        className="hidden sm:flex"
      >
        {tabs.map(({ title, href }) => (
          <Tab key={title} title={title} as={NextLink} href={href} />
        ))}
      </Tabs>
    </>
  );
};

export default TransportTabs;
