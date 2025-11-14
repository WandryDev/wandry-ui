import { generateRegistryRssFeed } from "@wandry/analytics-sdk";

export async function GET(request: Request) {
  const rssXml = await generateRegistryRssFeed(request, {
    rss: {
      pubDateStatagy: "githubLastEdit",
    },
    github: {
      owner: "WandryDev",
      repo: "wandry-ui",
      token: process.env.GITHUB_TOKEN,
    },
  });
  return new Response(rssXml, {
    headers: {
      "Content-Type": "application/rss+xml",
    },
  });
}
