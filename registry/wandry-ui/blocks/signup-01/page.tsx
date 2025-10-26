"use client";
import * as React from "react";
import { SignupForm } from "@/registry/wandry-ui/blocks/signup-01/components/signup-form";

const Page = () => {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <SignupForm />
      </div>
    </div>
  );
};

export default Page;
