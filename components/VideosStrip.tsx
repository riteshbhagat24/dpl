"use client";

import { ArrowUpRight, Eye, Play } from "lucide-react";
import { LINKS } from "@/lib/links";

const VIDEOS = [
  {
    title: "MD7 Highlights · Butibori vs Nagpur · Last over thriller",
    duration: "12:34",
    views: "284K",
    img: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Top 10 sixes of the week · Vidarbha T20 Slam",
    duration: "08:12",
    views: "412K",
    img: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Player Diary · K. Wankhede on the road back",
    duration: "06:48",
    views: "98K",
    img: "https://images.unsplash.com/photo-1593341646782-e0b495cff86d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Floodlight Walkthrough · Inside the DPL Arena",
    duration: "04:25",
    views: "156K",
    img: "https://images.unsplash.com/photo-1607853202273-797f1c22a38e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "MD6 Recap · Butibori storm to top of table",
    duration: "09:51",
    views: "221K",
    img: "https://images.unsplash.com/photo-1551891099-0d2f1bb55cf5?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function VideosStrip() {
  return (
    <section id="videos" aria-label="Latest videos">
      <div className="section-title">
        <h2>Latest Videos</h2>
        <a href={LINKS.dpl} target="_blank" rel="noreferrer">
          YouTube channel →
        </a>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
        {VIDEOS.map((v, i) => (
          <a
            key={i}
            href={LINKS.dpl}
            target="_blank"
            rel="noreferrer"
            className="card-hover card group overflow-hidden"
          >
            <div className="relative aspect-video overflow-hidden bg-surfaceAlt">
              <img
                src={v.img}
                alt=""
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-90" />
              <span className="absolute right-2 bottom-2 rounded bg-black/75 px-1.5 py-0.5 font-mono text-[10px] font-bold text-white tabular">
                {v.duration}
              </span>
              <span className="absolute inset-0 grid place-items-center opacity-0 transition group-hover:opacity-100">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-flame text-white shadow-[0_8px_24px_rgba(255,122,0,0.55)]">
                  <Play className="h-5 w-5 fill-current" />
                </span>
              </span>
            </div>
            <div className="px-3 py-2.5">
              <h4 className="line-clamp-2 font-display text-[12.5px] font-bold leading-snug text-ink transition group-hover:text-flame">
                {v.title}
              </h4>
              <div className="mt-1.5 flex items-center justify-between text-[11px] text-muted">
                <span className="inline-flex items-center gap-1">
                  <Eye className="h-3 w-3" />
                  {v.views} views
                </span>
                <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-flame" />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
