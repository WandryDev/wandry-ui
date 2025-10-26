"use client";
import * as React from "react";

import { SignupForm } from "@/registry/wandry-ui/blocks/signup-04/components/signup-form";

const Page = () => {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-4xl">
        <SignupForm />
      </div>
    </div>
  );
};

export default Page;
