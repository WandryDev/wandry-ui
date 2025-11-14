import { generateRegistryRssFeed } from "@wandry/analytics-sdk";

export async function GET(request: Request) {
  const rssXml = await generateRegistryRssFeed(request, {
    rss: {
      pubDateStatagy: "fileMtime",
    },
  });
  return new Response(rssXml, {
    headers: {
      "Content-Type": "application/rss+xml",
    },
  });
}
