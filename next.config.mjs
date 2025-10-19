import { createMDX } from "fumadocs-mdx/next";
const withMDX = createMDX({
  // customise the config file path
  // configPath: "source.config.ts"
});
/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/docs/:path*.mdx",
        destination: "/llms.mdx/:path*",
      },
    ];
  },
};
export default withMDX(config);
