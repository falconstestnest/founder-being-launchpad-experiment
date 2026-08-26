"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { COHORT, NAV, NAV_MORE, SITE } from "@/lib/copy";

function NavLink({ href, label }: { href: string; label: string }) {
  const path = usePathname();
  const on =
    href === "/"
      ? path === "/"
      : path === href || path.startsWith(`${href}/`);
  return (
    <Link
      href={href}
      className={on ? "text-fg" : "text-muted hover:text-fg"}
    >
      {label}
    </Link>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg">
      <div className="mx-auto flex h-12 max-w-5xl items-center justify-between gap-3 px-4 md:px-6">
        <Link href="/" className="shrink-0 text-sm font-semibold tracking-tight">
          {SITE.short}
          <span className="mono ml-2 hidden text-xs font-normal text-muted sm:inline">
            / {COHORT.label.toLowerCase().replace(" ", "")}
          </span>
        </Link>

        <nav className="hidden items-center gap-4 text-sm lg:flex">
          {NAV.map((item) => (
            <NavLink key={item.href} {...item} />
          ))}
          <details className="relative">
            <summary className="cursor-pointer list-none text-muted hover:text-fg">
              More
            </summary>
            <div className="absolute right-0 mt-2 min-w-36 border border-line bg-panel py-1">
              {NAV_MORE.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-1.5 text-sm text-muted hover:bg-bg hover:text-fg"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </details>
          <Link
            href="/apply"
            className="bg-mint px-3 py-1.5 text-sm font-bold text-[var(--mint-ink)] hover:brightness-110"
          >
            Express interest
          </Link>
        </nav>

        <div className="flex items-center gap-2 lg:hidden">
          <details className="relative">
            <summary className="mono cursor-pointer list-none px-2 py-1 text-xs text-muted">
              MENU
            </summary>
            <div className="absolute right-0 z-50 mt-2 w-52 border border-line bg-panel py-1">
              {[...NAV, ...NAV_MORE].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 text-sm text-muted hover:bg-bg hover:text-fg"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </details>
          <Link
            href="/apply"
            className="bg-mint px-3 py-1.5 text-sm font-bold text-[var(--mint-ink)]"
          >
            Apply
          </Link>
        </div>
      </div>
    </header>
  );
}
