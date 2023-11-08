"use client";

import { Accordion, AccordionItem, Listbox, ListboxItem } from "@lib/next-ui";

import NextLink from "next/link";
import type { FC } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { twMerge } from "tailwind-merge";
import type { DrawerProps } from ".";
import useSelectedDrawerItem from "./useSelectedOption";

const DesktopDrawer: FC<DrawerProps> = ({ items }) => {
  const { item: selectedItem, subItem: selectedSubItem } =
    useSelectedDrawerItem(items);

  return (
    <aside className="flex w-56 flex-col items-center gap-4 rounded-md bg-primary-50 py-8 xl:w-60">
      <Listbox
        color="primary"
        className="-mb-2 px-2 py-0"
        selectionMode="single"
        selectedKeys={[selectedItem.title]}
        classNames={{ list: "gap-2" }}
      >
        {items
          .filter(item => !("subItems" in item))
          .map(item => (
            <ListboxItem
              key={item.title}
              classNames={{
                title: "font-semibold text-base",
                base: "px-[1rem] py-2 data-[hover=true]:bg-primary data-[hover=true]:text-primary-foreground data-[selectable=true]:focus:bg-primary data-[selectable=true]:focus:text-primary-foreground data-[selected=true]:bg-primary data-[selected=true]:text-primary-foreground",
              }}
              startContent={item.icon}
              as={NextLink}
              href={"href" in item ? item.href : "/"}
              hideSelectedIcon
            >
              {item.title}
            </ListboxItem>
          ))}
      </Listbox>

      <Accordion variant="splitted" selectionMode="single">
        {items
          .filter(item => "subItems" in item)
          .map(item => (
            <AccordionItem
              key={item.title}
              title={item.title}
              classNames={{
                base: "group-[.is-splitted]:px-0 group-[.is-splitted]:pb-0 group-[.is-splitted]:shadow-none group-[.is-splitted]:bg-primary-50",
                heading: twMerge(
                  "bg-primary-50 text-black/80 px-4 data-[open=true]:bg-primary data-[open=true]:text-white rounded-md",
                  selectedItem.title === item.title && "bg-primary text-white",
                ),
                indicator: twMerge(
                  "text-black/80 data-[open=true]:text-white",
                  selectedItem.title === item.title && "text-white",
                ),
                title: twMerge(
                  "font-semibold text-base data-[open=true]:text-white",
                  selectedItem.title === item.title && "text-white",
                ),
                trigger: "py-2",
                content: "bg-secondary text-amber-950 rounded-md mt-1",
              }}
              startContent={item.icon}
              indicator={<MdOutlineKeyboardArrowDown className="h-6 w-6" />}
            >
              {"subItems" in item ? (
                <Listbox
                  selectionMode="single"
                  selectedKeys={
                    selectedSubItem ? [selectedSubItem.title] : "none"
                  }
                >
                  {item.subItems.map(subItem => (
                    <ListboxItem
                      key={subItem.title}
                      startContent={subItem.icon}
                      classNames={{
                        title: "font-semibold",
                        base: "data-[hover=true]:bg-secondary-800 data-[hover=true]:text-secondary-foreground/90 data-[selectable=true]:focus:bg-secondary-800 data-[selectable=true]:focus:text-secondary-foreground/90 data-[selected=true]:bg-secondary-800 data-[selected=true]:text-secondary-foreground/90",
                      }}
                      color="secondary"
                      hideSelectedIcon
                      as={NextLink}
                      href={subItem.href}
                    >
                      {subItem.title}
                    </ListboxItem>
                  ))}
                </Listbox>
              ) : null}
            </AccordionItem>
          ))}
      </Accordion>
    </aside>
  );
};

export default DesktopDrawer;
