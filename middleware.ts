import { NextRequest, NextResponse } from "next/server";
import { isMarkdownPreferred, rewritePath } from "fumadocs-core/negotiation";

const { rewrite: rewriteLLM } = rewritePath("/docs/*path", "/llms.mdx/*path");

const REGISRTRY_PATH = /^\/r(?:\/.*)?$/;

export function middleware(request: NextRequest) {
  console.log("request.url", request.url);
  if (REGISRTRY_PATH.test(new URL(request.url).pathname)) {
    console.log(
      "Middleware triggered for registry path",
      JSON.stringify(request)
    );
    // отправляем событие в аналитику или базу
  }

  if (isMarkdownPreferred(request)) {
    const result = rewriteLLM(request.nextUrl.pathname);

    if (result) {
      return NextResponse.rewrite(new URL(result, request.nextUrl));
    }
  }

  return NextResponse.next();
}
