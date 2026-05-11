"use client";

import { useState } from "react";
import { Crown, Flame, Target, Trophy } from "lucide-react";

type StandingsRow = {
  pos: number;
  team: string;
  code: string;
  color: string;
  p: number;
  w: number;
  l: number;
  nrr: string;
  pts: number;
};

const STANDINGS: StandingsRow[] = [
  {
    pos: 1,
    team: "Butibori Blazers",
    code: "BUT",
    color: "#00BFFF",
    p: 7,
    w: 6,
    l: 1,
    nrr: "+1.42",
    pts: 12,
  },
  {
    pos: 2,
    team: "Kamptee Kings",
    code: "KAM",
    color: "#FF7A00",
    p: 7,
    w: 5,
    l: 2,
    nrr: "+0.88",
    pts: 10,
  },
  {
    pos: 3,
    team: "Vidarbha Vipers",
    code: "VID",
    color: "#7c3aed",
    p: 7,
    w: 4,
    l: 3,
    nrr: "+0.31",
    pts: 8,
  },
  {
    pos: 4,
    team: "Koradi Warriors",
    code: "KOR",
    color: "#f59e0b",
    p: 7,
    w: 4,
    l: 3,
    nrr: "+0.12",
    pts: 8,
  },
  {
    pos: 5,
    team: "Nagpur Nightriders",
    code: "NAG",
    color: "#FF7A00",
    p: 7,
    w: 3,
    l: 4,
    nrr: "-0.22",
    pts: 6,
  },
  {
    pos: 6,
    team: "Hingna Hunters",
    code: "HIN",
    color: "#10b981",
    p: 7,
    w: 2,
    l: 5,
    nrr: "-0.61",
    pts: 4,
  },
];

const RUNS = [
  { rank: 1, name: "A. Patil", code: "BUT", color: "#00BFFF", m: 7, v: 412 },
  { rank: 2, name: "M. Bhonsle", code: "KAM", color: "#FF7A00", m: 7, v: 386 },
  { rank: 3, name: "T. Deshmukh", code: "VID", color: "#7c3aed", m: 7, v: 351 },
  { rank: 4, name: "K. Wankhede", code: "HIN", color: "#10b981", m: 6, v: 318 },
  { rank: 5, name: "P. Gajbhiye", code: "KOR", color: "#f59e0b", m: 7, v: 297 },
];

const WICKETS = [
  { rank: 1, name: "S. Khedkar", code: "NAG", color: "#FF7A00", m: 7, v: 17 },
  { rank: 2, name: "D. Khobragade", code: "VID", color: "#7c3aed", m: 7, v: 15 },
  { rank: 3, name: "R. Yadav", code: "BUT", color: "#00BFFF", m: 6, v: 13 },
  { rank: 4, name: "H. Meshram", code: "HIN", color: "#10b981", m: 7, v: 12 },
  { rank: 5, name: "J. Thakre", code: "WAR", color: "#ef4444", m: 6, v: 11 },
];

export default function RankingsSidebar() {
  return (
    <aside id="leaderboard" className="space-y-5">
      <PointsTable />
      <TopPerformers />
      <FollowCard />
    </aside>
  );
}

function PointsTable() {
  return (
    <div className="card overflow-hidden">
      <div className="flex items-center justify-between border-b border-line bg-surfaceAlt px-3.5 py-2.5">
        <div className="flex items-center gap-2">
          <Trophy className="h-4 w-4 text-flame" />
          <h3 className="font-display text-[13px] font-bold text-ink">
            Points Table
          </h3>
        </div>
        <a
          href="#leaderboard"
          className="text-[10.5px] font-semibold uppercase tracking-wide text-link hover:text-flame"
        >
          Full table
        </a>
      </div>

      <div className="grid grid-cols-[24px_1fr_24px_24px_44px_28px] items-center gap-2 border-b border-line px-3.5 py-2 text-[10px] font-semibold uppercase tracking-wide text-muted">
        <span>#</span>
        <span>Team</span>
        <span className="text-right">W</span>
        <span className="text-right">L</span>
        <span className="text-right">NRR</span>
        <span className="text-right">Pts</span>
      </div>

      <ul>
        {STANDINGS.map((t) => (
          <li
            key={t.pos}
            className={`grid grid-cols-[24px_1fr_24px_24px_44px_28px] items-center gap-2 border-b border-lineSoft px-3.5 py-2 text-[12.5px] last:border-b-0 transition hover:bg-surfaceAlt ${
              t.pos <= 4 ? "bg-emerald-50/40" : ""
            }`}
          >
            <span
              className={`font-mono font-bold tabular ${
                t.pos === 1 ? "text-flame" : t.pos <= 4 ? "text-good" : "text-muted"
              }`}
            >
              {t.pos}
            </span>
            <div className="flex min-w-0 items-center gap-2">
              <span
                className="h-4 w-4 shrink-0 rounded"
                style={{ background: t.color }}
              />
              <span className="truncate font-display font-bold text-ink">
                {t.code}
              </span>
              <span className="hidden truncate text-[11px] text-muted xl:inline">
                {t.team}
              </span>
            </div>
            <span className="text-right font-mono tabular text-ink">{t.w}</span>
            <span className="text-right font-mono tabular text-muted">
              {t.l}
            </span>
            <span className="text-right font-mono tabular text-muted">
              {t.nrr}
            </span>
            <span className="text-right font-mono font-bold tabular text-ink">
              {t.pts}
            </span>
          </li>
        ))}
      </ul>

      <div className="border-t border-line bg-surfaceAlt px-3.5 py-2 text-[10.5px] uppercase tracking-wide text-muted">
        <span className="text-good">●</span> Top 4 advance to playoffs
      </div>
    </div>
  );
}

function TopPerformers() {
  const [tab, setTab] = useState<"runs" | "wickets">("runs");
  const rows = tab === "runs" ? RUNS : WICKETS;

  return (
    <div className="card overflow-hidden">
      <div className="flex items-center justify-between border-b border-line bg-surfaceAlt px-3.5 py-2.5">
        <h3 className="font-display text-[13px] font-bold text-ink">
          Top Performers
        </h3>
        <div className="flex items-center gap-1 rounded border border-line bg-surface p-0.5">
          <button
            type="button"
            onClick={() => setTab("runs")}
            className={`inline-flex items-center gap-1 rounded px-2 py-1 text-[10.5px] font-semibold uppercase tracking-wide transition ${
              tab === "runs" ? "bg-flame text-white" : "text-muted"
            }`}
          >
            <Flame className="h-3 w-3" />
            Runs
          </button>
          <button
            type="button"
            onClick={() => setTab("wickets")}
            className={`inline-flex items-center gap-1 rounded px-2 py-1 text-[10.5px] font-semibold uppercase tracking-wide transition ${
              tab === "wickets" ? "bg-navy text-white" : "text-muted"
            }`}
          >
            <Target className="h-3 w-3" />
            Wkts
          </button>
        </div>
      </div>

      <div className="grid grid-cols-[24px_1fr_28px_44px] items-center gap-2 border-b border-line px-3.5 py-2 text-[10px] font-semibold uppercase tracking-wide text-muted">
        <span>#</span>
        <span>Player</span>
        <span className="text-right">M</span>
        <span className="text-right">{tab === "runs" ? "Runs" : "Wkts"}</span>
      </div>

      <ul>
        {rows.map((p) => (
          <li
            key={p.rank}
            className="grid grid-cols-[24px_1fr_28px_44px] items-center gap-2 border-b border-lineSoft px-3.5 py-2.5 text-[12.5px] last:border-b-0 transition hover:bg-surfaceAlt"
          >
            <span className="font-mono font-bold tabular text-muted">
              {p.rank === 1 ? (
                <Crown
                  className={`h-3.5 w-3.5 ${
                    tab === "runs" ? "text-flame" : "text-navy"
                  }`}
                />
              ) : (
                p.rank
              )}
            </span>
            <div className="flex min-w-0 items-center gap-2">
              <span
                className="grid h-5 w-5 shrink-0 place-items-center rounded text-[8.5px] font-black text-white"
                style={{ background: p.color }}
              >
                {p.code}
              </span>
              <span className="truncate font-semibold text-ink">{p.name}</span>
            </div>
            <span className="text-right font-mono tabular text-muted">
              {p.m}
            </span>
            <span
              className={`text-right font-mono font-bold tabular ${
                tab === "runs" ? "text-flame" : "text-navy"
              }`}
            >
              {p.v}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FollowCard() {
  return (
    <div className="card overflow-hidden">
      <div className="border-b border-line bg-flame/[0.06] px-3.5 py-2.5">
        <h3 className="font-display text-[13px] font-bold text-ink">
          Follow DPL Butibori
        </h3>
      </div>
      <div className="px-3.5 py-3 text-[12.5px] leading-relaxed text-muted">
        Live streams, post-match shows and viral cricket clips — straight to
        your feed.
      </div>
      <div className="flex flex-col gap-2 px-3.5 pb-3.5">
        <button
          type="button"
          onClick={() => {
            if (typeof window !== "undefined") {
              window.dispatchEvent(new Event("dpl:open-link-popup"));
            }
          }}
          className="btn-orange w-full justify-center"
        >
          Watch on YouTube
        </button>
      </div>
    </div>
  );
}
