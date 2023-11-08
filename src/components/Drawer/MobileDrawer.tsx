"use client";

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@lib/next-ui";
import { default as Link, default as NextLink } from "next/link";

import type { DrawerProps } from ".";
import type { FC } from "react";
import useSelectedDrawerItem from "./useSelectedOption";

const MobileDrawer: FC<DrawerProps> = ({ items }) => {
  const { item: selectedItem, subItem: selectedSubItem } =
    useSelectedDrawerItem(items);

  return (
    <aside className="flex w-12 flex-col items-center gap-4 rounded-md bg-primary-50 py-8 md:w-16">
      {items
        .filter(item => !("subItems" in item))
        .map(item => (
          <Button
            key={item.title}
            isIconOnly
            className="h-unit-8 w-unit-8 min-w-unit-8 border-black/50 md:h-unit-10 md:w-unit-10 md:min-w-unit-10"
            variant={selectedItem.title === item.title ? "solid" : "ghost"}
            color={selectedItem.title === item.title ? "primary" : "default"}
            href={"href" in item ? item.href : "/"}
            as={Link}
            size="sm"
          >
            {item.icon}
          </Button>
        ))}
      {items
        .filter(item => "subItems" in item)
        .map(item => (
          <Dropdown key={item.title} placement="right-start" backdrop="blur">
            <DropdownTrigger>
              <Button
                isIconOnly
                variant={selectedItem.title === item.title ? "solid" : "ghost"}
                className="h-unit-8 w-unit-8 min-w-unit-8 border-black/50 md:h-unit-10 md:w-unit-10 md:min-w-unit-10"
                color={
                  selectedItem.title === item.title ? "primary" : "default"
                }
              >
                {item.icon}
              </Button>
            </DropdownTrigger>
            {"subItems" in item && (
              <DropdownMenu
                selectedKeys={
                  selectedItem.title === item.title
                    ? [selectedSubItem!.title]
                    : undefined
                }
                selectionMode={
                  selectedItem.title === item.title ? "single" : "none"
                }
              >
                {item.subItems.map(subItem => (
                  <DropdownItem
                    variant="solid"
                    color="primary"
                    as={NextLink}
                    key={subItem.title}
                    href={subItem.href}
                    startContent={subItem.icon}
                  >
                    {subItem.title}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            )}
          </Dropdown>
        ))}
    </aside>
  );
};

export default MobileDrawer;

/*
small


medium


*/
