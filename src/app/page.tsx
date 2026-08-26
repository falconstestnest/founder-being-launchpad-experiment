"use client";

import Image from "next/image";
import Link from "next/link";
import { HoverTile } from "@/components/engage/HoverTile";
import { PhaseTrack } from "@/components/engage/PhaseTrack";
import { Reveal } from "@/components/engage/Reveal";
import { ScrollProgress } from "@/components/engage/ScrollProgress";
import { COHORT, HOME, SITE } from "@/lib/copy";
import { MEDIA } from "@/lib/media";

export default function HomePage() {
  return (
    <>
      <ScrollProgress />

      {/* Hero — live headline + V3 image engagement */}
      <section className="relative min-h-[88vh] overflow-hidden border-b border-line">
        <Image
          src={MEDIA.hero.src}
          alt={MEDIA.hero.alt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/85 to-bg/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/50" />

        <div className="relative mx-auto flex min-h-[80vh] max-w-5xl flex-col justify-center px-4 py-16 md:px-6">
          <p className="mono text-xs text-mint">
            {COHORT.status.toUpperCase()} · CLOSE {COHORT.deadline.toUpperCase()}
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
            {HOME.heroTitle}
          </h1>
          <p className="mt-5 max-w-xl text-base text-fg/85 md:text-lg">
            {HOME.heroSupport}
          </p>
          <p className="mono mt-4 text-xs text-muted">
            {SITE.tagline.toUpperCase()} · KOCHI · AGES 15–25
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/apply"
              className="inline-flex h-12 items-center bg-mint px-6 text-sm font-bold text-[var(--mint-ink)] transition hover:brightness-110 active:scale-[0.98]"
            >
              {HOME.ctaPrimary}
            </Link>
            <Link
              href="/programme"
              className="mono text-xs text-muted underline-offset-4 hover:text-fg hover:underline"
            >
              {HOME.ctaSecondary}
            </Link>
          </div>
          <p className="mono mt-5 text-xs text-muted">Free EOI · No payment now</p>
        </div>
      </section>

      {/* Specs */}
      <section className="border-b border-line bg-panel">
        <div className="mx-auto max-w-5xl px-4 md:px-6">
          <dl className="grid sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["DEADLINE", COHORT.deadline],
              ["START", COHORT.start],
              ["LOCATION", "Kochi · KSUM"],
              ["FEE", `${COHORT.fee} after offer`],
            ].map(([k, v]) => (
              <div
                key={k}
                className="border-b border-line py-5 sm:border-r sm:px-4 lg:border-b-0 first:pl-0 last:border-r-0"
              >
                <dt className="mono text-[0.65rem] text-muted">{k}</dt>
                <dd className="mt-1 text-sm font-semibold md:text-base">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Requirements + engagement tiles */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-5xl px-4 py-14 md:px-6 md:py-16">
          <Reveal>
            <h2 className="mono text-xs text-mint">REQUIREMENTS</h2>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
              {HOME.whoTitle}
            </h3>
            <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted md:text-base">
              {HOME.whoLead}
            </p>
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {HOME.whoCards.map((c) => (
              <Reveal key={c.title}>
                <div className="border border-line bg-panel p-5 transition hover:border-mint/40">
                  <h4 className="text-sm font-semibold">{c.title}</h4>
                  <p className="mt-2 text-sm text-muted">{c.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 max-w-3xl text-sm text-muted">{HOME.whoNote}</p>
          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            <Link href="/stories" className="text-mint hover:underline">
              Read founder stories →
            </Link>
            <Link href="/programme" className="text-mint hover:underline">
              See how LaunchPad works →
            </Link>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            <HoverTile
              {...MEDIA.build}
              title="Build"
              body="Make something people can use — not a slide deck."
            />
            <HoverTile
              {...MEDIA.customers}
              title="Customers"
              body="Talk to real people. Stop guessing."
            />
            <HoverTile
              {...MEDIA.demo}
              title="Demo Day"
              body="Present evidence of what you tried."
            />
          </div>
        </div>
      </section>

      {/* Interactive timeline */}
      <section id="timeline" className="border-b border-line bg-bg-2">
        <div className="mx-auto max-w-5xl px-4 py-14 md:px-6 md:py-16">
          <Reveal>
            <h2 className="mono text-xs text-mint">TIMELINE · INTERACTIVE</h2>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
              {HOME.journeyTitle}
            </h3>
            <p className="mt-3 max-w-2xl text-sm text-muted">{HOME.journeyLead}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {HOME.journeyCrossCuts.map((x) => (
                <li
                  key={x}
                  className="border border-line bg-panel px-2.5 py-1 text-xs text-muted"
                >
                  {x}
                </li>
              ))}
            </ul>
          </Reveal>
          <div className="mt-10">
            <PhaseTrack />
          </div>
          <Link
            href="/curriculum"
            className="mt-8 inline-block text-sm text-mint hover:underline"
          >
            Explore all 16 modules →
          </Link>
        </div>
      </section>

      {/* Outputs */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-5xl px-4 py-14 md:px-6 md:py-16">
          <Reveal>
            <h2 className="mono text-xs text-mint">OUTPUTS</h2>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
              {HOME.buildTitle}
            </h3>
            <p className="mt-3 max-w-3xl text-sm text-muted">{HOME.buildLead}</p>
          </Reveal>
          <ul className="mt-8 columns-1 text-sm md:columns-2 md:gap-10">
            {HOME.outputs.map((o) => (
              <li key={o} className="mb-2 border-b border-line/60 py-2">
                {o}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs text-muted">{HOME.outputsNote}</p>
        </div>
      </section>

      {/* Weekly rhythm */}
      <section id="how-it-works" className="border-b border-line bg-panel">
        <div className="mx-auto max-w-5xl px-4 py-14 md:px-6 md:py-16">
          <Reveal>
            <h2 className="mono text-xs text-mint">RHYTHM</h2>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
              {HOME.rhythmTitle}
            </h3>
            <p className="mt-3 max-w-3xl text-sm text-muted">{HOME.rhythmLead}</p>
            <p className="mono mt-3 text-xs text-gold">{COHORT.scheduleNote}</p>
          </Reveal>
          <ol className="mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {HOME.rhythmItems.map((item, i) => (
              <li
                key={item}
                className="flex gap-3 border border-line bg-bg px-4 py-3 text-sm"
              >
                <span className="mono text-xs text-mint">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-sm text-muted">
            Weekly commitment: {COHORT.commitment}
          </p>
          <Link
            href="/programme/how-it-works"
            className="mt-4 inline-block text-sm text-mint hover:underline"
          >
            See how a week inside LaunchPad works →
          </Link>
        </div>
      </section>

      {/* Mentors */}
      <section id="mentors" className="border-b border-line">
        <div className="mx-auto max-w-5xl px-4 py-14 md:px-6 md:py-16">
          <Reveal>
            <h2 className="mono text-xs text-mint">SUPPORT</h2>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
              {HOME.mentorsTitle}
            </h3>
            <p className="mt-3 max-w-3xl text-sm text-muted">{HOME.mentorsLead}</p>
          </Reveal>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {HOME.mentors.map((m) => (
              <article
                key={m.title}
                className="border border-line bg-panel p-4 transition hover:border-mint/40"
              >
                <h4 className="text-sm font-semibold">{m.title}</h4>
                <p className="mt-2 text-sm text-muted">{m.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Fee */}
      <section id="fee" className="border-b border-line bg-bg-2">
        <div className="mx-auto max-w-5xl px-4 py-14 md:px-6 md:py-16">
          <Reveal>
            <h2 className="mono text-xs text-mint">FEE</h2>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
              {HOME.feeTitle}
            </h3>
            <p className="mt-3 max-w-3xl text-sm text-muted">{HOME.feeLead}</p>
          </Reveal>
          <div className="mt-8 max-w-xl border border-line bg-panel p-6">
            <p className="text-xl font-semibold">{HOME.feeAmount}</p>
            <p className="mt-2 text-sm text-muted">{HOME.feeIncludes}</p>
            <p className="mt-4 text-sm">
              <span className="font-semibold">Tax:</span>{" "}
              <span className="text-muted">{HOME.feeTax}</span>
            </p>
            <p className="mt-2 text-sm">
              <span className="font-semibold">Payment:</span>{" "}
              <span className="text-muted">{HOME.feePayment}</span>
            </p>
            <p className="mono mt-4 text-xs text-gold">{HOME.feeTermsNote}</p>
          </div>
        </div>
      </section>

      {/* Admission journey */}
      <section id="admission" className="border-b border-line">
        <div className="mx-auto max-w-5xl px-4 py-14 md:px-6 md:py-16">
          <Reveal>
            <h2 className="mono text-xs text-mint">ADMISSION</h2>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight md:text-3xl">
              {HOME.admissionTitle}
            </h3>
            <p className="mt-3 max-w-3xl text-sm text-muted">{HOME.admissionLead}</p>
          </Reveal>
          <ol className="mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
            {HOME.admissionStages.map((stage, i) => (
              <li
                key={stage}
                className="border border-line bg-panel px-4 py-3 text-sm"
              >
                <span className="mono text-[0.65rem] text-mint">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-1 font-semibold">{stage}</p>
              </li>
            ))}
          </ol>
          <details className="mt-8 border border-line bg-panel">
            <summary className="cursor-pointer px-4 py-3 text-sm font-semibold hover:text-mint">
              See the full selection journey ↓
            </summary>
            <ol className="border-t border-line px-4 py-4">
              {HOME.admissionSteps.map((step, i) => (
                <li
                  key={step}
                  className="flex gap-3 border-b border-line/50 py-2 text-sm last:border-0"
                >
                  <span className="mono text-xs text-muted">{i + 1}</span>
                  <span className="text-muted">{step}</span>
                </li>
              ))}
            </ol>
          </details>
          <p
            className="mono mt-6 border border-gold/40 bg-gold/10 px-4 py-3 text-xs text-gold"
            role="status"
          >
            {HOME.deadlineNotice}
          </p>
        </div>
      </section>

      {/* Place strip */}
      <section className="relative min-h-[40vh] overflow-hidden border-b border-line">
        <Image
          src={MEDIA.place.src}
          alt={MEDIA.place.alt}
          fill
          sizes="100vw"
          className="object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-bg/70" />
        <div className="relative mx-auto flex min-h-[40vh] max-w-5xl flex-col justify-end px-4 py-12 md:px-6">
          <p className="mono text-xs text-gold">{MEDIA.place.credit}</p>
          <h2 className="mt-2 text-3xl font-semibold md:text-4xl">
            {HOME.placeTitle}
          </h2>
          <p className="mt-2 max-w-lg text-sm text-muted">{HOME.placeLead}</p>
          <Link
            href="/cohort"
            className="mt-6 inline-flex h-11 w-fit items-center border border-mint px-5 text-sm font-semibold text-mint hover:bg-mint hover:text-[var(--mint-ink)]"
          >
            View Founder-Being LaunchPad Cohort 1 →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-mint text-[var(--mint-ink)]">
        <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-12 md:flex-row md:items-center md:justify-between md:px-6">
          <div>
            <p className="mono text-xs opacity-70">{HOME.finalCtaEyebrow}</p>
            <p className="mt-1 text-xl font-semibold md:text-2xl">
              {HOME.finalCtaTitle}
            </p>
          </div>
          <Link
            href="/apply"
            className="inline-flex h-12 items-center bg-bg px-6 text-sm font-bold text-fg transition hover:opacity-90 active:scale-[0.98]"
          >
            {HOME.finalCtaButton}
          </Link>
        </div>
      </section>
    </>
  );
}
