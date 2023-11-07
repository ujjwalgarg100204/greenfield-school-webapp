"use client";

import type { FC, ReactNode } from "react";

import DesktopDrawer from "./DesktopDrawer";
import MobileDrawer from "./MobileDrawer";
import useResponsiveScreen from "@/src/hooks/useResponsiveScreen";

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

  if (screen === "sm" || screen === "md") return <MobileDrawer items={items} />;
  else return <DesktopDrawer items={items} />;
};

export default Drawer;
