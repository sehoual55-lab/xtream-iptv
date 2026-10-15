import { NextResponse, type NextRequest } from "next/server";

/** AI istemcileri `Accept: text/markdown` gönderirse sayfayı Markdown olarak sun (GEO). */
export function middleware(req: NextRequest) {
  const accept = req.headers.get("accept") ?? "";
  const path = req.nextUrl.pathname;
  if (accept.includes("text/markdown") && !accept.includes("text/html")) {
    const url = req.nextUrl.clone();
    const clean = path.replace(/\/$/, "");
    url.pathname = clean.startsWith("/blog/") ? `/md${clean}` : "/llms-full.txt";
    return NextResponse.rewrite(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|md|images|favicon)[^.]*)"],
};
