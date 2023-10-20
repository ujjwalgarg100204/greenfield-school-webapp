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
  CLERK_SECRET_KEY: z.string().min(1),
  NODE_ENV: z
    .enum(["development", "production", "test"])
    .default("development"),
  // next-auth
  NEXTAUTH_URL: z.string().url(),
  NEXTAUTH_SECRET: z.string().min(1),

  // client env variables, needs to be appended with NEXT_PUBLIC
  NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().min(1),
});

export const env = envSchema.parse(process.env);
