"use client";

import {
  Building2,
  Car,
  Dumbbell,
  Factory,
  ShoppingBag,
  UtensilsCrossed,
} from "lucide-react";

const SLOTS = [
  { label: "Gym & Fitness", icon: Dumbbell },
  { label: "Sports Retail", icon: ShoppingBag },
  { label: "Real Estate", icon: Building2 },
  { label: "Restaurants", icon: UtensilsCrossed },
  { label: "Automobile", icon: Car },
  { label: "Industrial", icon: Factory },
];

export default function SponsorBar() {
  return (
    <section id="sponsors" aria-label="Sponsors">
      <div className="section-title">
        <h2>Official Partners</h2>
        <a href="mailto:partnerships@tenniscricket.in">Become a partner →</a>
      </div>

      <div className="card grid grid-cols-2 gap-px overflow-hidden bg-line sm:grid-cols-3 lg:grid-cols-6">
        {SLOTS.map((s) => (
          <div
            key={s.label}
            className="group flex flex-col items-center justify-center gap-2 bg-surface px-3 py-5 text-center transition hover:bg-surfaceAlt"
          >
            <span className="grid h-10 w-10 place-items-center rounded-md bg-flame/10 text-flame ring-1 ring-flame/25 transition group-hover:bg-flame group-hover:text-white">
              <s.icon className="h-5 w-5" />
            </span>
            <div>
              <div className="text-[10.5px] font-mono uppercase tracking-wide text-muted">
                Logo Slot
              </div>
              <div className="font-display text-[12.5px] font-bold text-ink">
                {s.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
