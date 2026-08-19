import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ImageIcon, Pause, Play, X } from "lucide-react";
import { photos } from "@/data/memories";
import { Reveal, Section, SectionHeading } from "./Section";

const AUTOPLAY_MS = 4200;

export function Gallery() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [zoom, setZoom] = useState(false);
  const touchX = useRef<number | null>(null);
  const total = photos.length;

  const go = useCallback(
    (dir: number) => {
      if (total === 0) return;
      setActive((cur) => (cur + dir + total) % total);
    },
    [total],
  );

  // autoplay
  useEffect(() => {
    if (!playing || zoom || total < 2) return;
    const t = window.setInterval(() => go(1), AUTOPLAY_MS);
    return () => window.clearInterval(t);
  }, [playing, zoom, total, go]);

  // keyboard + lock scroll in zoom
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
      if (e.key === "Escape") setZoom(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [go]);

  useEffect(() => {
    if (!zoom) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [zoom]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchX.current = e.touches[0]?.clientX ?? null;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current === null) return;
    const dx = (e.changedTouches[0]?.clientX ?? 0) - touchX.current;
    touchX.current = null;
    if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
  };

  return (
    <Section id="memories" className="border-t border-border/40">
      <SectionHeading
        eyebrow="Memories"
        title="Three years, in frames"
        intro="Some of these are beautiful. Some are badly lit and blurry. Those are my favourites."
      />

      {total === 0 ? (
        <Reveal className="mx-auto mt-14 max-w-md rounded-sm border border-dashed border-border p-8 text-center sm:p-10">
          <ImageIcon className="mx-auto size-6 text-gold-soft" />
          <p className="mt-4 text-sm text-muted-foreground">
            Add photos to <span className="text-foreground">public/assets/photos/</span> and list
            them in <span className="text-foreground">src/data/memories.ts</span>.
          </p>
        </Reveal>
      ) : (
        <Reveal className="mt-12 sm:mt-16">
          {/* slideshow */}
          <div
            className="relative mx-auto w-full max-w-4xl overflow-hidden rounded-sm shadow-[var(--shadow-frame)]"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div className="relative aspect-[4/5] w-full sm:aspect-[16/10]">
              {photos.map((photo, i) => (
                <button
                  key={photo.src}
                  type="button"
                  tabIndex={i === active ? 0 : -1}
                  aria-hidden={i !== active}
                  onClick={() => setZoom(true)}
                  className="absolute inset-0 transition-opacity duration-[1100ms] ease-[var(--ease-cinema)]"
                  style={{ opacity: i === active ? 1 : 0, pointerEvents: i === active ? "auto" : "none" }}
                >
                  <img
                    src={photo.src}
                    alt={photo.caption ?? "A memory"}
                    loading={i === 0 ? "eager" : "lazy"}
                    className="size-full object-cover"
                  />
                  <span
                    aria-hidden
                    className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent"
                  />
                  {photo.caption ? (
                    <span className="absolute inset-x-0 bottom-0 p-5 text-left font-serif text-base text-foreground/95 sm:p-7 sm:text-lg">
                      {photo.caption}
                    </span>
                  ) : null}
                </button>
              ))}
            </div>

            {total > 1 ? (
              <>
                <button
                  type="button"
                  aria-label="Previous photo"
                  onClick={() => go(-1)}
                  className="absolute top-1/2 left-2 -translate-y-1/2 rounded-full border border-border/70 bg-background/50 p-2.5 text-foreground/80 backdrop-blur transition-colors hover:text-gold sm:left-4"
                >
                  <ChevronLeft className="size-4" />
                </button>
                <button
                  type="button"
                  aria-label="Next photo"
                  onClick={() => go(1)}
                  className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full border border-border/70 bg-background/50 p-2.5 text-foreground/80 backdrop-blur transition-colors hover:text-gold sm:right-4"
                >
                  <ChevronRight className="size-4" />
                </button>
              </>
            ) : null}
          </div>

          {/* controls */}
          <div className="mt-5 flex items-center justify-center gap-5">
            {total > 1 ? (
              <button
                type="button"
                aria-label={playing ? "Pause slideshow" : "Play slideshow"}
                onClick={() => setPlaying((v) => !v)}
                className="rounded-full border border-border p-2 text-foreground/70 transition-colors hover:border-gold/60 hover:text-gold"
              >
                {playing ? <Pause className="size-3.5" /> : <Play className="size-3.5" />}
              </button>
            ) : null}
            <span className="text-[0.65rem] tracking-[0.3em] text-muted-foreground">
              {active + 1} / {total}
            </span>
          </div>

          {/* collage */}
          <div className="mt-10 grid grid-cols-3 gap-2 sm:mt-14 sm:grid-cols-4 sm:gap-3 lg:grid-cols-6">
            {photos.map((photo, i) => (
              <button
                key={`t-${photo.src}`}
                type="button"
                aria-label={`Show photo ${i + 1}`}
                onClick={() => {
                  setActive(i);
                  setPlaying(false);
                }}
                className={`relative overflow-hidden rounded-sm transition-all duration-500 ${
                  i === active
                    ? "ring-1 ring-gold/70"
                    : "opacity-60 hover:opacity-100"
                } ${i % 7 === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"}`}
              >
                <img
                  src={photo.src}
                  alt={photo.caption ?? "A memory"}
                  loading="lazy"
                  className="size-full object-cover"
                />
              </button>
            ))}
          </div>
        </Reveal>
      )}

      {zoom ? (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/97 px-4 backdrop-blur-md duration-300 animate-in fade-in"
          onClick={() => setZoom(false)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setZoom(false)}
            className="absolute top-5 right-5 rounded-full border border-border p-2.5 text-foreground/70 transition-colors hover:text-gold"
          >
            <X className="size-4" />
          </button>

          <div className="w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={photos[active]!.src}
              alt={photos[active]!.caption ?? "A memory"}
              className="mx-auto max-h-[72svh] w-auto rounded-sm object-contain shadow-[var(--shadow-frame)]"
            />
            {photos[active]!.caption ? (
              <p className="mt-5 text-center font-serif text-base text-foreground/90 italic sm:text-lg">
                {photos[active]!.caption}
              </p>
            ) : null}
            <p className="mt-4 text-center text-[0.65rem] tracking-[0.3em] text-muted-foreground">
              {active + 1} / {total} — swipe
            </p>
          </div>
        </div>
      ) : null}
    </Section>
  );
}
