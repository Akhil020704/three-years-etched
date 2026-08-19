import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play, Heart, Layers, LayoutGrid } from "lucide-react";
import { photos } from "@/data/memories";
import { Reveal, Section, SectionHeading } from "./Section";
import { PolaroidCollage } from "./PolaroidCollage";

const AUTOPLAY_MS = 4500;

export function Gallery() {
  const [activeTab, setActiveTab] = useState<"polaroids" | "slideshow">("polaroids");
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
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
    if (!playing || total < 2 || activeTab !== "slideshow") return;
    const t = window.setInterval(() => go(1), AUTOPLAY_MS);
    return () => window.clearInterval(t);
  }, [playing, total, activeTab, go]);

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
        title="Three Years, Etched in Frames"
        intro="Photos of our laughter, our trips, and the quiet everyday moments that meant everything."
      />

      {/* View Switcher Tabs */}
      <div className="mt-8 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => setActiveTab("polaroids")}
          className={`flex items-center gap-2 rounded-full border px-5 py-2 text-xs font-sans tracking-widest uppercase transition-all duration-300 ${
            activeTab === "polaroids"
              ? "border-gold bg-gold/15 text-gold shadow-[0_0_15px_rgba(212,175,55,0.2)]"
              : "border-border/60 bg-card/40 text-muted-foreground hover:text-foreground"
          }`}
        >
          <Layers className="size-3.5" /> Polaroid Collage
        </button>
        <button
          type="button"
          onClick={() => setActiveTab("slideshow")}
          className={`flex items-center gap-2 rounded-full border px-5 py-2 text-xs font-sans tracking-widest uppercase transition-all duration-300 ${
            activeTab === "slideshow"
              ? "border-gold bg-gold/15 text-gold shadow-[0_0_15px_rgba(212,175,55,0.2)]"
              : "border-border/60 bg-card/40 text-muted-foreground hover:text-foreground"
          }`}
        >
          <LayoutGrid className="size-3.5" /> Cinema Slideshow
        </button>
      </div>

      <Reveal className="mt-10 sm:mt-14">
        {activeTab === "polaroids" ? (
          <PolaroidCollage photos={photos} />
        ) : (
          <div className="mx-auto w-full max-w-4xl">
            {total === 0 ? (
              <div className="rounded-xl border border-dashed border-gold/30 bg-card/40 p-12 text-center backdrop-blur-md">
                <Heart className="mx-auto size-8 text-rose-500/70 animate-pulse" />
                <h4 className="mt-4 font-serif text-2xl text-foreground">Cinema Slideshow Mode</h4>
                <p className="mt-2 text-sm text-muted-foreground italic">
                  Upload your photos to <code className="text-gold-soft">public/assets/photos/</code> to watch your 3-year story unfold in full screen cinema view.
                </p>
              </div>
            ) : (
              <div>
                {/* Slideshow main view */}
                <div
                  className="relative mx-auto w-full overflow-hidden rounded-lg shadow-2xl border border-gold/30"
                  onTouchStart={onTouchStart}
                  onTouchEnd={onTouchEnd}
                >
                  <div className="relative aspect-[4/5] w-full sm:aspect-[16/10]">
                    {photos.map((photo, i) => (
                      <div
                        key={photo.src}
                        className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
                        style={{
                          opacity: i === active ? 1 : 0,
                          pointerEvents: i === active ? "auto" : "none",
                        }}
                      >
                        <img
                          src={photo.src}
                          alt={photo.caption ?? "A memory"}
                          loading={i === 0 ? "eager" : "lazy"}
                          className="size-full object-cover ken-burns"
                        />
                        <span
                          aria-hidden
                          className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-transparent"
                        />
                        {photo.caption ? (
                          <div className="absolute inset-x-0 bottom-0 p-6 text-left sm:p-8">
                            <p className="font-serif text-lg text-foreground sm:text-2xl italic">
                              "{photo.caption}"
                            </p>
                            {photo.date && (
                              <span className="mt-1 block font-sans text-xs text-gold-soft uppercase tracking-widest">
                                {photo.date} {photo.location ? `— ${photo.location}` : ""}
                              </span>
                            )}
                          </div>
                        ) : null}
                      </div>
                    ))}
                  </div>

                  {total > 1 ? (
                    <>
                      <button
                        type="button"
                        aria-label="Previous photo"
                        onClick={() => go(-1)}
                        className="absolute top-1/2 left-3 -translate-y-1/2 rounded-full border border-gold/30 bg-black/60 p-3 text-white backdrop-blur transition-all hover:bg-black/80 hover:text-gold"
                      >
                        <ChevronLeft className="size-5" />
                      </button>
                      <button
                        type="button"
                        aria-label="Next photo"
                        onClick={() => go(1)}
                        className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full border border-gold/30 bg-black/60 p-3 text-white backdrop-blur transition-all hover:bg-black/80 hover:text-gold"
                      >
                        <ChevronRight className="size-5" />
                      </button>
                    </>
                  ) : null}
                </div>

                {/* Slideshow controls */}
                <div className="mt-5 flex items-center justify-center gap-5">
                  {total > 1 ? (
                    <button
                      type="button"
                      aria-label={playing ? "Pause slideshow" : "Play slideshow"}
                      onClick={() => setPlaying((v) => !v)}
                      className="rounded-full border border-gold/40 p-2.5 text-foreground/80 transition-colors hover:border-gold hover:text-gold"
                    >
                      {playing ? <Pause className="size-4" /> : <Play className="size-4" />}
                    </button>
                  ) : null}
                  <span className="text-xs font-sans tracking-widest text-gold-soft uppercase">
                    {active + 1} / {total}
                  </span>
                </div>
              </div>
            )}
          </div>
        )}
      </Reveal>
    </Section>
  );
}
