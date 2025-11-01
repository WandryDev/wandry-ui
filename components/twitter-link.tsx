import * as React from "react";
import Link from "next/link";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { twitterLink } from "@/lib/site-config";

export function TwitterLink() {
  return (
    <Button asChild size="sm" variant="ghost" className="h-8 shadow-none">
      <Link href={twitterLink} target="_blank" rel="noreferrer">
        <Icons.twitter />
      </Link>
    </Button>
  );
}
