import { createTRPCRouter, publicProcedure } from "../trpc";

import { io } from "socket.io-client";
import { z } from "zod";

const socket = io(
  "http://whatsappmessages-env.eba-m8hedks9.ap-south-1.elasticbeanstalk.com/",
  {
    transports: ["websocket", "polling"],
    auth: {
      token: "abcd",
    },
    withCredentials: true,
    extraHeaders: {
      "my-custom-header": "abcd",
    },
  },
);

socket.on("connect", () => {
  console.log("Connected to the server");
});

socket.on("disconnect", reason => {
  if (reason === "io server disconnect") {
    // the disconnection was initiated by the server, you need to reconnect manually
    socket.connect();
  }
});

export const otpRouter = createTRPCRouter({
  generateOtp: publicProcedure
    .input(
      z.object({
        mobileNumber: z
          .string()
          .min(10, { message: "short-input" })
          .max(10, { message: "long-input" })
          .regex(/^\d+$/, { message: "wrong-input" }),
      }),
    )
    .mutation(({ ctx: { db }, input: { mobileNumber } }) => {
      socket.emit("connected", "Hello from client");
      socket.emit("mobilenumber", mobileNumber);
      console.log(
        "Checking the id of the socket in the client side",
        socket.id,
      );

      socket.on("client", data => {
        console.log("logging the data from the server", data);
      });

      const expiry = 60 * 2 * 1000;

      socket.on("client_otp", async (otp: string, newmobileNumber: string) => {
        console.log("Logging otp from the server side to the client", otp);

        try {
          await db.otp.upsert({
            where: { mobile: newmobileNumber },
            create: {
              otp,
              mobile: newmobileNumber,
              expiresAt: new Date(Date.now() + expiry),
            },
            update: {
              otp: otp,
              expiresAt: new Date(Date.now() + expiry),
            },
          });

          // send otp to mobile number
          console.log(`OTP sent to ${mobileNumber}: ${otp}`);
          return {
            message: "OTP sent to mobile number",
            success: true,
          } as const;
        } catch (err) {
          return {
            message: "Something went wrong, please try again",
            success: false,
          } as const;
        }
      });
    }),

  verifyOtp: publicProcedure
    .input(
      z.object({
        mobileNumber: z
          .string()
          .min(10, { message: "short-input" })
          .max(10, { message: "long-input" })
          .regex(/^\d+$/, { message: "wrong-input" }),
        otp: z
          .string()
          .min(6, { message: "short-input" })
          .max(6, { message: "long-input" })
          .regex(/^\d+$/, { message: "wrong-input" }),
      }),
    )
    .mutation(async ({ ctx: { db }, input: { mobileNumber, otp } }) => {
      const now = new Date();
      try {
        console.log("we are inside the verify otp public procedure");
        console.log(`verify otp sent to ${mobileNumber}: ${otp}`);

        const existingOtp = await db.otp.findUnique({
          where: { mobile: mobileNumber },
        });
        console.log(
          "WE are logging the existing otp booleam type",
          existingOtp,
        );

        if (!existingOtp) {
          return {
            message: "OTP record does not exist",
            success: false,
          } as const;
        }

        if (existingOtp.expiresAt < now) {
          return {
            message: "OTP expired, please generate a new one",
            success: false,
          } as const;
        }

        // check if otp matches
        if (existingOtp.otp === otp) {
          // delete otp record
          await db.otp.delete({ where: { mobile: mobileNumber } });
          return { message: "OTP verified", success: true } as const;
        } else {
          return { message: "Wrong OTP", success: false } as const;
        }
      } catch (err) {
        return {
          message: "Something went wrong, please try again",
          success: false,
        } as const;
      }
    }),
});
