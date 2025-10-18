import { defineDocs, defineConfig } from "fumadocs-mdx/config";
import rehypePrettyCode from "rehype-pretty-code";
import { transformers } from "@/lib/highligh-code";

export const docs = defineDocs({
  dir: "content/docs",
});
export default defineConfig({
  mdxOptions: {
    rehypePlugins: (plugins) => {
      plugins.shift();
      plugins.push([
        // TODO: fix the type.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        rehypePrettyCode as any,
        {
          theme: {
            dark: "github-dark",
            light: "github-light-default",
          },
          transformers,
        },
      ]);

      return plugins;
    },
  },
});
