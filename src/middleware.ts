import { defaultLocale, locales } from "./locales";

import { createI18nMiddleware } from "next-international/middleware";
import type { NextRequest } from "next/server";

const I18nMiddleware = createI18nMiddleware({
    locales,
    defaultLocale,
    urlMappingStrategy: "rewrite",
});

export const middleware = (
    request: NextRequest,
): ReturnType<typeof I18nMiddleware> => {
    return I18nMiddleware(request);
};

export const config = {
    matcher: ["/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)"],
};
