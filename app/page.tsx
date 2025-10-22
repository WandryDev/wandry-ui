import * as React from "react";

import { HeroAnimation } from "@/components/hero-animation";
import { HeroSection } from "@/components/hero-section";

import { CodeCompression } from "@/components/code-compression";
import { Features } from "@/components/features";

export default function Home() {
  return (
    <div className="relative flex flex-col flex-1 h-full w-full items-center justify-center bg-white dark:bg-black">
      <div className="z-10">
        <HeroSection />
        <div className="container-wrapper">
          <HeroAnimation />
        </div>
      </div>
      <div className="container-wrapper px-20">
        <CodeCompression />
      </div>

      <div className="container-wrapper px-20">
        <Features />
      </div>
    </div>
  );
}
