"use client";
import * as React from "react";

import { SignupForm } from "@/registry/wandry-ui/blocks/signup-05/components/signup-form";

const Page = () => {
  return (
    <div className="bg-background border-muted border-2 rounded-md flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="w-full max-w-sm">
        <SignupForm />
      </div>
    </div>
  );
};

export default Page;
