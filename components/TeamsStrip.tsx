"use client";

import { ChevronRight } from "lucide-react";

const TEAMS = [
  { code: "BUT", name: "Butibori Blazers", color: "#00BFFF" },
  { code: "NAG", name: "Nagpur Nightriders", color: "#FF7A00" },
  { code: "VID", name: "Vidarbha Vipers", color: "#7c3aed" },
  { code: "KAM", name: "Kamptee Kings", color: "#FF7A00" },
  { code: "HIN", name: "Hingna Hunters", color: "#10b981" },
  { code: "KOR", name: "Koradi Warriors", color: "#00BFFF" },
  { code: "WAR", name: "Wardha Wizards", color: "#f59e0b" },
  { code: "AMR", name: "Amravati Attackers", color: "#ef4444" },
];

export default function TeamsStrip() {
  return (
    <section id="teams" aria-label="Teams">
      <div className="section-title">
        <h2>Teams</h2>
        <a href="#top">View all squads →</a>
      </div>

      <div className="card grid grid-cols-2 divide-x divide-y divide-line overflow-hidden sm:grid-cols-4 lg:grid-cols-8">
        {TEAMS.map((t) => (
          <a
            key={t.code}
            href="#top"
            className="group flex items-center gap-3 px-3.5 py-3 transition hover:bg-surfaceAlt"
          >
            <span
              className="grid h-9 w-9 shrink-0 place-items-center rounded-md text-[10px] font-black text-white"
              style={{
                background: `linear-gradient(135deg, ${t.color} 0%, ${t.color}cc 100%)`,
              }}
            >
              {t.code}
            </span>
            <div className="min-w-0 flex-1">
              <div className="truncate font-display text-[12px] font-bold text-ink">
                {t.name}
              </div>
              <div className="text-[10.5px] uppercase tracking-wide text-muted">
                Squad · Stats
              </div>
            </div>
            <ChevronRight className="h-4 w-4 text-muted transition group-hover:translate-x-0.5 group-hover:text-flame" />
          </a>
        ))}
      </div>
    </section>
  );
}
