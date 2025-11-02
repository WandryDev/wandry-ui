import { NextRequest, NextResponse } from "next/server";
import { isMarkdownPreferred, rewritePath } from "fumadocs-core/negotiation";

const { rewrite: rewriteLLM } = rewritePath("/docs/*path", "/llms.mdx/*path");

import { captureRegistryEvent } from "@wandry/analytics-sdk";

export function middleware(request: NextRequest) {
  captureRegistryEvent(
    request,
    "4|kBX6fLi9Jhz75khaFkKzGbhgLAsRbSUgGUEJgspP3133b978"
  );

  if (isMarkdownPreferred(request)) {
    const result = rewriteLLM(request.nextUrl.pathname);

    if (result) {
      return NextResponse.rewrite(new URL(result, request.nextUrl));
    }
  }

  return NextResponse.next();
}
