import { NextRequest, NextResponse } from "next/server";

import { getRegistryItem } from "@/lib/registry";
import { capturePrivateRegistryEvent } from "@wandry/analytics-sdk";

export async function GET(
  request: NextRequest,
  { params }: { params: { name: string } }
) {
  // Get token from Authorization header.

  // Or from query parameters.
  const queryToken = request.nextUrl.searchParams.get("token");

  // Check if token is valid.
  if (!isValidToken(queryToken)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  // Return the component.
  const component = await getRegistryItem(params.name.split(".")[0]);

  capturePrivateRegistryEvent(
    request,
    process.env.NEXT_PUBLIC_WANDRY_ANALYTICS_TOKEN ?? ""
  );

  return NextResponse.json(component);
}

function isValidToken(token: string | null) {
  // Add your token validation logic here.
  // Check against database, JWT validation, etc.
  return token === "test";
}
