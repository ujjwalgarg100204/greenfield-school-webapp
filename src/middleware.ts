import { defaultLocale, locales } from "./locales";

import type { NextRequest } from "next/server";
import { createI18nMiddleware } from "next-international/middleware";

const I18nMiddleware = createI18nMiddleware({
  locales,
  defaultLocale,
});

export const middleware = (
  request: NextRequest,
): ReturnType<typeof I18nMiddleware> => {
  return I18nMiddleware(request);
};

export const config = {
  matcher: [
    "/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)",
    // "/dashboard",
    // "/app/:path*",
    // "/other/:path*",
    // "/help/:path*",
  ],
};
