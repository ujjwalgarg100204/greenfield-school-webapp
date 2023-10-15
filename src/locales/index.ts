export const locales = ["en", "ta", "te", "hi"] as const;
export const defaultLocale = "en" as const;

export type Locale = (typeof locales)[number];
