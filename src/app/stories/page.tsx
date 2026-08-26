import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { STORIES } from "@/lib/copy";

export const metadata: Metadata = {
  title: "Stories",
  description: "Stories from the founder journey — Founder-Being LaunchPad.",
};

export default function StoriesPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-5xl px-4 py-14 md:px-6 md:py-20">
          <p className="mono text-xs text-mint">STORIES</p>
          <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
            Stories from the founder journey.
          </h1>
          <p className="mt-4 max-w-2xl text-muted">
            Building companies is rarely a straight line. These are stories about
            experiments, mistakes, resilience, customers and learning what to do
            next.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-5xl px-4 py-10 md:px-6">
        <div className="grid gap-6">
          {STORIES.map((s) => (
            <article key={s.title} className="border border-line bg-panel p-6">
              <p className="mono text-[0.65rem] text-gold">{s.kind.toUpperCase()}</p>
              <h2 className="mt-2 text-xl font-semibold">{s.title}</h2>
              <div className="mt-4 space-y-3 text-sm text-muted">
                {s.body.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
      <CtaBand />
    </>
  );
}
