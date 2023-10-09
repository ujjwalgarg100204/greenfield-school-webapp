"use client";

import { useEffect, useState } from "react";

import useWindowSize from "./useWindowSize";

const useResponsiveScreen = () => {
  const [screenSize, setScreenSize] = useState<
    "sm" | "md" | "lg" | "xl" | "2xl"
  >("sm");
  const { width } = useWindowSize();

  useEffect(() => {
    if (!width) return;
    if (width <= 640) return setScreenSize("sm");
    else if (width <= 768) return setScreenSize("md"); // mobile screen
    else if (width <= 1024) return setScreenSize("lg"); // tabs
    else if (width <= 1280) return setScreenSize("xl"); // desktop & laptop
    else return setScreenSize("2xl"); // insanely large screen
  }, [width]);

  return screenSize;
};

export default useResponsiveScreen;
