// import { defaultLocale, locales } from "./i18n";

// import createMiddleware from "next-intl/middleware";

// export default createMiddleware({
//   // A list of all locales that are supported
//   locales,

//   // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
//   defaultLocale,
// });

// export const config = {
//   // Skip all paths that should not be internationalized. This example skips
//   // certain folders and all pathnames with a dot (e.g. favicon.ico)
//   matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
// };

// middleware.ts

import { NextRequest } from "next/server";
import { createI18nMiddleware } from "next-international/middleware";

const I18nMiddleware = createI18nMiddleware({
  locales: ["en", "hi", "ta", "te"],
  defaultLocale: "en",
  urlMappingStrategy: "rewrite",
});

export function middleware(request: NextRequest) {
  return I18nMiddleware(request);
}

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)"],
};
