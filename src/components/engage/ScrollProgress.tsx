"use client";

import { motion, useReducedMotion, useScroll } from "motion/react";

/** Thin top progress — engagement without stealing the mission. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const reduce = useReducedMotion();
  if (reduce) return null;

  return (
    <motion.div
      className="fixed top-0 right-0 left-0 z-[60] h-0.5 origin-left bg-mint"
      style={{ scaleX: scrollYProgress }}
      aria-hidden
    />
  );
}
