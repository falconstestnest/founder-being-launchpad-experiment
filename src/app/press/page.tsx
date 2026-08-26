import type { Metadata } from "next";
import Link from "next/link";
import { PRESS } from "@/lib/copy";

export const metadata: Metadata = {
  title: "Press",
  description: "Press releases and news from Founder-Being LaunchPad.",
};

export default function PressPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 md:px-6 md:py-16">
      <p className="mono text-xs text-mint">PRESS RELEASES</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
        Official news and announcements
      </h1>
      <ul className="mt-10 border-t border-line">
        {PRESS.map((p) => (
          <li key={p.slug} className="border-b border-line py-6">
            <p className="mono text-[0.65rem] text-muted">{p.date}</p>
            <h2 className="mt-2 text-lg font-semibold">{p.title}</h2>
            <p className="mt-2 text-sm text-muted">{p.dek}</p>
            <Link
              href={`/press/${p.slug}`}
              className="mt-3 inline-block text-sm text-mint hover:underline"
            >
              Read release →
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
