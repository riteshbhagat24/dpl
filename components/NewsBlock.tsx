"use client";

import { ArrowUpRight, Clock } from "lucide-react";

type Story = {
  category: string;
  title: string;
  excerpt: string;
  time: string;
  img: string;
};

const FEATURED: Story = {
  category: "Match Report",
  title:
    "Butibori Blazers light up MIDC night with a 13-run thriller over Vidarbha Vipers",
  excerpt:
    "A composed 76 off 41 from the Blazers opener anchored a chase that swung six times in the final over before Butibori sealed it under the floodlights.",
  time: "12 min ago",
  img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=1800&q=80",
};

const STORIES: Story[] = [
  {
    category: "Player Story",
    title:
      "From local nets to neon lights: Kamptee Kings unveil their breakout teen all-rounder",
    excerpt:
      "Sixteen-year-old Aarav joined Kamptee Kings four months ago. Last night, he won them the match.",
    time: "1 hr ago",
    img: "https://images.unsplash.com/photo-1593341646782-e0b495cff86d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    category: "Tactics",
    title:
      "How Vidarbha Vipers are weaponising the wide yorker on tennis-ball pitches",
    excerpt:
      "Death-overs data from the last six matches points to a deliberate plan rewriting their economy rates.",
    time: "3 hrs ago",
    img: "https://images.unsplash.com/photo-1551891099-0d2f1bb55cf5?auto=format&fit=crop&w=1200&q=80",
  },
  {
    category: "Highlights",
    title:
      "Top 5 sixes from Match Day 6 — including a flat hit that cleared the floodlight pole",
    excerpt:
      "Slow-mo replays, stump-cam angles and crowd reactions from a wild night in Butibori.",
    time: "5 hrs ago",
    img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    category: "Standings",
    title:
      "Mid-season power rankings: Blazers leap to top, Hingna in must-win territory",
    excerpt:
      "Net run-rate now becomes the deciding metric for at least three teams in the table.",
    time: "9 hrs ago",
    img: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    category: "Fan Voice",
    title:
      "Inside the Butibori chant section: how a college group built the loudest stand in Vidarbha",
    excerpt:
      "Their drum kit, custom chants, and a team huddle that now happens before every home match.",
    time: "12 hrs ago",
    img: "https://images.unsplash.com/photo-1522778034537-20a2486be803?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function NewsBlock() {
  return (
    <section id="news" aria-label="News">
      <div className="section-title">
        <h2>Latest News</h2>
        <a href="#top">All news →</a>
      </div>

      {/* Featured + sidebar list */}
      <div className="grid gap-4 lg:grid-cols-12">
        <article className="card-hover card group col-span-1 overflow-hidden lg:col-span-7">
          <a href="#top" className="block">
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-surfaceAlt">
              <img
                src={FEATURED.img}
                alt=""
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <span className="absolute left-3 top-3 rounded bg-flame px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
                {FEATURED.category}
              </span>
            </div>
            <div className="px-4 py-4">
              <h3 className="font-display text-xl font-bold leading-snug text-ink transition group-hover:text-flame sm:text-2xl">
                {FEATURED.title}
              </h3>
              <p className="mt-2 line-clamp-2 text-[14px] leading-relaxed text-muted">
                {FEATURED.excerpt}
              </p>
              <div className="mt-3 flex items-center gap-3 text-[11px] uppercase tracking-wide text-muted">
                <span className="inline-flex items-center gap-1">
                  <Clock className="h-3 w-3" />
                  {FEATURED.time}
                </span>
                <span>·</span>
                <span>By DPL Newsroom</span>
              </div>
            </div>
          </a>
        </article>

        <ul className="col-span-1 flex flex-col gap-3 lg:col-span-5">
          {STORIES.slice(0, 4).map((s) => (
            <li key={s.title}>
              <a
                href="#top"
                className="card-hover card group flex gap-3 overflow-hidden p-2.5"
              >
                <div className="relative aspect-[4/3] w-28 shrink-0 overflow-hidden rounded-md bg-surfaceAlt">
                  <img
                    src={s.img}
                    alt=""
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="min-w-0 py-0.5">
                  <div className="text-[10px] font-bold uppercase tracking-wide text-flame">
                    {s.category}
                  </div>
                  <h4 className="mt-1 line-clamp-2 font-display text-[13.5px] font-bold leading-snug text-ink transition group-hover:text-flame">
                    {s.title}
                  </h4>
                  <div className="mt-1.5 inline-flex items-center gap-1 text-[10.5px] uppercase tracking-wide text-muted">
                    <Clock className="h-3 w-3" />
                    {s.time}
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Lower 3-column row */}
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {STORIES.slice(0, 3).map((s) => (
          <a
            key={`l-${s.title}`}
            href="#top"
            className="card-hover card group overflow-hidden"
          >
            <div className="relative aspect-[16/9] overflow-hidden bg-surfaceAlt">
              <img
                src={s.img}
                alt=""
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <span className="absolute left-2.5 top-2.5 rounded bg-navy px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                {s.category}
              </span>
            </div>
            <div className="px-3.5 py-3">
              <h4 className="line-clamp-2 font-display text-[14px] font-bold leading-snug text-ink transition group-hover:text-flame">
                {s.title}
              </h4>
              <div className="mt-2 flex items-center justify-between text-[11px] uppercase tracking-wide text-muted">
                <span>{s.time}</span>
                <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-flame" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
