import { source } from "@/lib/source";

import { DocsLayout } from "@/components/layout/docs";

export default function Layout({ children }: { children: React.ReactNode }) {
  return <DocsLayout tree={source.pageTree}>{children}</DocsLayout>;
}
