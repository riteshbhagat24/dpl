"use client";

import { LINKS } from "@/lib/links";
import { MapPin, Mail, Youtube, Play } from "lucide-react";

const COLUMNS = [
  {
    title: "Cricket",
    links: [
      "Live Scores",
      "Match Center",
      "Schedule",
      "Standings",
      "Top Performers",
      "Archive",
    ],
  },
  {
    title: "Tournament",
    links: [
      "Vidarbha T20 Slam",
      "Teams",
      "Venues",
      "Officials",
      "Auction",
      "Rules",
    ],
  },
  {
    title: "Media",
    links: [
      "Latest Videos",
      "Highlights",
      "Player Diaries",
      "Press Releases",
      "Image Library",
      "Brand Kit",
    ],
  },
  {
    title: "Network",
    links: [
      "TennisCricket.in",
      "DPL Butibori YouTube",
      "Partnerships",
      "Careers",
      "Contact",
      "About",
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="mt-10 border-t border-line bg-white">
      <div className="container-x py-10">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-md bg-flame text-white">
                <span className="text-[11px] font-black tracking-tighter">
                  DPL
                </span>
              </span>
              <div>
                <div className="font-display text-[15px] font-bold text-ink">
                  DPL Butibori
                </div>
                <div className="text-[10.5px] uppercase tracking-[0.18em] text-muted">
                  Powered by TennisCricket.in
                </div>
              </div>
            </div>

            <p className="mt-4 max-w-xs text-[13px] leading-relaxed text-muted">
              Vidarbha&apos;s premier tennis-ball cricket league — live scores,
              news and videos from Butibori, Nagpur and beyond.
            </p>

            <div className="mt-4 space-y-1.5 text-[12.5px] text-muted">
              <div className="inline-flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-flame" />
                Butibori · Nagpur · Maharashtra · India
              </div>
              <div>
                <a
                  href="mailto:hello@dplbutibori.in"
                  className="inline-flex items-center gap-2 text-link hover:text-flame"
                >
                  <Mail className="h-3.5 w-3.5" />
                  hello@dplbutibori.in
                </a>
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-2">
              <a
                href={LINKS.dpl}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-md border border-line bg-surfaceAlt px-3 py-2.5 transition hover:border-flame"
              >
                <span className="flex items-center gap-2.5">
                  <Youtube className="h-4 w-4 text-flame" />
                  <span className="text-[12.5px] font-semibold text-ink">
                    @dplbutibori
                  </span>
                </span>
                <span className="text-[10.5px] font-bold uppercase tracking-wide text-flame">
                  Subscribe →
                </span>
              </a>
              <a
                href={LINKS.tennisCricket}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-md border border-line bg-surfaceAlt px-3 py-2.5 transition hover:border-navy"
              >
                <span className="flex items-center gap-2.5">
                  <Play className="h-4 w-4 fill-navy text-navy" />
                  <span className="text-[12.5px] font-semibold text-ink">
                    @tenniscricket.in_official
                  </span>
                </span>
                <span className="text-[10.5px] font-bold uppercase tracking-wide text-navy">
                  Watch →
                </span>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 lg:col-span-8">
            {COLUMNS.map((c) => (
              <div key={c.title}>
                <h4 className="font-display text-[12px] font-bold uppercase tracking-[0.14em] text-ink">
                  {c.title}
                </h4>
                <ul className="mt-3 space-y-2 text-[12.5px]">
                  {c.links.map((l) => (
                    <li key={l}>
                      <a
                        href="#top"
                        className="text-muted transition hover:text-flame"
                      >
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-line bg-surfaceAlt">
        <div className="container-x flex flex-col items-start justify-between gap-3 py-4 text-[11.5px] text-muted md:flex-row md:items-center">
          <div>
            © {new Date().getFullYear()} DPL Butibori. All rights reserved.
            Tennis-ball cricket from Vidarbha, Maharashtra.
          </div>
          <div className="flex items-center gap-4">
            <a href="#top" className="hover:text-flame">
              Privacy
            </a>
            <a href="#top" className="hover:text-flame">
              Terms
            </a>
            <a href="#top" className="hover:text-flame">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
