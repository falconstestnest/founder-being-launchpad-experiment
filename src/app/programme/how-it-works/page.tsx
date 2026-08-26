import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { COHORT, HOME, WEEK_LOOP } from "@/lib/copy";

export const metadata: Metadata = {
  title: "How a week works",
  description: "How a week inside Founder-Being LaunchPad works.",
};

export default function HowItWorksPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-5xl px-4 py-14 md:px-6 md:py-20">
          <p className="mono text-xs text-mint">HOW A WEEK WORKS</p>
          <h1 className="mt-3 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
            How a week inside LaunchPad works.
          </h1>
          <p className="mt-4 max-w-2xl text-muted">
            Each week moves your venture: you learn, test with the market, build,
            review evidence, and decide what to do next. Your startup stays at
            the centre.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/apply"
              className="inline-flex h-12 items-center bg-mint px-6 text-sm font-bold text-[var(--mint-ink)]"
            >
              Express interest →
            </Link>
            <Link
              href="/curriculum"
              className="inline-flex h-12 items-center border border-line px-5 text-sm hover:border-mint"
            >
              Explore the curriculum →
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-line bg-panel">
        <div className="mx-auto max-w-5xl px-4 py-14 md:px-6">
          <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {WEEK_LOOP.map((s) => (
              <li key={s.name} className="border border-line bg-bg p-4">
                <h2 className="text-sm font-semibold">{s.name}</h2>
                <p className="mt-2 text-xs text-muted">{s.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-5xl px-4 py-14 md:px-6">
          <h2 className="text-2xl font-semibold">Between sessions</h2>
          <p className="mt-3 max-w-3xl text-sm text-muted">
            The working session is not the whole week. Assignments, customer
            fieldwork and build work happen between meetings. Mentor review and
            peer accountability keep the venture moving. This is not passive
            watching.
          </p>
          <h3 className="mt-10 text-xl font-semibold">The weekly operating model</h3>
          <p className="mt-3 max-w-3xl text-sm text-muted">{HOME.rhythmLead}</p>
          <p className="mono mt-3 text-xs text-gold">{COHORT.scheduleNote}</p>
          <p className="mt-3 text-sm text-muted">
            Published session timing lives with the current intake. See{" "}
            <Link href="/cohort" className="text-mint hover:underline">
              cohort details
            </Link>{" "}
            for live schedule facts.
          </p>
          <ol className="mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {HOME.rhythmItems.map((item, i) => (
              <li key={item} className="flex gap-3 border border-line bg-panel px-4 py-3 text-sm">
                <span className="mono text-xs text-mint">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {item}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
