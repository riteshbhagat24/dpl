"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { BarChart3, Menu, Search, X, Youtube } from "lucide-react";
import { LINKS } from "@/lib/links";

const NAV: { label: string; href: string }[] = [
  { label: "Home", href: "#top" },
  { label: "Live Scores", href: "#scores" },
  { label: "Match Center", href: "#match-center" },
  { label: "News", href: "#news" },
  { label: "Schedule", href: "#schedule" },
  { label: "Stats", href: "#leaderboard" },
  { label: "Videos", href: "#videos" },
  { label: "Teams", href: "#teams" },
];

function openPopup() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("dpl:open-link-popup"));
  }
}

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [stuck, setStuck] = useState(false);

  useEffect(() => {
    const onScroll = () => setStuck(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40">
      <div
        className={`bg-navy-800 text-white transition-shadow duration-200 ${
          stuck ? "shadow-[0_8px_24px_-12px_rgba(10,21,48,0.45)]" : ""
        }`}
      >
        <div className="container-x flex h-16 items-center gap-5">
          <Link href="#top" className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-flame text-bg shadow-[0_2px_0_rgba(0,0,0,0.15)]">
              <span className="text-[11px] font-black tracking-tighter text-white">
                DPL
              </span>
            </span>
            <div className="leading-tight">
              <div className="font-display text-[15px] font-bold tracking-tight">
                DPL Butibori
              </div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-white/55">
                Powered by TennisCricket.in
              </div>
            </div>
          </Link>

          <nav className="ml-4 hidden items-center gap-0.5 lg:flex">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="group relative rounded-md px-3 py-2 text-[13px] font-medium text-white/85 transition hover:text-white"
              >
                {n.label}
                <span className="pointer-events-none absolute inset-x-3 -bottom-0 h-[3px] scale-x-0 rounded-t bg-flame transition-transform duration-200 group-hover:scale-x-100" />
              </a>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-2">
            <button
              type="button"
              aria-label="Search"
              className="hidden h-9 w-9 items-center justify-center rounded-md text-white/85 transition hover:bg-white/10 hover:text-white md:inline-flex"
            >
              <Search className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={openPopup}
              className="hidden h-9 items-center gap-1.5 rounded-md border border-white/15 bg-white/5 px-3 text-[13px] font-semibold text-white/95 transition hover:border-flame hover:text-flame md:inline-flex"
            >
              <BarChart3 className="h-4 w-4" />
              Watch
            </button>
            <a
              href={LINKS.dpl}
              target="_blank"
              rel="noreferrer"
              className="hidden h-9 items-center gap-1.5 rounded-md bg-flame px-3 text-[13px] font-bold text-white transition hover:bg-flame-600 md:inline-flex"
            >
              <Youtube className="h-4 w-4" />
              Subscribe
            </a>

            <button
              type="button"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              className="grid h-10 w-10 place-items-center rounded-md text-white lg:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {open && (
          <div className="border-t border-white/10 bg-navy-900 lg:hidden">
            <nav className="container-x py-3">
              <ul className="flex flex-col">
                {NAV.map((n) => (
                  <li key={n.href}>
                    <a
                      href={n.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-md px-2 py-2.5 text-sm font-medium text-white/85 hover:bg-white/5 hover:text-white"
                    >
                      {n.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-3 flex gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
                    openPopup();
                  }}
                  className="flex flex-1 items-center justify-center gap-2 rounded-md border border-white/15 bg-white/5 py-2 text-sm font-semibold text-white"
                >
                  <BarChart3 className="h-4 w-4" />
                  Watch live
                </button>
                <a
                  href={LINKS.dpl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex flex-1 items-center justify-center gap-2 rounded-md bg-flame py-2 text-sm font-bold text-white"
                >
                  <Youtube className="h-4 w-4" />
                  Subscribe
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
