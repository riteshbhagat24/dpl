"use client";

import { ArrowUpRight, Play, Tv } from "lucide-react";
import { LINKS } from "@/lib/links";

const RECENT_OVERS = [
  ["1", "4", "•", "1", "2", "1"],
  ["•", "1", "1", "4", "6", "1"],
  ["W", "•", "2", "1", "1", "4"],
];

export default function FeaturedMatch() {
  return (
    <section
      id="match-center"
      aria-label="Featured live match"
      className="card-hover card overflow-hidden"
    >
      {/* Top bar */}
      <div className="flex items-center justify-between gap-3 border-b border-line bg-surfaceAlt px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="chip chip-live">
            <span className="badge-live" />
            Live
          </span>
          <span className="text-[12px] font-semibold text-ink">
            Vidarbha T20 Slam · Match 7 · League Stage
          </span>
        </div>
        <a
          href={LINKS.dpl}
          target="_blank"
          rel="noreferrer"
          className="hidden items-center gap-1.5 text-[12px] font-bold uppercase tracking-wide text-flame transition hover:text-flame-700 sm:inline-flex"
        >
          <Tv className="h-3.5 w-3.5" />
          Watch on YouTube
          <ArrowUpRight className="h-3 w-3" />
        </a>
      </div>

      {/* Scoreboard */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr]">
        <TeamScore
          name="Butibori Blazers"
          short="BUT"
          color="#00BFFF"
          score="168"
          wickets="4"
          overs="16.2"
          status="batting"
          rr="10.31"
        />
        <div className="flex items-center justify-center border-y border-line bg-surfaceAlt py-3 lg:border-x lg:border-y-0 lg:py-0 lg:px-6">
          <div className="text-center">
            <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted">
              Target
            </div>
            <div className="font-display text-3xl font-black tabular text-ink">
              188
            </div>
            <div className="mt-0.5 text-[11px] text-muted">22 balls left</div>
          </div>
        </div>
        <TeamScore
          name="Nagpur Nightriders"
          short="NAG"
          color="#FF7A00"
          score="187"
          wickets="9"
          overs="20.0"
          status="bowling"
          rr="9.35"
          align="right"
        />
      </div>

      {/* Status line */}
      <div className="border-t border-line bg-flame/[0.05] px-4 py-2.5 text-[13px] font-semibold text-ink">
        Butibori need <span className="text-flame">12 runs from 22 balls</span>
        <span className="ml-1.5 text-muted">· CRR 10.31 · RRR 3.27</span>
      </div>

      {/* Live detail grid */}
      <div className="grid grid-cols-1 gap-0 divide-y divide-line lg:grid-cols-[1.2fr_1fr] lg:divide-x lg:divide-y-0">
        {/* Batters / bowler */}
        <div className="px-4 py-3.5">
          <div className="grid grid-cols-[1fr_36px_36px_36px_36px_44px] items-center gap-2 text-[10px] font-semibold uppercase tracking-wide text-muted">
            <span>Batter</span>
            <span className="text-right">R</span>
            <span className="text-right">B</span>
            <span className="text-right">4s</span>
            <span className="text-right">6s</span>
            <span className="text-right">SR</span>
          </div>
          <div className="mt-2 space-y-1.5 text-[13px]">
            <BatterRow
              name="A. Patil"
              striker
              r="58"
              b="38"
              fours="6"
              sixes="2"
              sr="152.6"
            />
            <BatterRow
              name="K. Wankhede"
              r="34"
              b="22"
              fours="2"
              sixes="2"
              sr="154.5"
            />
          </div>

          <div className="mt-4 grid grid-cols-[1fr_36px_36px_36px_36px_44px] items-center gap-2 text-[10px] font-semibold uppercase tracking-wide text-muted">
            <span>Bowler</span>
            <span className="text-right">O</span>
            <span className="text-right">M</span>
            <span className="text-right">R</span>
            <span className="text-right">W</span>
            <span className="text-right">Eco</span>
          </div>
          <div className="mt-2 space-y-1.5 text-[13px]">
            <BowlerRow
              name="S. Khedkar"
              bowling
              o="3.2"
              m="0"
              r="22"
              w="2"
              eco="6.6"
            />
            <BowlerRow name="J. Thakre" o="4.0" m="0" r="36" w="1" eco="9.0" />
          </div>
        </div>

        {/* Recent overs + commentary */}
        <div className="px-4 py-3.5">
          <div className="text-[10px] font-semibold uppercase tracking-wide text-muted">
            Recent Overs
          </div>
          <div className="mt-2 flex flex-col gap-1.5">
            {RECENT_OVERS.map((over, i) => (
              <div key={i} className="flex items-center gap-1">
                <span className="w-9 text-[11px] font-mono font-semibold text-muted">
                  Ov {16 - i}
                </span>
                <div className="flex flex-1 items-center gap-1">
                  {over.map((b, j) => (
                    <Ball key={j} v={b} />
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4 text-[10px] font-semibold uppercase tracking-wide text-muted">
            Latest Commentary
          </div>
          <div className="mt-2 space-y-2 text-[13px]">
            <Commentary
              over="16.2"
              run="1"
              text="Khedkar bowls full on middle, Patil works it through midwicket for a single — strike rotated."
            />
            <Commentary
              over="16.1"
              run="4"
              text="Length ball outside off, Patil leans into a crunching cover drive! Crowd on its feet at the DPL Arena."
            />
          </div>
        </div>
      </div>

      {/* CTA row */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line bg-surfaceAlt px-4 py-3">
        <div className="text-[12px] text-muted">
          <span className="font-semibold text-ink">DPL Arena, Butibori</span>{" "}
          · 7:30 PM IST · Toss: NAG, opted to bat
        </div>
        <div className="flex items-center gap-2">
          <a
            href={LINKS.dpl}
            target="_blank"
            rel="noreferrer"
            className="btn-orange"
          >
            <Play className="h-3.5 w-3.5 fill-current" />
            Watch live
          </a>
          <button type="button" className="btn-outline">
            Full scorecard
          </button>
        </div>
      </div>
    </section>
  );
}

function TeamScore({
  name,
  short,
  color,
  score,
  wickets,
  overs,
  status,
  rr,
  align = "left",
}: {
  name: string;
  short: string;
  color: string;
  score: string;
  wickets: string;
  overs: string;
  status: "batting" | "bowling";
  rr: string;
  align?: "left" | "right";
}) {
  return (
    <div
      className={`flex items-center gap-3 px-5 py-4 ${
        align === "right" ? "lg:flex-row-reverse lg:text-right" : ""
      }`}
    >
      <span
        className="grid h-12 w-12 shrink-0 place-items-center rounded-md text-sm font-black text-white"
        style={{
          background: `linear-gradient(135deg, ${color} 0%, ${color}cc 100%)`,
        }}
      >
        {short}
      </span>
      <div
        className={`flex flex-col leading-tight ${
          align === "right" ? "lg:items-end" : ""
        }`}
      >
        <div className="flex items-center gap-1.5">
          <span className="font-display text-[15px] font-bold text-ink">
            {name}
          </span>
          {status === "batting" && (
            <span className="rounded bg-flame/10 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wide text-flame">
              Batting
            </span>
          )}
        </div>
        <div className="mt-0.5 tabular">
          <span className="font-display text-2xl font-black text-ink">
            {score}
          </span>
          <span className="ml-0.5 text-base font-bold text-muted">
            /{wickets}
          </span>
          <span className="ml-2 text-[12px] text-muted">({overs} ov)</span>
        </div>
        <div className="mt-0.5 text-[11px] text-muted">CRR {rr}</div>
      </div>
    </div>
  );
}

function BatterRow({
  name,
  striker,
  r,
  b,
  fours,
  sixes,
  sr,
}: {
  name: string;
  striker?: boolean;
  r: string;
  b: string;
  fours: string;
  sixes: string;
  sr: string;
}) {
  return (
    <div className="grid grid-cols-[1fr_36px_36px_36px_36px_44px] items-center gap-2">
      <span className="flex items-center gap-1.5 truncate">
        <span className="font-semibold text-ink">{name}</span>
        {striker && (
          <span className="rounded bg-flame/15 px-1 py-0.5 text-[9px] font-bold text-flame">
            *
          </span>
        )}
      </span>
      <span className="text-right font-mono font-bold tabular text-ink">
        {r}
      </span>
      <span className="text-right font-mono tabular text-muted">{b}</span>
      <span className="text-right font-mono tabular text-muted">{fours}</span>
      <span className="text-right font-mono tabular text-muted">{sixes}</span>
      <span className="text-right font-mono tabular text-muted">{sr}</span>
    </div>
  );
}

function BowlerRow({
  name,
  bowling,
  o,
  m,
  r,
  w,
  eco,
}: {
  name: string;
  bowling?: boolean;
  o: string;
  m: string;
  r: string;
  w: string;
  eco: string;
}) {
  return (
    <div className="grid grid-cols-[1fr_36px_36px_36px_36px_44px] items-center gap-2">
      <span className="flex items-center gap-1.5 truncate">
        <span className="font-semibold text-ink">{name}</span>
        {bowling && (
          <span className="rounded bg-navy/10 px-1 py-0.5 text-[9px] font-bold text-navy">
            BOWL
          </span>
        )}
      </span>
      <span className="text-right font-mono tabular text-muted">{o}</span>
      <span className="text-right font-mono tabular text-muted">{m}</span>
      <span className="text-right font-mono tabular text-muted">{r}</span>
      <span className="text-right font-mono font-bold tabular text-ink">
        {w}
      </span>
      <span className="text-right font-mono tabular text-muted">{eco}</span>
    </div>
  );
}

function Ball({ v }: { v: string }) {
  const isWicket = v === "W";
  const isSix = v === "6";
  const isFour = v === "4";
  const isDot = v === "•";

  const cls = isWicket
    ? "bg-live text-white"
    : isSix
      ? "bg-flame text-white"
      : isFour
        ? "bg-emerald-600 text-white"
        : isDot
          ? "bg-line text-muted"
          : "bg-surfaceAlt text-ink border border-line";

  return (
    <span
      className={`grid h-6 w-6 place-items-center rounded-full text-[10px] font-bold tabular ${cls}`}
    >
      {v}
    </span>
  );
}

function Commentary({
  over,
  run,
  text,
}: {
  over: string;
  run: string;
  text: string;
}) {
  return (
    <div className="flex gap-2.5 text-[12px] leading-relaxed">
      <div className="flex shrink-0 flex-col items-center">
        <span className="font-mono text-[11px] font-bold text-muted tabular">
          {over}
        </span>
        <span className="mt-0.5 grid h-5 min-w-[20px] place-items-center rounded-full bg-surfaceAlt px-1 text-[10px] font-bold text-ink">
          {run}
        </span>
      </div>
      <p className="text-body">{text}</p>
    </div>
  );
}
