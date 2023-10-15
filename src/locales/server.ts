import { createI18nServer } from "next-international/server";

export const { getI18n, getScopedI18n, getStaticParams, getCurrentLocale } =
  createI18nServer({
    en: async () => await import("./languages/en"),
    hi: async () => await import("./languages/hi"),
    ta: async () => await import("./languages/ta"),
    te: async () => await import("./languages/te"),
  });
