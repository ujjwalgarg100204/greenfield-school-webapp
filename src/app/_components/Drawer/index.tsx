"use client";

import type { FC, ReactNode } from "react";

import useResponsiveScreen from "@/src/app/_hooks/useResponsiveScreen";
import DesktopDrawer from "./DesktopDrawer";
import MobileDrawer from "./MobileDrawer";

export type SubDrawerItem = {
    title: string;
    icon: ReactNode | JSX.Element;
    href: string;
};

export type DrawerItem =
    | SubDrawerItem
    | (Pick<SubDrawerItem, "icon" | "title"> & {
          subItems: SubDrawerItem[];
      });

export type DrawerProps = {
    items: DrawerItem[];
};

const Drawer: FC<DrawerProps> = ({ items }) => {
    const screen = useResponsiveScreen();

    switch (screen) {
        case "sm":
        case "md":
            return <MobileDrawer items={items} />;
        default:
            return <DesktopDrawer items={items} />;
    }
};

export default Drawer;
