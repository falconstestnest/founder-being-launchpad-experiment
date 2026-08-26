import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PRESS, SITE } from "@/lib/copy";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return PRESS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = PRESS.find((p) => p.slug === slug);
  return { title: item?.title ?? "Press" };
}

export default async function PressReleasePage({ params }: Props) {
  const { slug } = await params;
  const item = PRESS.find((p) => p.slug === slug);
  if (!item) notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-14 md:px-6 md:py-16">
      <Link href="/press" className="mono text-xs text-muted hover:text-fg">
        ← Back to Press
      </Link>
      <p className="mono mt-6 text-[0.65rem] text-gold">{item.date}</p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
        {item.title}
      </h1>
      <p className="mt-4 text-muted">{item.dek}</p>
      <div className="mt-8 space-y-4 text-sm leading-relaxed text-muted">
        {item.body.map((p) => (
          <p key={p.slice(0, 48)}>{p}</p>
        ))}
      </div>
      <p className="mt-10 text-sm">
        Media:{" "}
        <a className="text-mint" href={`mailto:${SITE.supportEmail}`}>
          {SITE.supportEmail}
        </a>
      </p>
    </article>
  );
}
