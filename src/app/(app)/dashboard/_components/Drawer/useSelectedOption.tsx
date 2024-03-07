"use client";

import type { DrawerItem, SubDrawerItem } from ".";
import { usePathname } from "next/navigation";

const getSelectedSubItem = (
    path: string,
    { subItems }: { subItems: SubDrawerItem[] },
): SubDrawerItem | null => {
    let selectedSubItem: SubDrawerItem | null = null;
    let maxLen = Number.MIN_VALUE;
    for (const subItem of subItems) {
        if (path.includes(subItem.href) && subItem.href.length > maxLen) {
            selectedSubItem = subItem;
            maxLen = Math.max(maxLen, subItem.href.length);
        }
    }
    return selectedSubItem;
};

const useSelectedDrawerItem = (items: DrawerItem[]) => {
    const path = usePathname();

    const selectedItem = items.find(item => {
        if ("href" in item) {
            return item.href === path;
        } else if ("subItems" in item) {
            return !!getSelectedSubItem(path, item);
        } else return false;
    });
    if (!selectedItem) throw new Error("Invalid URL");

    const selectedSubItem =
        "subItems" in selectedItem
            ? getSelectedSubItem(path, selectedItem)
            : null;
    if (selectedSubItem === undefined) throw new Error("Invalid URL");

    return { item: selectedItem, subItem: selectedSubItem };
};
export default useSelectedDrawerItem;
