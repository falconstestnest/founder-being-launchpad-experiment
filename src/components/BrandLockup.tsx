import Image from "next/image";
import Link from "next/link";

export function BrandLockup({
  href = "/",
  compact = true,
}: {
  href?: string;
  compact?: boolean;
}) {
  return (
    <Link href={href} className="flex shrink-0 items-center gap-2.5">
      <Image
        src="/brand/monogram-mint.jpg"
        alt=""
        width={compact ? 36 : 48}
        height={compact ? 36 : 48}
        className="h-9 w-9 object-cover md:h-10 md:w-10"
        priority={compact}
      />
      <span className="flex flex-col leading-none">
        <span className="text-[0.58rem] font-medium tracking-[0.22em] text-fg">
          FOUNDER-BEING
        </span>
        <span className="mt-0.5 text-[1.05rem] font-bold tracking-tight text-fg">
          Launchpad
        </span>
      </span>
    </Link>
  );
}
