"use client";

import type { DrawerItem } from ".";
import { usePathname } from "next/navigation";

const useSelectedDrawerItem = (items: DrawerItem[]) => {
  const path = usePathname();

  const selectedItem = items.find(item => {
    if ("href" in item) {
      return item.href === path;
    } else if ("subItems" in item) {
      return item.subItems.some(subItem => subItem.href === path);
    } else return false;
  });

  if (!selectedItem) throw new Error("Invalid URL");
  const selectedSubItem =
    "subItems" in selectedItem
      ? selectedItem.subItems.find(subItem => subItem.href === path)
      : null;

  if (selectedSubItem === undefined) throw new Error("Invalid URL");

  return { item: selectedItem, subItem: selectedSubItem };
};
export default useSelectedDrawerItem;
