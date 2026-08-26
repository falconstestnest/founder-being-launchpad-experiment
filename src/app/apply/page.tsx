import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { APPLY, COHORT, HOME, JIMMY_LINKEDIN, MODULES, SITE, TOOLS } from "@/lib/copy";
import { MEDIA } from "@/lib/media";

export const metadata: Metadata = {
  title: "Apply",
  description: "Expression of Interest for Founder-Being LaunchPad.",
};

export default function ApplyPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 md:px-6 md:py-16">
      <div className="grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="mono text-xs text-mint">{APPLY.eyebrow}</p>
          <h1 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
            Your idea deserves more than another year in your head.
          </h1>
          <p className="mt-4 max-w-2xl text-muted">
            Founder-Being LaunchPad is a 16-week venture-building programme for
            ambitious young builders ready to move from idea to evidence, MVP,
            customers and a credible venture direction.
          </p>
          <p className="mono mt-3 text-xs text-gold">{APPLY.deadlineLine}</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {APPLY.chips.map((c) => (
              <li
                key={c}
                className="border border-line bg-panel px-2.5 py-1 text-xs text-muted"
              >
                {c}
              </li>
            ))}
          </ul>

          <div className="mt-8 border border-line bg-panel p-6">
            <p className="mono text-xs text-muted">PRIMARY ACTION · LIVE EOI</p>
            <a
              href={SITE.liveApplyUrl}
              className="mt-4 inline-flex h-12 items-center bg-mint px-6 text-sm font-bold text-[var(--mint-ink)] transition hover:brightness-110 active:scale-[0.98]"
            >
              {APPLY.liveCta}
            </a>
            <p className="mono mt-3 text-xs text-muted">
              FREE · NO PAYMENT · ~5 MIN · NOT A SEAT OFFER
            </p>
            <p className="mt-3 text-xs text-muted">{APPLY.liveNote}</p>
            <Link
              href="/programme"
              className="mt-4 inline-block text-sm text-mint hover:underline"
            >
              Explore programme →
            </Link>
          </div>
        </div>

        <div className="relative aspect-[4/5] overflow-hidden border border-line bg-panel">
          <Image
            src={MEDIA.founder.src}
            alt={MEDIA.founder.alt}
            fill
            sizes="(max-width:1024px) 100vw, 40vw"
            className="object-cover object-top"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-bg via-bg/80 to-transparent p-4">
            <p className="mono text-[0.65rem] text-gold">{MEDIA.founder.credit}</p>
            <p className="mt-1 text-sm font-semibold">{APPLY.jimmyName}</p>
            <p className="text-xs text-muted">{APPLY.jimmyRole}</p>
          </div>
        </div>
      </div>

      <dl className="mt-12 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
        {APPLY.stats.map((s) => (
          <div key={s.k} className="bg-bg p-4">
            <dt className="mono text-[0.65rem] text-muted">{s.k.toUpperCase()}</dt>
            <dd className="mt-1 text-sm font-semibold">{s.v}</dd>
          </div>
        ))}
      </dl>

      <section className="mt-14 border-t border-line pt-10">
        <h2 className="mono text-xs text-mint">OPERATOR</h2>
        <h3 className="mt-2 text-xl font-semibold md:text-2xl">{APPLY.jimmyTitle}</h3>
        <p className="mt-1 text-sm text-muted">{APPLY.jimmyHook}</p>
        <div className="mt-5 max-w-3xl space-y-3 text-sm text-muted">
          {APPLY.jimmyBio.map((p) => (
            <p key={p.slice(0, 20)}>{p}</p>
          ))}
        </div>
        <ul className="mt-5 flex flex-wrap gap-2">
          {APPLY.proof.map((p) => (
            <li key={p} className="border border-line bg-panel px-2.5 py-1 text-xs">
              {p}
            </li>
          ))}
        </ul>
        <p className="mono mt-4 text-[0.65rem] text-muted">{APPLY.proofNote}</p>
        <a
          href={JIMMY_LINKEDIN}
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-block text-sm text-mint hover:underline"
        >
          View Jimmy’s verified professional profile →
        </a>
      </section>

      <section className="mt-14 border-t border-line pt-10">
        <h2 className="text-xl font-semibold">16 modules</h2>
        <ul className="mt-4 columns-1 text-sm text-muted md:columns-2 md:gap-10">
          {MODULES.flatMap((p) => p.items as readonly { n: string; title: string }[]).map((m) => (
            <li key={m.n} className="mb-2">
              {m.n} {m.title}
            </li>
          ))}
        </ul>
        <Link href="/curriculum" className="mt-4 inline-block text-sm text-mint hover:underline">
          Open full curriculum →
        </Link>
      </section>

      <section className="mt-14 border-t border-line pt-10">
        <h2 className="text-xl font-semibold">Build with the tools founders actually use</h2>
        <p className="mt-2 max-w-2xl text-sm text-muted">
          Participants learn practical workflows with current founder tools — not
          a software tutorial for its own sake.
        </p>
        <ul className="mt-6 grid gap-2 sm:grid-cols-2">
          {TOOLS.map((t) => (
            <li key={t.name} className="border border-line bg-panel px-4 py-3 text-sm">
              <span className="font-semibold">{t.name}</span>
              <span className="ml-2 text-muted">{t.use}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-muted">
          Tools may evolve by cohort. We teach workflows and judgment, not
          dependence on one software product.
        </p>
      </section>

      <section className="mt-14 border-t border-line pt-10">
        <h2 className="text-xl font-semibold">What happens after you submit</h2>
        <ol className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
          {HOME.admissionStages.map((stage, i) => (
            <li key={stage} className="border border-line bg-panel px-4 py-3 text-sm">
              <span className="mono text-[0.65rem] text-mint">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-1 font-semibold">{stage}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-14 grid gap-8 border-t border-line pt-10 md:grid-cols-2">
        <div>
          <h2 className="mono text-xs text-muted">DELETE THESE REQUIREMENTS</h2>
          <ul className="mt-3 space-y-2 text-sm text-muted">
            {APPLY.needNot.map((x) => (
              <li key={x}>− {x}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="mono text-xs text-mint">KEEP THESE</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {APPLY.needYes.map((x) => (
              <li key={x}>+ {x}</li>
            ))}
          </ul>
        </div>
      </section>

      <p className="mt-10 text-sm text-muted">
        {SITE.supportEmail} · Fee {COHORT.fee} only after formal offer.
      </p>
    </div>
  );
}
