import Link from "next/link";
import { BrandLockup } from "@/components/BrandLockup";
import { NAV, NAV_MORE, SITE } from "@/lib/copy";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-5xl px-4 py-10 md:px-6">
        <BrandLockup compact={false} />
        <p className="mt-3 text-xs text-muted">A practical startup-building programme</p>
        <nav className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs text-muted">
          {[...NAV.filter((n) => n.href !== "/programme/how-it-works"), ...NAV_MORE.filter((n) => n.href !== "/faq")].map(
            (item) => (
              <Link key={item.href} href={item.href} className="hover:text-fg">
                {item.label}
              </Link>
            ),
          )}
          <Link href="/apply" className="hover:text-fg">
            Apply
          </Link>
          <a href={`mailto:${SITE.supportEmail}`} className="hover:text-fg">
            {SITE.supportEmail}
          </a>
        </nav>
        <p className="mono mt-6 text-[0.65rem] text-muted">local v3 · no fluff build</p>
      </div>
    </footer>
  );
}
