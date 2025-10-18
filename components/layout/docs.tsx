"use client";
import { type ReactNode } from "react";
import type * as PageTree from "fumadocs-core/page-tree";
import { TreeContextProvider } from "fumadocs-ui/contexts/tree";

import { SidebarProvider } from "../ui/sidebar";
import { DocsSidebar } from "../docs-sidebar";

export interface DocsLayoutProps {
  tree: PageTree.Root;
  children: ReactNode;
}

export function DocsLayout({ tree, children }: DocsLayoutProps) {
  return (
    <TreeContextProvider tree={tree}>
      <div className="container-wrapper flex flex-1 flex-col px-2">
        <SidebarProvider className="3xl:fixed:container 3xl:fixed:px-3 min-h-min flex-1 items-start px-0 [--sidebar-width:220px] [--top-spacing:0] lg:grid lg:grid-cols-[var(--sidebar-width)_minmax(0,1fr)] lg:[--sidebar-width:240px] lg:[--top-spacing:calc(var(--spacing)*4)]">
          <DocsSidebar tree={tree} />
          <div className="h-full w-full">{children}</div>
        </SidebarProvider>
      </div>
    </TreeContextProvider>
  );
}
