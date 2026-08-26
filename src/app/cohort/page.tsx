import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBand } from "@/components/CtaBand";
import { COHORT, FAQ, SITE } from "@/lib/copy";
import { MEDIA } from "@/lib/media";

export const metadata: Metadata = {
  title: "Cohort",
  description: "Cohort 1 specifications for Founder-Being LaunchPad.",
};

const FACTS: [string, string][] = [
  ["COHORT", `Founder-Being LaunchPad ${COHORT.label}`],
  ["STATUS", COHORT.status],
  ["EOI DEADLINE", COHORT.deadline],
  ["START", COHORT.start],
  ["DURATION", COHORT.duration],
  ["MODE", COHORT.mode],
  ["CITY", COHORT.city],
  ["VENUE", COHORT.venue],
  ["CADENCE", COHORT.commitment],
  ["SEATS", COHORT.seats],
  ["FEE", `${COHORT.fee} (after offer)`],
  ["CONTACT", SITE.supportEmail],
];

export default function CohortPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 md:px-6 md:py-16">
      <div className="relative mb-10 min-h-[220px] overflow-hidden border border-line">
        <Image
          src={MEDIA.place.src}
          alt={MEDIA.place.alt}
          fill
          sizes="100vw"
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/80 to-transparent" />
        <div className="relative p-6 md:p-8">
            <p className="mono text-xs text-mint">COHORT 1 · PLACE</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-5xl">
            Founder-Being LaunchPad Cohort 1
          </h1>
          <p className="mono mt-3 text-[0.65rem] text-gold">{MEDIA.place.credit}</p>
        </div>
      </div>

      <div className="border border-line">
        <table className="w-full text-left text-sm">
          <tbody>
            {FACTS.map(([k, v], i) => (
              <tr key={k} className={i % 2 ? "bg-panel" : "bg-bg"}>
                <th className="mono w-[36%] border-b border-line px-4 py-3 text-[0.7rem] font-normal text-muted align-top">
                  {k}
                </th>
                <td className="border-b border-line px-4 py-3 font-medium">{v}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mono mt-6 text-xs text-muted">
        EOI FREE · NO PAYMENT AT APPLY · ADMISSION SELECTIVE
      </p>

      <p className="mt-6 max-w-2xl text-sm text-muted">
        Fee {COHORT.fee} after formal offer. Tax and full payment terms disclosed
        before payment. EOI and preliminary assessment are free.
      </p>

      <h2 className="mt-14 text-xl font-semibold">Frequently asked questions</h2>
      <dl className="mt-6 border-t border-line">
        {FAQ.slice(0, 6).map((item) => (
          <div key={item.q} className="border-b border-line py-5">
            <dt className="font-semibold">{item.q}</dt>
            <dd className="mt-2 text-sm leading-relaxed text-muted">{item.a}</dd>
          </div>
        ))}
      </dl>
      <Link href="/faq" className="mt-4 inline-block text-sm text-mint hover:underline">
        All questions →
      </Link>
      <div className="mt-10">
        <Link
          href="/apply"
          className="inline-flex h-12 items-center bg-mint px-6 text-sm font-bold text-[var(--mint-ink)]"
        >
          Express interest
        </Link>
      </div>
      <div className="-mx-4 mt-14 md:-mx-6">
        <CtaBand />
      </div>
    </div>
  );
}
