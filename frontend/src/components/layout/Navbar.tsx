// src/components/layout/Navbar.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV } from "@/lib/constants";

function cx(...classes: Array<string | false | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 -mx-4 border-b border-zinc-800/60 bg-zinc-950/60 px-4 backdrop-blur sm:-mx-6 sm:px-6 lg:-mx-10 lg:px-10">
      <nav className="mx-auto flex h-16 max-w-[1400px] items-center justify-between">
        <Link href="/" className="group inline-flex items-baseline gap-2">
          <span className="font-serif text-xl tracking-tight">Torre Azhari</span>
          <span className="text-xs font-semibold tracking-[0.18em] text-zinc-400">
            PREMIUM
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cx(
                  "rounded-full px-4 py-2 text-sm transition",
                  active
                    ? "bg-zinc-100 text-zinc-950"
                    : "text-zinc-300 hover:bg-zinc-900 hover:text-zinc-100"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <Link
          href={NAV[NAV.length - 1].href}
          className="rounded-full border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-100 transition hover:bg-zinc-900"
        >
          {NAV[NAV.length - 1].label}
        </Link>
      </nav>
    </header>
  );
}
