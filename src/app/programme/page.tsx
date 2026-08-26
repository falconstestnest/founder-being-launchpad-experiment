import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { Reveal } from "@/components/engage/Reveal";
import {
  APPLY,
  COHORT,
  HOME,
  OUTPUT_PHASES,
  WEEK_LOOP,
} from "@/lib/copy";

export const metadata: Metadata = {
  title: "Programme",
  description:
    "Build your startup through 16 weeks of real founder work at Founder-Being LaunchPad.",
};

export default function ProgrammePage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-5xl px-4 py-14 md:px-6 md:py-20">
          <p className="mono text-xs text-mint">THE PROGRAMME</p>
          <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
            Build your startup through 16 weeks of real founder work.
          </h1>
          <p className="mt-4 max-w-2xl text-muted">
            LaunchPad combines workshops, customer conversations, building,
            experiments, mentor feedback and founder accountability around your
            own venture.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/curriculum"
              className="inline-flex h-12 items-center border border-mint px-5 text-sm font-semibold text-mint hover:bg-mint hover:text-[var(--mint-ink)]"
            >
              Explore the curriculum →
            </Link>
            <Link
              href="/apply"
              className="inline-flex h-12 items-center bg-mint px-6 text-sm font-bold text-[var(--mint-ink)]"
            >
              Express interest
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-panel">
        <div className="mx-auto max-w-5xl px-4 py-14 md:px-6">
          <Reveal>
            <h2 className="text-2xl font-semibold">Is LaunchPad for you?</h2>
            <p className="mt-3 max-w-3xl text-sm text-muted">{HOME.whoLead}</p>
          </Reveal>
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="mono text-xs text-muted">YOU DO NOT NEED</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                {APPLY.needNot.map((x) => (
                  <li key={x}>− {x}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mono text-xs text-mint">YOU DO NEED</h3>
              <ul className="mt-3 space-y-2 text-sm">
                {[
                  "something worth testing",
                  "willingness to talk to customers",
                  "willingness to build",
                  "commitment for 16 weeks",
                ].map((x) => (
                  <li key={x}>+ {x}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-5xl px-4 py-14 md:px-6">
          <h2 className="text-2xl font-semibold">Your startup is the project.</h2>
          <p className="mt-3 max-w-3xl text-sm text-muted">{HOME.buildLead}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {OUTPUT_PHASES.map((p) => (
              <article key={p.name} className="border border-line bg-panel p-5">
                <h3 className="text-sm font-semibold">{p.name}</h3>
                <ul className="mt-3 space-y-1.5 text-sm text-muted">
                  {p.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="mt-6 text-xs text-muted">{HOME.outputsNote}</p>
        </div>
      </section>

      <section className="border-b border-line bg-bg-2">
        <div className="mx-auto max-w-5xl px-4 py-14 md:px-6">
          <h2 className="text-2xl font-semibold">Learn → Test → Build → Review → Decide</h2>
          <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {WEEK_LOOP.map((s, i) => (
              <li key={s.name} className="border border-line bg-panel p-4">
                <span className="mono text-[0.65rem] text-mint">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-1 text-sm font-semibold">{s.name}</h3>
                <p className="mt-2 text-xs text-muted">{s.body}</p>
              </li>
            ))}
          </ol>
          <Link
            href="/programme/how-it-works"
            className="mt-6 inline-block text-sm text-mint hover:underline"
          >
            See how a week inside LaunchPad works →
          </Link>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-5xl px-4 py-14 md:px-6">
          <h2 className="text-2xl font-semibold">You build. We help you keep moving.</h2>
          <p className="mt-3 max-w-3xl text-sm text-muted">{HOME.mentorsLead}</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {HOME.mentors.map((m) => (
              <article key={m.title} className="border border-line bg-panel p-4">
                <h3 className="text-sm font-semibold">{m.title}</h3>
                <p className="mt-2 text-sm text-muted">{m.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-panel">
        <div className="mx-auto max-w-5xl px-4 py-14 md:px-6">
          <h2 className="text-2xl font-semibold">How admission works</h2>
          <p className="mt-3 max-w-3xl text-sm text-muted">{HOME.admissionLead}</p>
          <ol className="mt-8 grid gap-2 sm:grid-cols-5">
            {["EOI", "Review", "Assessment", "Founder conversation", "Selection"].map(
              (s, i) => (
                <li key={s} className="border border-line bg-bg px-4 py-3 text-sm">
                  <span className="mono text-[0.65rem] text-mint">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-1 font-semibold">{s}</p>
                </li>
              ),
            )}
          </ol>
          <details className="mt-8 border border-line bg-bg">
            <summary className="cursor-pointer px-4 py-3 text-sm font-semibold">
              View complete admission process
            </summary>
            <ol className="border-t border-line px-4 py-4">
              {HOME.admissionSteps.map((step, i) => (
                <li key={step} className="flex gap-3 border-b border-line/50 py-2 text-sm last:border-0">
                  <span className="mono text-xs text-muted">{i + 1}</span>
                  <span className="text-muted">{step}</span>
                </li>
              ))}
            </ol>
          </details>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-5xl px-4 py-14 md:px-6">
          <h2 className="text-2xl font-semibold">{HOME.feeTitle}</h2>
          <p className="mt-3 max-w-3xl text-sm text-muted">{HOME.feeLead}</p>
          <div className="mt-8 max-w-xl border border-line bg-panel p-6">
            <p className="text-xl font-semibold">{HOME.feeAmount}</p>
            <p className="mt-2 text-sm text-muted">{HOME.feeIncludes}</p>
            <p className="mt-4 text-sm text-muted">
              {COHORT.city} · {COHORT.duration}
            </p>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
