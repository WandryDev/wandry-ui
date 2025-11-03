import { NextRequest, NextResponse } from "next/server";
import { isMarkdownPreferred, rewritePath } from "fumadocs-core/negotiation";

import { captureRegistryEvent } from "@wandry/analytics-sdk";

const { rewrite: rewriteLLM } = rewritePath("/docs/*path", "/llms.mdx/*path");

export function middleware(request: NextRequest) {
  // import {captureRegistryEvents} from '@wandry/analytics-sdk';
  // captureRegistryEvents(request, token);

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
