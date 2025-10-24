"use client";

import React from "react";
import Link from "next/link";

import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "./page-header";
import { Button } from "./ui/button";

import { motion } from "motion/react";
import { Lato } from "next/font/google";
import { cn } from "@/lib/utils";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});

const title = "Simplified Form Components for Inertia.js & React.js";
const description =
  "Transform verbose Inertia form code into clean, elegant components. Less boilerplate, more productivity.";

export const HeroSection: React.FC = () => {
  return (
    <PageHeader className="md:py-10">
      <motion.div
        animate={{
          opacity: [0, 1],
          y: [50, 0],
          transition: {
            opacity: { duration: 2, delay: 0.5 },
            y: { duration: 1 },
          },
        }}
      >
        <PageHeaderHeading
          className={cn("max-w-6xl tracking-normal", lato.className)}
        >
          {title}
        </PageHeaderHeading>
      </motion.div>
      <motion.div
        animate={{
          opacity: [0, 1],
          y: [50, 0],
          transition: {
            opacity: { duration: 2, delay: 1 },
            y: { duration: 1, delay: 0.5 },
          },
        }}
      >
        <PageHeaderDescription className={cn("sm:text-xl", lato.className)}>
          {description}
        </PageHeaderDescription>
      </motion.div>
      <motion.div
        animate={{
          opacity: [0, 1],
          transition: {
            opacity: { duration: 1, delay: 1.5 },
          },
        }}
      >
        <PageActions>
          <Button asChild>
            <Link href="/docs/installation">Get Started</Link>
          </Button>
          <Button asChild variant="ghost">
            <Link href="/docs/components">View Components</Link>
          </Button>
        </PageActions>
      </motion.div>
    </PageHeader>
  );
};
