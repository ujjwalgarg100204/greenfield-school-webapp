"use client";

import { useCallback, useEffect, useState } from "react";

type TimerHook = {
  timeLeft: number;
  startTimer: () => void;
  endTimer: () => void;
};

const useTimer = (maxTime: number): TimerHook => {
  const [timeLeft, setTimeLeft] = useState(maxTime);
  const [isActive, setIsActive] = useState(false);

  const startTimer = useCallback(() => {
    setIsActive(true);
  }, []);

  const endTimer = useCallback(() => {
    setIsActive(false);
    setTimeLeft(maxTime);
  }, [maxTime]);

  useEffect(() => {
    let interval: NodeJS.Timeout | undefined;

    if (isActive) {
      interval = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    if (timeLeft === 0) {
      setIsActive(false);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isActive, timeLeft]);

  return { timeLeft, startTimer, endTimer };
};

export default useTimer;
