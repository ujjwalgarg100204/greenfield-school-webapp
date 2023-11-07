"use client";

import { useEffect, useState } from "react";

import useWindowSize from "./useWindowSize";

export type ScreenSize = "sm" | "md" | "lg" | "xl" | "2xl";

const useResponsiveScreen = (): ScreenSize => {
  const [screenSize, setScreenSize] = useState<ScreenSize>("sm");
  const { width } = useWindowSize();

  useEffect(() => {
    if (typeof width !== "number") return;

    let screenSize: ScreenSize;
    switch (true) {
      case width > 0 && width <= 768:
        screenSize = "sm";
        break;
      case width <= 1024:
        screenSize = "md"; // mobile screen
        break;
      case width <= 1280:
        screenSize = "lg"; // tabs
        break;
      case width <= 1536:
        screenSize = "xl"; // desktop & laptop
        break;
      default:
        screenSize = "2xl";
    }
    setScreenSize(screenSize);
  }, [width]);

  return screenSize;
};

export default useResponsiveScreen;
