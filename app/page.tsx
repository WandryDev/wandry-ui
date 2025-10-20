import * as React from "react";
import Link from "next/link";

import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/page-header";
import { Button } from "@/components/ui/button";

const title = "Simplified Form Components for Inertia.js & React.js";
const description =
  "Transform verbose Inertia form code into clean, elegant components. Less boilerplate, more productivity.";

export default function Home() {
  return (
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
  );
}
