"use client";

import { useCallback } from "react";

import useTimer from "@/src/hooks/useTimer";
import { api } from "@/src/trpc/react";
import type { ReactQueryOptions } from "@/src/trpc/shared";

const useGenerateOTP = (
  mobileNumber: string,
  options: ReactQueryOptions["otp"]["generateOtp"],
) => {
  const { mutate, ...rest } = api.otp.generateOtp.useMutation(options);
  const { timeLeft, startTimer, endTimer } = useTimer(120);

  const handleGenerateOTP = useCallback(() => {
    endTimer();
    mutate({ mobile: mobileNumber, otp: "123456" });
    startTimer();
  }, [mutate, mobileNumber, startTimer, endTimer]);

  return {
    handleGenerateOTP,
    startTimer,
    timeLeft,
    endTimer,
    ...rest,
  };
};

export default useGenerateOTP;
