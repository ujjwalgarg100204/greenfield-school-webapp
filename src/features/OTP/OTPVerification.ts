import { db } from "@/src/server/db";

export default class OTPVerification {
  private static readonly expiry: number = 60 * 15 * 1000; // 15 minutes
  private mobile: string;

  constructor(mobile: string) {
    this.mobile = mobile;
  }

  async generateOTP() {
    // generate OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    // store OTP in DB
    try {
      await db.otp.upsert({
        where: { mobile: this.mobile },
        create: {
          otp,
          mobile: this.mobile,
          expiresAt: new Date(Date.now() + OTPVerification.expiry),
        },
        update: {
          otp: otp,
          expiresAt: new Date(Date.now() + OTPVerification.expiry),
        },
      });

      // send otp to mobile number
      console.log(`OTP sent to ${this.mobile}: ${otp}`);
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
  }

  async verifyOTP(otp: string) {
    const now = new Date();
    try {
      const otpRecord = await db.otp.findUnique({
        where: { mobile: this.mobile },
      });
      // if otp record does not exist then return false
      if (!otpRecord)
        return {
          message: "OTP record does not exist",
          success: false,
        } as const;

      // check expiry of otp
      if (otpRecord.expiresAt < now)
        return {
          message: "OTP expired, please generate a new one",
          success: false,
        } as const;

      // check if otp matches
      if (otpRecord.otp === otp) {
        // delete otp record
        await db.otp.delete({ where: { mobile: this.mobile } });
        return { message: "OTP verified", success: true } as const;
      } else {
        return { message: "OTP does not match", success: false } as const;
      }
    } catch (err) {
      return {
        message: "Something went wrong, please try again",
        success: false,
      } as const;
    }
  }
}
