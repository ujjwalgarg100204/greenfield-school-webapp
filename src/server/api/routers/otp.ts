import { createTRPCRouter, publicProcedure } from "../trpc";

import OTPVerification from "@/src/features/OTP/OTPVerification";
import { OtpCreateInputSchema } from "@/src/types/zod";
import { TRPCError } from "@trpc/server";
import type { TRPC_ERROR_CODES_BY_KEY } from "@trpc/server/rpc";

export const otpRouter = createTRPCRouter({
  generateOtp: publicProcedure
    .input(OtpCreateInputSchema)
    .mutation(async ({ input: { mobile } }) => {
      const otpVerification = new OTPVerification(mobile);
      const res = await otpVerification.generateOTP();
      if (!res.success)
        throw new TRPCError({
          code: "INTERNAL_SERVER_ERROR",
          message: res.message,
        });

      return res;
    }),
  verifyOtp: publicProcedure
    .input(OtpCreateInputSchema)
    .mutation(async ({ input: { mobile, otp } }) => {
      const otpObj = new OTPVerification(mobile);
      const res = await otpObj.verifyOTP(otp);

      if (!res.success) {
        let code: keyof typeof TRPC_ERROR_CODES_BY_KEY;
        switch (res.message) {
          case "OTP does not match":
            code = "CONFLICT";
            break;
          case "OTP expired, please generate a new one":
            code = "FORBIDDEN";
            break;
          case "OTP record does not exist":
            code = "BAD_REQUEST";
            break;
          default:
            code = "INTERNAL_SERVER_ERROR";
        }
        throw new TRPCError({
          code,
          message: res.message,
        });
      }
      return res;
    }),
});
