import { generateRegistryRssFeed } from "@wandry/analytics-sdk";
// import { generateRegistryRssFeed } from "@/rss";

export async function GET() {
  const rssXml = await generateRegistryRssFeed({
    baseUrl: "https://ui.wandry.com.ua/",
    rss: {
      pubDateStrategy: "githubLastEdit",
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
