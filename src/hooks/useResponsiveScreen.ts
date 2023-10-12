"use client";

import { useEffect, useState } from "react";

import useWindowSize from "./useWindowSize";

type ScreenSize = "sm" | "md" | "lg" | "xl" | "2xl";

const useResponsiveScreen = (): ScreenSize => {
  const [screenSize, setScreenSize] = useState<ScreenSize>("sm");
  const { width } = useWindowSize();

  useEffect(() => {
    if (typeof width !== "number") return;

    let screenSize: ScreenSize = "2xl";
    switch (true) {
      case width <= 640:
        screenSize = "sm";
        break;
      case width <= 768:
        screenSize = "md"; // mobile screen
        break;
      case width <= 1024:
        screenSize = "lg"; // tabs
        break;
      case width <= 1280:
        screenSize = "xl"; // desktop & laptop
        break;
    }
    setScreenSize(screenSize);
  }, [width]);

  return screenSize;
};

export default useResponsiveScreen;
