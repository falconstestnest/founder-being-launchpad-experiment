"use client";

/**
 * Interactive timeline: click or scroll-activate phases.
 * Dense Elon layout + engagement without decoration zoo.
 */

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { HOME } from "@/lib/copy";
import { MEDIA } from "@/lib/media";
import Image from "next/image";

const PHASE_MEDIA = [MEDIA.build, MEDIA.customers, MEDIA.demo, MEDIA.place] as const;

export function PhaseTrack() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const media = PHASE_MEDIA[active] ?? MEDIA.build;
  const phase = HOME.phases[active];

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:gap-10">
      <div>
        <ol className="border border-line">
          {HOME.phases.map((p, i) => {
            const on = i === active;
            return (
              <li key={p.name} className="border-b border-line last:border-b-0">
                <button
                  type="button"
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  className={`flex w-full items-start gap-4 px-4 py-4 text-left transition-colors ${
                    on ? "bg-panel text-fg" : "bg-bg text-muted hover:bg-panel/60 hover:text-fg"
                  }`}
                  aria-pressed={on}
                >
                  <span className={`mono text-xs ${on ? "text-mint" : "text-muted"}`}>
                    P{i + 1}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-fg">{p.name}</span>
                    <span className="mt-1 block text-xs text-muted">{p.blurb}</span>
                  </span>
                  {on ? (
                    <motion.span
                      layoutId={reduce ? undefined : "phase-dot"}
                      className="ml-auto mt-1 h-2 w-2 bg-mint"
                    />
                  ) : (
                    <span className="ml-auto mt-1 h-2 w-2 bg-line" />
                  )}
                </button>
              </li>
            );
          })}
        </ol>
        <p className="mono mt-3 text-[0.65rem] text-muted">
          HOVER / TAP TO SWITCH · REDUCED-MOTION SAFE
        </p>
      </div>

      <div className="relative min-h-[280px] overflow-hidden border border-line bg-panel lg:min-h-full">
        <Image
          key={media.src}
          src={media.src}
          alt={media.alt}
          fill
          sizes="(max-width:1024px) 100vw, 50vw"
          className="object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-5">
          <p className="mono text-[0.65rem] text-gold">{media.credit}</p>
          <p className="mt-2 text-xl font-semibold">{phase?.name}</p>
          <p className="mt-1 text-sm text-muted">{phase?.blurb}</p>
        </div>
      </div>
    </div>
  );
}
