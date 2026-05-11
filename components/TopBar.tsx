"use client";

import { Calendar, ChevronDown, Globe } from "lucide-react";
import { useEffect, useState } from "react";

const FORMATTER = new Intl.DateTimeFormat("en-IN", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
});

export default function TopBar() {
  const [today, setToday] = useState<string>("");

  useEffect(() => {
    setToday(FORMATTER.format(new Date()));
  }, []);

  return (
    <div className="hidden border-b border-white/10 bg-navy-900 text-white/90 md:block">
      <div className="container-x flex h-9 items-center justify-between text-[12px]">
        <div className="flex items-center gap-5">
          <span className="inline-flex items-center gap-1.5 text-white/75">
            <Calendar className="h-3.5 w-3.5" />
            {today || "—"}
          </span>
          <span className="hidden text-white/45 lg:inline">|</span>
          <span className="hidden font-semibold text-white/85 lg:inline">
            Vidarbha T20 Slam · Season 2
          </span>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="#schedule"
            className="text-white/75 transition hover:text-flame"
          >
            Schedule
          </a>
          <a
            href="#leaderboard"
            className="text-white/75 transition hover:text-flame"
          >
            Standings
          </a>
          <a
            href="#archive"
            className="text-white/75 transition hover:text-flame"
          >
            Archive
          </a>
          <button
            type="button"
            className="inline-flex items-center gap-1 text-white/75 transition hover:text-flame"
          >
            <Globe className="h-3.5 w-3.5" />
            EN
            <ChevronDown className="h-3 w-3" />
          </button>
        </div>
      </div>
    </div>
  );
}
