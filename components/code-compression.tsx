"use client";

import React from "react";
import { Frown, Laugh } from "lucide-react";

import { HeroCodeblock } from "./hero-codeblock";
import { InertiaCodeDemo, WandryCodeDemo } from "@/lib/site-config";

export const CodeCompression: React.FC = () => {
  return (
    <section className="py-4">
      <h2 className="text-4xl font-medium ">Code That Speaks for Itself</h2>
      <h3 className="max-w-lg mt-2 leading-5 text-gray-500">
        See how wandry-ui transforms verbose form code into elegant,
        maintainable components
      </h3>

      <div className="flex items-start gap-x-4 mt-10">
        <div className="w-1/2">
          <div className="flex items-center px-6 py-4 gap-x-2">
            <Frown className="text-red-500" />
            <h4 className="font-medium">Inertia Code</h4>
          </div>
          <HeroCodeblock code={InertiaCodeDemo} filename="LoginPage.tsx" />
        </div>
        <div className="w-1/2">
          <div className="flex items-center justify-between">
            <div className="flex items-center px-6 py-4 gap-x-2">
              <Laugh className="text-green-500" />
              <h4 className="font-medium">Wandry Code</h4>
            </div>
            <p className="text-xs text-gray-500">85% less code</p>
          </div>
          <HeroCodeblock code={WandryCodeDemo} filename="LoginPage.tsx" />
        </div>
      </div>
    </section>
  );
};
