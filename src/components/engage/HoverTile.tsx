"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

export function HoverTile({
  src,
  alt,
  credit,
  title,
  body,
}: {
  src: string;
  alt: string;
  credit: string;
  title: string;
  body: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.article
      className="group relative overflow-hidden border border-line bg-panel"
      whileHover={reduce ? undefined : { y: -2 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
    >
      <div className="relative aspect-[16/10]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width:768px) 100vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/50 to-transparent opacity-90 transition group-hover:opacity-75" />
        <span className="absolute top-3 left-3 mono text-[0.6rem] text-gold">
          {credit}
        </span>
      </div>
      <div className="p-4">
        <h3 className="text-sm font-semibold">{title}</h3>
        <p className="mt-1 text-xs leading-relaxed text-muted">{body}</p>
      </div>
    </motion.article>
  );
}
