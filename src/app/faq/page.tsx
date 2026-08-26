import type { Metadata } from "next";
import { CtaBand } from "@/components/CtaBand";
import { FAQ } from "@/lib/copy";

export const metadata: Metadata = {
  title: "FAQ",
  description: "FAQ — Founder-Being LaunchPad.",
};

export default function FaqPage() {
  return (
    <>
    <div className="mx-auto max-w-3xl px-4 py-12 md:px-6 md:py-16">
      <p className="mono text-xs text-mint">FAQ</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight">Answers</h1>
      <dl className="mt-10 border-t border-line">
        {FAQ.map((item) => (
          <div key={item.q} className="border-b border-line py-5">
            <dt className="font-semibold">{item.q}</dt>
            <dd className="mt-2 text-sm leading-relaxed text-muted">{item.a}</dd>
          </div>
        ))}
      </dl>
    </div>
      <CtaBand />
    </>
  );
}
