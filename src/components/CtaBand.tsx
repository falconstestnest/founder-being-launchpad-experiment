import Link from "next/link";
import { APPLY, COHORT, HOME } from "@/lib/copy";

export function CtaBand() {
  return (
    <section className="bg-mint text-[var(--mint-ink)]">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-12 md:flex-row md:items-center md:justify-between md:px-6">
        <div>
          <p className="mono text-xs opacity-70">
            {COHORT.label.toUpperCase()} · {COHORT.status.toUpperCase()}
          </p>
          <p className="mt-1 text-xl font-semibold md:text-2xl">{APPLY.title}</p>
          <p className="mt-1 max-w-xl text-sm opacity-80">{APPLY.lead}</p>
          <p className="mono mt-2 text-[0.65rem] opacity-70">{HOME.freeLine}</p>
        </div>
        <Link
          href="/apply"
          className="inline-flex h-12 shrink-0 items-center bg-bg px-6 text-sm font-bold text-fg transition hover:opacity-90 active:scale-[0.98]"
        >
          {HOME.finalCtaButton}
        </Link>
      </div>
    </section>
  );
}
