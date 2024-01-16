"use client";

import { useEffect, useState } from "react";

const useOnScreen = (ref: React.MutableRefObject<Element | null>) => {
  const [isOnScreen, setIsOnScreen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        entry && setIsOnScreen(entry.isIntersecting);
      },
      {
        threshold: 0.9,
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isOnScreen;
};

export default useOnScreen;
