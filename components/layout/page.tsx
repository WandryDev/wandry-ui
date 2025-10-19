"use client";

import { type ComponentProps, type ReactNode, useMemo } from "react";
import { MoveLeft, MoveRight } from "lucide-react";

import { useTreeContext } from "fumadocs-ui/contexts/tree";
import { Link, usePathname } from "fumadocs-core/framework";
import type * as PageTree from "fumadocs-core/page-tree";

import { cn } from "../../lib/cn";

export interface DocsPageProps {
  children: ReactNode;
}

export function DocsPage(props: DocsPageProps) {
  return (
    <main className="flex w-full h-full min-w-0 flex-col pt-10">
      <article className="flex flex-1 flex-col w-full max-w-[50vw] gap-6 px-4 py-8 md:px-6">
        {props.children}
        <Footer />
      </article>
    </main>
  );
}

export function DocsBody(props: ComponentProps<"div">) {
  return (
    <div {...props} className={cn("h-full", props.className)}>
      {props.children}
    </div>
  );
}

export function DocsDescription(props: ComponentProps<"p">) {
  // don't render if no description provided
  if (props.children === undefined) return null;

  return (
    <p
      {...props}
      className={cn(
        "text-muted-foreground text-sm font-normal text-balance sm:text-base ",
        props.className
      )}
    >
      {props.children}
    </p>
  );
}

export function DocsTitle(props: ComponentProps<"h1">) {
  return (
    <h1
      {...props}
      className={cn(
        "scroll-m-20 text-4xl font-semibold tracking-tight sm:text-3xl xl:text-4xl",
        props.className
      )}
    >
      {props.children}
    </h1>
  );
}

function Footer() {
  const { root } = useTreeContext();
  const pathname = usePathname();
  const flatten = useMemo(() => {
    const result: PageTree.Item[] = [];

    function scan(items: PageTree.Node[]) {
      for (const item of items) {
        if (item.type === "page") result.push(item);
        else if (item.type === "folder") {
          if (item.index) result.push(item.index);
          scan(item.children);
        }
      }
    }

    scan(root.children);
    return result;
  }, [root]);

  const { previous, next } = useMemo(() => {
    const idx = flatten.findIndex((item) => item.url === pathname);

    if (idx === -1) return {};
    return {
      previous: flatten[idx - 1],
      next: flatten[idx + 1],
    };
  }, [flatten, pathname]);

  return (
    <div className="flex flex-row justify-between gap-2 items-start font-medium">
      {previous ? (
        <Link href={previous.url}>
          <div className="flex flex-col items-start max-w-[25vw]">
            <div className="flex items-center gap-x-2">
              <MoveLeft className="size-4" /> {previous.name}
            </div>
            <p className="text-balance text-xs text-muted-foreground text-left">
              {previous.description}
            </p>
          </div>
        </Link>
      ) : (
        <div></div>
      )}

      {next ? (
        <Link href={next.url}>
          <div className="flex flex-col items-end max-w-[25vw]">
            <div className="flex items-center gap-x-2">
              {next.name} <MoveRight className="size-4" />
            </div>
            <p className="text-balance text-xs text-muted-foreground text-right">
              {next.description}
            </p>
          </div>
        </Link>
      ) : (
        <div></div>
      )}
    </div>
  );
}
