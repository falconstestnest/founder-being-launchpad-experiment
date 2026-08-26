import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { ABOUT, APPLY, JIMMY_LINKEDIN, SITE } from "@/lib/copy";

export const metadata: Metadata = {
  title: "About",
  description: "About Founder-Being LaunchPad.",
};

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-line">
        <div className="mx-auto max-w-3xl px-4 py-14 md:px-6 md:py-20">
          <p className="mono text-xs text-mint">ABOUT</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
            {ABOUT.title}
          </h1>

          <h2 className="mt-12 text-xl font-semibold">{ABOUT.whyExistsTitle}</h2>
          <p className="mt-3 text-sm text-muted">{ABOUT.whyExists}</p>
          <p className="mt-3 text-sm text-muted">{ABOUT.communityNote}</p>

          <h2 className="mt-10 text-xl font-semibold">{ABOUT.whyLpTitle}</h2>
          <p className="mt-3 text-sm text-muted">{ABOUT.whyLp}</p>

          <h2 className="mt-10 text-xl font-semibold">{ABOUT.philosophyTitle}</h2>
          <p className="mt-3 text-sm text-muted">{ABOUT.philosophy}</p>

          <h2 className="mt-10 text-xl font-semibold">What we believe</h2>
          <ul className="mt-4 grid gap-2">
            {ABOUT.beliefs.map((b) => (
              <li key={b} className="border border-line bg-panel px-4 py-2 text-sm">
                {b}
              </li>
            ))}
          </ul>

          <h2 className="mt-10 text-xl font-semibold">Founder / team</h2>
          <p className="mt-3 text-sm font-semibold">
            {APPLY.jimmyName} · {APPLY.jimmyRole}
          </p>
          <p className="mt-2 text-sm text-muted">{APPLY.jimmyHook}</p>
          <div className="mt-4 space-y-3 text-sm text-muted">
            {APPLY.jimmyBio.map((p) => (
              <p key={p.slice(0, 28)}>{p}</p>
            ))}
          </div>
          <a
            href={JIMMY_LINKEDIN}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block text-sm text-mint hover:underline"
          >
            View Jimmy’s verified professional profile →
          </a>
          <p className="mono mt-3 text-[0.65rem] text-muted">{APPLY.proofNote}</p>

          <h2 className="mt-10 text-xl font-semibold">{ABOUT.differsTitle}</h2>
          <p className="mt-3 text-sm text-muted">{ABOUT.differs}</p>

          <p className="mt-10 text-sm">
            <a className="text-mint underline" href={`mailto:${SITE.supportEmail}`}>
              {SITE.supportEmail}
            </a>
          </p>
          <Link
            href="/programme"
            className="mt-8 mr-4 inline-flex h-12 items-center border border-line px-5 text-sm hover:border-mint"
          >
            Explore the programme
          </Link>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
