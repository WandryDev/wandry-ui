import { NextRequest, NextResponse } from "next/server";
import { isMarkdownPreferred, rewritePath } from "fumadocs-core/negotiation";

import { captureRegistryEvent } from "@wandry/analytics-sdk";

const { rewrite: rewriteLLM } = rewritePath("/docs/*path", "/llms.mdx/*path");

import { captureRegistryEvent } from "@wandry/analytics-sdk";

export function middleware(request: NextRequest) {
  captureRegistryEvent(
    request,
    "7|VlVieCuoRoSmPVlll8XeT2A1KOt044WzGu21IHia8ac6af5a"
  );

  captureRegistryEvent(
    request,
    "8|OOL1rO2LRehDNYDSN1WbegXAX9WlxcbPymsug1Qkebadd119"
  );

  if (isMarkdownPreferred(request)) {
    const result = rewriteLLM(request.nextUrl.pathname);

    if (result) {
      return NextResponse.rewrite(new URL(result, request.nextUrl));
    }
  }

  return NextResponse.next();
}
