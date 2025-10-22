"use client";

import React from "react";
import { motion } from "motion/react";

import { ThreeScene } from "@/components/threejs/scene";

export const HeroAnimation: React.FC = () => {
  return (
    <motion.div
      animate={{
        scale: [0.7, 1],
        opacity: [0, 1],
        transition: {
          scale: { duration: 1, ease: "easeInOut", delay: 1 },
          opacity: { duration: 1, ease: "easeInOut", delay: 1 },
        },
      }}
    >
      <ThreeScene />
    </motion.div>
  );
};
