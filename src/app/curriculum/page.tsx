import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { MODULES } from "@/lib/copy";

export const metadata: Metadata = {
  title: "Curriculum",
  description: "16 modules across four phases — Founder-Being LaunchPad.",
};

export default function CurriculumPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-5xl px-4 py-14 md:px-6 md:py-20">
          <p className="mono text-xs text-mint">16 MODULES · 4 PHASES</p>
          <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
            The curriculum.
          </h1>
          <p className="mt-4 max-w-2xl text-muted">
            Each module centres on a founder question, practical work and an
            artefact you can show mentors and peers.
          </p>
          <Link
            href="/programme/how-it-works"
            className="mt-6 inline-block text-sm text-mint hover:underline"
          >
            Every module follows the same weekly working rhythm →
          </Link>
        </div>
      </section>

      {MODULES.map((phase) => (
        <section key={phase.phase} className="border-b border-line">
          <div className="mx-auto max-w-5xl px-4 py-12 md:px-6">
            <p className="mono text-xs text-gold">{phase.phase.toUpperCase()}</p>
            <h2 className="mt-2 text-2xl font-semibold">{phase.phase}</h2>
            <p className="mt-2 text-sm text-muted">{phase.phaseBlurb}</p>
            <div className="mt-8 grid gap-4">
              {phase.items.map((m) => (
                <article key={m.n} className="border border-line bg-panel p-5">
                  <p className="mono text-[0.65rem] text-mint">{m.n}</p>
                  <h3 className="mt-1 text-lg font-semibold">{m.title}</h3>
                  <dl className="mt-4 grid gap-3 text-sm md:grid-cols-2">
                    <div>
                      <dt className="mono text-[0.65rem] text-muted">FOUNDER QUESTION</dt>
                      <dd className="mt-1">{m.question}</dd>
                    </div>
                    <div>
                      <dt className="mono text-[0.65rem] text-muted">WHAT YOU DO</dt>
                      <dd className="mt-1 text-muted">{m.do}</dd>
                    </div>
                    <div>
                      <dt className="mono text-[0.65rem] text-muted">ARTEFACT</dt>
                      <dd className="mt-1 text-muted">{m.artefact}</dd>
                    </div>
                    <div>
                      <dt className="mono text-[0.65rem] text-muted">OUTCOME</dt>
                      <dd className="mt-1 text-muted">{m.outcome}</dd>
                    </div>
                  </dl>
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}

      <CtaBand />
    </>
  );
}
