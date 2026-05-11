"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

type Status = "LIVE" | "RESULT" | "UPCOMING";

type Mini = {
  status: Status;
  series: string;
  t1: { code: string; score?: string; overs?: string; color: string };
  t2: { code: string; score?: string; overs?: string; color: string };
  note: string;
};

const FEED: Mini[] = [
  {
    status: "LIVE",
    series: "DPL · MD 7",
    t1: { code: "BUT", score: "168/4", overs: "16.2", color: "#00BFFF" },
    t2: { code: "NAG", color: "#FF7A00" },
    note: "BUT need 12 off 22",
  },
  {
    status: "LIVE",
    series: "DPL · MD 7",
    t1: { code: "VID", score: "92/2", overs: "9.0", color: "#7c3aed" },
    t2: { code: "KAM", score: "188/6", overs: "20.0", color: "#FF7A00" },
    note: "Chasing 189 · RR 10.22",
  },
  {
    status: "RESULT",
    series: "DPL · MD 6",
    t1: { code: "HIN", score: "144/8", overs: "20.0", color: "#10b981" },
    t2: { code: "KOR", score: "146/4", overs: "18.4", color: "#00BFFF" },
    note: "KOR won by 6 wkts",
  },
  {
    status: "UPCOMING",
    series: "DPL · MD 8",
    t1: { code: "WAR", color: "#f59e0b" },
    t2: { code: "AMR", color: "#ef4444" },
    note: "Today · 7:30 PM IST",
  },
  {
    status: "RESULT",
    series: "DPL · MD 6",
    t1: { code: "BUT", score: "201/3", overs: "20.0", color: "#00BFFF" },
    t2: { code: "VID", score: "188/9", overs: "20.0", color: "#7c3aed" },
    note: "BUT won by 13 runs",
  },
  {
    status: "UPCOMING",
    series: "DPL · MD 8",
    t1: { code: "NAG", color: "#FF7A00" },
    t2: { code: "HIN", color: "#10b981" },
    note: "Tomorrow · 8:00 PM IST",
  },
  {
    status: "LIVE",
    series: "DPL · MD 7",
    t1: { code: "AMR", score: "76/1", overs: "7.4", color: "#ef4444" },
    t2: { code: "WAR", color: "#f59e0b" },
    note: "Powerplay · 1st innings",
  },
];

const TABS: { key: "ALL" | Status; label: string }[] = [
  { key: "ALL", label: "All" },
  { key: "LIVE", label: "Live" },
  { key: "RESULT", label: "Recent" },
  { key: "UPCOMING", label: "Upcoming" },
];

export default function ScoreStrip() {
  const [tab, setTab] = useState<(typeof TABS)[number]["key"]>("ALL");

  const filtered =
    tab === "ALL" ? FEED : FEED.filter((m) => m.status === tab);

  const scrollBy = (dir: 1 | -1) => {
    const el = document.getElementById("score-strip-scroll");
    if (!el) return;
    el.scrollBy({ left: dir * 360, behavior: "smooth" });
  };

  return (
    <section
      id="scores"
      aria-label="Live scores strip"
      className="bg-surface border-b border-line"
    >
      <div className="container-x py-3">
        {/* Header row */}
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="chip chip-live">
              <span className="badge-live" />
              Live
            </span>
            <span className="font-display text-[13px] font-bold text-ink">
              Match Scores
            </span>
            <span className="hidden text-xs text-muted sm:inline">
              · Vidarbha T20 Slam
            </span>
          </div>

          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-1 rounded-md border border-line bg-surfaceAlt p-0.5 sm:flex">
              {TABS.map((t) => {
                const active = t.key === tab;
                return (
                  <button
                    key={t.key}
                    type="button"
                    onClick={() => setTab(t.key)}
                    className={`rounded px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide transition ${
                      active
                        ? "bg-navy text-white"
                        : "text-muted hover:text-ink"
                    }`}
                  >
                    {t.label}
                  </button>
                );
              })}
            </div>
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => scrollBy(-1)}
                aria-label="Scroll left"
                className="grid h-7 w-7 place-items-center rounded border border-line bg-surface text-muted transition hover:border-flame hover:text-flame"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() => scrollBy(1)}
                aria-label="Scroll right"
                className="grid h-7 w-7 place-items-center rounded border border-line bg-surface text-muted transition hover:border-flame hover:text-flame"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Scroll rail */}
        <div
          id="score-strip-scroll"
          className="-mx-4 mt-3 flex gap-2.5 overflow-x-auto px-4 pb-1"
          style={{ scrollSnapType: "x mandatory" }}
        >
          {filtered.map((m, i) => (
            <ScoreCard key={i} m={m} />
          ))}
          {filtered.length === 0 && (
            <div className="flex w-full items-center justify-center py-6 text-sm text-muted">
              No matches in this tab.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function ScoreCard({ m }: { m: Mini }) {
  return (
    <div
      className="card-hover card flex w-[300px] shrink-0 flex-col gap-2 px-3 py-2.5"
      style={{ scrollSnapAlign: "start" }}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          {m.status === "LIVE" && (
            <span className="chip chip-live">
              <span className="badge-live" />
              Live
            </span>
          )}
          {m.status === "RESULT" && (
            <span className="chip chip-result">Result</span>
          )}
          {m.status === "UPCOMING" && (
            <span className="chip chip-upcoming">Upcoming</span>
          )}
          <span className="text-[10px] font-semibold uppercase tracking-wide text-muted">
            {m.series}
          </span>
        </div>
        {m.status === "LIVE" && (
          <Play className="h-3 w-3 fill-flame text-flame" />
        )}
      </div>

      <TeamLine team={m.t1} />
      <TeamLine team={m.t2} />

      <div className="border-t border-lineSoft pt-1.5 text-[11px] leading-tight text-muted">
        {m.note}
      </div>
    </div>
  );
}

function TeamLine({ team }: { team: Mini["t1"] }) {
  return (
    <div className="flex items-center justify-between text-[13px]">
      <div className="flex items-center gap-2">
        <span
          className="grid h-5 w-5 place-items-center rounded text-[9px] font-black text-white"
          style={{ background: team.color }}
        >
          {team.code.slice(0, 1)}
        </span>
        <span className="font-display font-bold text-ink">{team.code}</span>
      </div>
      <div className="tabular text-right">
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
          <span className="text-[12px] text-muted">Yet to bat</span>
        )}
      </div>
    </div>
  );
}
