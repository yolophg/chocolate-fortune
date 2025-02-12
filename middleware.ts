import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const defaultLocale = "kr";
const locales = ["kr", "en"];

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // check if request is for root path
  if (pathname === "/") {
    return NextResponse.redirect(new URL(`/${defaultLocale}`, request.url));
  }

  // check if pathname starts with a locale
  const pathnameIsMissingLocale = locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  if (pathnameIsMissingLocale) {
    return NextResponse.redirect(
      new URL(`/${defaultLocale}${pathname}`, request.url)
    );
  }
}

export const config = {
  matcher: [
    // skip all internal paths (_next, api, etc)
    "/((?!api|_next/static|_next/image|images|favicon.ico).*)",
    // include root path
    "/",
  ],
};
