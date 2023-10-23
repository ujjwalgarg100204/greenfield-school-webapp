"use client";

import { createI18nClient } from "next-international/client";

export const {
  useI18n,
  useScopedI18n,
  I18nProviderClient,
  useChangeLocale,
  useCurrentLocale,
} = createI18nClient({
  en: async () => await import("./languages/en"),
  hi: async () => await import("./languages/hi"),
  ta: async () => await import("./languages/ta"),
  te: async () => await import("./languages/te"),
});
