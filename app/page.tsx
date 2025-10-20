import * as React from "react";
import Link from "next/link";

import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { Button } from "@/components/ui/button";
import { HeroCodeblock } from "@/components/hero-codeblock";
import { cn } from "@/lib/utils";

const title = "Simplified Form Components for Inertia.js & React.js";
const description =
  "Transform verbose Inertia form code into clean, elegant components. Less boilerplate, more productivity.";

export default function Home() {
  return (
    <div className="relative flex flex-col flex-1 h-full w-full items-center justify-center bg-white dark:bg-black">
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:20px_20px]",
          "[background-image:radial-gradient(#d4d4d4_1px,transparent_1px)]",
          "dark:[background-image:radial-gradient(#404040_1px,transparent_1px)]"
        )}
      />
      {/* Radial gradient for the container to give a faded look */}

      <div className="z-10">
        <PageHeader>
          <PageHeaderHeading className="max-w-4xl">{title}</PageHeaderHeading>
          <PageHeaderDescription>{description}</PageHeaderDescription>
          <PageActions>
            <Button asChild size="sm">
              <Link href="/docs/installation">Get Started</Link>
            </Button>
            <Button asChild size="sm" variant="ghost">
              <Link href="/docs/components">View Components</Link>
            </Button>
          </PageActions>
        </PageHeader>
        <div className="container-wrapper">
          <HeroCodeblock />
        </div>
      </div>
    </div>
  );
}
