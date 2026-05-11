"use client";

import { useState } from "react";
import { Calendar, MapPin, Play, Tv } from "lucide-react";

type Status = "LIVE" | "RECENT" | "UPCOMING";

type Fixture = {
  id: string;
  status: Status;
  matchNo: number;
  date: string;
  time: string;
  venue: string;
  t1: { name: string; code: string; color: string; score?: string; overs?: string };
  t2: { name: string; code: string; color: string; score?: string; overs?: string };
  result?: string;
  note?: string;
};

const FIXTURES: Fixture[] = [
  {
    id: "f1",
    status: "LIVE",
    matchNo: 17,
    date: "Today",
    time: "7:30 PM",
    venue: "DPL Arena, Butibori",
    t1: { name: "Butibori Blazers", code: "BUT", color: "#00BFFF", score: "168/4", overs: "16.2" },
    t2: { name: "Nagpur Nightriders", code: "NAG", color: "#FF7A00", score: "187/9", overs: "20.0" },
    note: "BUT need 12 off 22",
  },
  {
    id: "f2",
    status: "LIVE",
    matchNo: 18,
    date: "Today",
    time: "8:00 PM",
    venue: "MIDC Ground",
    t1: { name: "Vidarbha Vipers", code: "VID", color: "#7c3aed", score: "92/2", overs: "9.0" },
    t2: { name: "Kamptee Kings", code: "KAM", color: "#FF7A00", score: "188/6", overs: "20.0" },
    note: "VID chasing 189",
  },
  {
    id: "f3",
    status: "UPCOMING",
    matchNo: 19,
    date: "Tomorrow",
    time: "7:30 PM",
    venue: "Hingna Cricket Park",
    t1: { name: "Wardha Wizards", code: "WAR", color: "#f59e0b" },
    t2: { name: "Amravati Attackers", code: "AMR", color: "#ef4444" },
  },
  {
    id: "f4",
    status: "UPCOMING",
    matchNo: 20,
    date: "Tomorrow",
    time: "8:00 PM",
    venue: "DPL Arena, Butibori",
    t1: { name: "Nagpur Nightriders", code: "NAG", color: "#FF7A00" },
    t2: { name: "Hingna Hunters", code: "HIN", color: "#10b981" },
  },
  {
    id: "f5",
    status: "RECENT",
    matchNo: 16,
    date: "Yesterday",
    time: "7:30 PM",
    venue: "Hingna Cricket Park",
    t1: { name: "Hingna Hunters", code: "HIN", color: "#10b981", score: "144/8", overs: "20.0" },
    t2: { name: "Koradi Warriors", code: "KOR", color: "#00BFFF", score: "146/4", overs: "18.4" },
    result: "Koradi Warriors won by 6 wickets",
  },
  {
    id: "f6",
    status: "RECENT",
    matchNo: 15,
    date: "2 days ago",
    time: "7:30 PM",
    venue: "DPL Arena, Butibori",
    t1: { name: "Butibori Blazers", code: "BUT", color: "#00BFFF", score: "201/3", overs: "20.0" },
    t2: { name: "Vidarbha Vipers", code: "VID", color: "#7c3aed", score: "188/9", overs: "20.0" },
    result: "Butibori Blazers won by 13 runs",
  },
];

const TABS: { key: Status | "ALL"; label: string }[] = [
  { key: "ALL", label: "All Fixtures" },
  { key: "LIVE", label: "Live" },
  { key: "UPCOMING", label: "Upcoming" },
  { key: "RECENT", label: "Recent" },
];

export default function Schedule() {
  const [tab, setTab] = useState<(typeof TABS)[number]["key"]>("ALL");
  const rows = tab === "ALL" ? FIXTURES : FIXTURES.filter((f) => f.status === tab);

  return (
    <section id="schedule" aria-label="Schedule">
      <div className="section-title">
        <h2>Match Schedule</h2>
        <a href="#top">View season →</a>
      </div>

      <div className="card overflow-hidden">
        {/* Tabs */}
        <div className="flex items-center gap-1 border-b border-line bg-surfaceAlt px-3 py-2 overflow-x-auto">
          {TABS.map((t) => {
            const active = t.key === tab;
            return (
              <button
                key={t.key}
                type="button"
                onClick={() => setTab(t.key)}
                className={`shrink-0 rounded-md px-3 py-1.5 text-[12px] font-semibold transition ${
                  active
                    ? "bg-navy text-white"
                    : "text-muted hover:bg-surface hover:text-ink"
                }`}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        {/* Rows */}
        <ul className="divide-y divide-line">
          {rows.map((f) => (
            <li
              key={f.id}
              className="grid grid-cols-1 items-center gap-3 px-4 py-3.5 transition hover:bg-surfaceAlt md:grid-cols-[110px_1fr_auto_140px]"
            >
              {/* Match meta */}
              <div className="flex items-center gap-2 text-[12px]">
                <span
                  className={`chip ${
                    f.status === "LIVE"
                      ? "chip-live"
                      : f.status === "UPCOMING"
                        ? "chip-upcoming"
                        : "chip-result"
                  }`}
                >
                  {f.status === "LIVE" && <span className="badge-live" />}
                  {f.status === "LIVE"
                    ? "Live"
                    : f.status === "UPCOMING"
                      ? "Soon"
                      : "Done"}
                </span>
                <span className="font-mono text-[11px] font-bold text-muted">
                  M{f.matchNo}
                </span>
              </div>

              {/* Teams */}
              <div className="grid grid-cols-1 gap-1.5 sm:grid-cols-2 sm:gap-3">
                <TeamLine team={f.t1} />
                <TeamLine team={f.t2} />
              </div>

              {/* Venue / time */}
              <div className="flex flex-col text-[11.5px] leading-tight text-muted md:text-right">
                <span className="inline-flex items-center gap-1 md:justify-end">
                  <Calendar className="h-3 w-3" />
                  {f.date} · {f.time}
                </span>
                <span className="mt-0.5 inline-flex items-center gap-1 md:justify-end">
                  <MapPin className="h-3 w-3" />
                  {f.venue}
                </span>
              </div>

              {/* CTA / status */}
              <div className="md:text-right">
                {f.status === "LIVE" && (
                  <a
                    href="https://youtube.com/@dplbutibori"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-md bg-flame px-2.5 py-1.5 text-[11.5px] font-bold text-white transition hover:bg-flame-600"
                  >
                    <Play className="h-3 w-3 fill-current" />
                    Watch live
                  </a>
                )}
                {f.status === "UPCOMING" && (
                  <button className="inline-flex items-center gap-1.5 rounded-md border border-line bg-surface px-2.5 py-1.5 text-[11.5px] font-semibold text-ink transition hover:border-navy hover:text-navy">
                    <Tv className="h-3 w-3" />
                    Reminder
                  </button>
                )}
                {f.status === "RECENT" && (
                  <span className="inline-flex items-center gap-1.5 text-[11.5px] font-semibold text-good">
                    {f.result?.split(" won")[0]}
                    <span className="text-muted">won</span>
                  </span>
                )}
                {f.note && f.status === "LIVE" && (
                  <div className="mt-1 hidden text-[11px] text-muted md:block">
                    {f.note}
                  </div>
                )}
              </div>
            </li>
          ))}

          {rows.length === 0 && (
            <li className="px-4 py-8 text-center text-[13px] text-muted">
              No matches in this tab.
            </li>
          )}
        </ul>
      </div>
    </section>
  );
}

function TeamLine({ team }: { team: Fixture["t1"] }) {
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="flex min-w-0 items-center gap-2">
        <span
          className="grid h-7 w-7 shrink-0 place-items-center rounded text-[10px] font-black text-white"
          style={{ background: team.color }}
        >
          {team.code}
        </span>
        <span className="truncate font-display text-[13px] font-bold text-ink">
          {team.name}
        </span>
      </div>
      <div className="shrink-0 tabular text-right text-[13px]">
        {team.score ? (
          <>
            <span className="font-mono font-bold text-ink">{team.score}</span>
            {team.overs && (
              <span className="ml-1 text-[11px] text-muted">
                ({team.overs})
              </span>
            )}
          </>
        ) : (
          <span className="text-[11.5px] text-muted">—</span>
        )}
      </div>
    </div>
  );
}
