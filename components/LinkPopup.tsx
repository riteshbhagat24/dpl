"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Play, X, Youtube } from "lucide-react";
import { LINKS } from "@/lib/links";

const STORAGE_KEY = "dpl:link-popup-dismissed-v2";

export default function LinkPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.localStorage.getItem(STORAGE_KEY)) return;
    const t = window.setTimeout(() => setOpen(true), 1300);
    return () => window.clearTimeout(t);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const onOpen = () => setOpen(true);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("dpl:open-link-popup", onOpen);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("dpl:open-link-popup", onOpen);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  const close = () => {
    setOpen(false);
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, "1");
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="dpl-popup"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] grid place-items-center px-4"
          aria-modal="true"
          role="dialog"
          aria-labelledby="dpl-popup-title"
        >
          <button
            type="button"
            aria-label="Close popup"
            onClick={close}
            className="absolute inset-0 -z-10 cursor-default bg-ink/55 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.97 }}
            transition={{ duration: 0.32, ease: [0.2, 0.7, 0.2, 1] }}
            className="relative w-full max-w-md overflow-hidden rounded-xl bg-surface shadow-[0_30px_80px_-20px_rgba(10,21,48,0.45)]"
          >
            {/* Top accent bar */}
            <div className="h-1 w-full bg-gradient-to-r from-flame via-flame to-navy" />

            <div className="flex items-start justify-between px-6 pt-5">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-flame">
                  Match Day · Watch Live
                </div>
                <h2
                  id="dpl-popup-title"
                  className="mt-2 font-display text-2xl font-bold leading-tight text-ink"
                >
                  Catch every ball on YouTube
                </h2>
              </div>
              <button
                type="button"
                onClick={close}
                aria-label="Close"
                className="grid h-9 w-9 place-items-center rounded-full text-muted transition hover:bg-line-soft hover:text-ink"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <p className="mt-2 px-6 text-sm leading-relaxed text-muted">
              Subscribe to the official DPL Butibori channel and dive into
              India&apos;s largest tennis-ball cricket network on
              TennisCricket.in.
            </p>

            <div className="mt-5 flex flex-col gap-3 px-6 pb-6">
              <a
                href={LINKS.dpl}
                target="_blank"
                rel="noreferrer"
                onClick={close}
                className="group flex items-center justify-between gap-3 rounded-lg border border-flame/40 bg-flame/[0.06] px-4 py-3.5 transition hover:border-flame hover:bg-flame/10"
              >
                <span className="flex items-center gap-3.5">
                  <span className="grid h-11 w-11 place-items-center rounded-md bg-flame text-white shadow-[0_4px_14px_-4px_rgba(255,122,0,0.55)]">
                    <Youtube className="h-5 w-5" />
                  </span>
                  <span className="flex flex-col text-left">
                    <span className="font-display text-[15px] font-bold leading-tight text-ink">
                      DPL Butibori
                    </span>
                    <span className="mt-0.5 text-[11px] text-muted">
                      youtube.com/@dplbutibori
                    </span>
                  </span>
                </span>
                <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-flame">
                  Watch
                  <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </a>

              <a
                href={LINKS.tennisCricket}
                target="_blank"
                rel="noreferrer"
                onClick={close}
                className="group flex items-center justify-between gap-3 rounded-lg border border-line bg-surface px-4 py-3.5 transition hover:border-navy hover:bg-navy/[0.03]"
              >
                <span className="flex items-center gap-3.5">
                  <span className="grid h-11 w-11 place-items-center rounded-md bg-navy text-white">
                    <Play className="h-5 w-5 fill-current" />
                  </span>
                  <span className="flex flex-col text-left">
                    <span className="font-display text-[15px] font-bold leading-tight text-ink">
                      TennisCricket.in
                    </span>
                    <span className="mt-0.5 text-[11px] text-muted">
                      youtube.com/@tenniscricket.in_official
                    </span>
                  </span>
                </span>
                <span className="flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-navy">
                  Explore
                  <ArrowUpRight className="h-3.5 w-3.5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </a>

              <button
                type="button"
                onClick={close}
                className="mt-1 text-center text-xs text-muted transition hover:text-ink"
              >
                Continue to site
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
