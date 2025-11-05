"use client";

import { useHideLayout } from "@/hooks/use-hide-layout";
import { githubLink } from "@/lib/site-config";

export function SiteFooter() {
  const isHideHeader = useHideLayout();

  if (isHideHeader) {
    return null;
  }

  return (
    <footer className="group-has-[.section-soft]/body:bg-surface/40 3xl:fixed:bg-transparent group-has-[.docs-nav]/body:pb-20 group-has-[.docs-nav]/body:sm:pb-0 dark:bg-transparent py-10">
      <div className="container-wrapper px-4 xl:px-6">
        <div className="flex h-(--footer-height) items-center justify-between">
          <div className="text-muted-foreground w-full px-1 text-center text-xs leading-loose sm:text-sm">
            Built by{" "}
            <a
              href="https://wandry.com.ua"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              Wandry
            </a>
            . The source code is available on{" "}
            <a
              href={githubLink}
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </a>
          </div>
          <a
            href="https://www.producthunt.com/products/wandry-ui?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-wandry&#0045;ui"
            target="_blank"
          >
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1034050&theme=dark&t=1762374344777"
              alt="Wandry&#0032;UI - Fully&#0045;controlled&#0032;React&#0032;Inertia&#0032;form&#0032;components | Product Hunt"
              style={{ width: "250px", height: "54px" }}
              width="250"
              height="54"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
