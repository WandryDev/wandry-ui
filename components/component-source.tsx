import fs from "node:fs/promises";
import path from "node:path";
import * as React from "react";

import * as Base from "fumadocs-ui/components/codeblock";
import { highlight } from "fumadocs-core/highlight";
import { getRegistryItem } from "@/lib/registry";
import { cn } from "@/lib/utils";
import { CopyButton } from "@/components/copy-button";

export async function ComponentSource({
  name,
  src,
  title,
  language,
  className,
}: React.ComponentProps<"div"> & {
  name?: string;
  src?: string;
  title?: string;
  language?: string;
}) {
  if (!name && !src) {
    return null;
  }

  let code: string | undefined;

  if (name) {
    const item = await getRegistryItem(name);
    code = item?.files?.[0]?.content;
  }

  if (src) {
    const file = await fs.readFile(path.join(process.cwd(), src), "utf-8");
    code = file;
  }

  if (!code) {
    return null;
  }

  // Fix imports.
  // Replace @/registry/new-york-v4/ with @/components/.
  code = code.replaceAll("@/registry/new-york-v4/", "@/components/");

  // Replace export default with export.
  code = code.replaceAll("export default", "export");
  code = code.replaceAll("/* eslint-disable react/no-children-prop */\n", "");

  const lang = language ?? title?.split(".").pop() ?? "tsx";
  const highlightedCode = await highlight(code, {
    lang,
    components: {
      pre: (props) => <Base.Pre {...props} />,
    },
  });

  return (
    <div className={cn("relative", className)}>
      <ComponentCode
        code={code}
        highlightedCode={highlightedCode}
        language={lang}
        title={title}
      />
    </div>
  );
}

function ComponentCode({
  code,
  highlightedCode,
  language,
  title,
}: {
  code: string;
  highlightedCode: React.ReactNode;
  language: string;
  title: string | undefined;
}) {
  return (
    <figure data-rehype-pretty-code-figure="" className="[&>pre]:max-h-96">
      <CopyButton value={code} />
      {highlightedCode}
    </figure>
  );
}
