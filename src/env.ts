import { z } from "zod";

const envSchema = z.object({
  // server env variables
  DATABASE_URL: z
    .string()
    .url()
    .refine(
      str => !str.includes("YOUR_MYSQL_URL_HERE"),
      "You forgot to change the default URL",
    ),
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
  // next-auth
  NEXTAUTH_URL: z.string().url(),
  NEXTAUTH_SECRET: z.string().min(1),
});

export const env = envSchema.parse(process.env);
