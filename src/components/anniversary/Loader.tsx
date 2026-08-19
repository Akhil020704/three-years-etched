import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { site } from "@/data/memories";

/** Very short cinematic intro. No fake progress. */
export function Loader() {
  const [leaving, setLeaving] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const a = setTimeout(() => setLeaving(true), 1500);
    const b = setTimeout(() => setGone(true), 2700);
    return () => {
      clearTimeout(a);
      clearTimeout(b);
    };
  }, []);

  if (gone) return null;

  return (
    <div
      aria-hidden
      className={cn(
        "fixed inset-0 z-50 flex items-center justify-center bg-background transition-opacity duration-1000",
        leaving && "pointer-events-none opacity-0",
      )}
    >
      <p className="fade-slow px-8 text-center font-serif text-xl font-light tracking-[0.18em] text-gold-soft italic sm:text-2xl">
        {site.loadingLine}
      </p>
    </div>
  );
}
