import { NextRequest, NextResponse } from "next/server";
import { isMarkdownPreferred, rewritePath } from "fumadocs-core/negotiation";

import { captureRegistryEvent } from "@wandry/analytics-sdk";

const { rewrite: rewriteLLM } = rewritePath("/docs/*path", "/llms.mdx/*path");

export function middleware(request: NextRequest) {
  captureRegistryEvent(
    request,
    process.env.NEXT_PUBLIC_WANDRY_ANALYTICS_TOKEN ?? ""
  );

  if (isMarkdownPreferred(request)) {
    const result = rewriteLLM(request.nextUrl.pathname);

    if (result) {
      return NextResponse.rewrite(new URL(result, request.nextUrl));
    }
  }

  return NextResponse.next();
}
