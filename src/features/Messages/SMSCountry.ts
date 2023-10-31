import { env } from "@/src/env.mjs";

export default class SMSCountry {
  private readonly API = "https://www.smscountry.com/smscwebservice_bulk.aspx";
  private readonly API_KEY = env.SMS_COUNTRY_API_KEY;

  sendMessage(mobile: string, message: string) {
    return true;
  }
}
