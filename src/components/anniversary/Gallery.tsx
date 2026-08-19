import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ImageIcon, X } from "lucide-react";
import { photos } from "@/data/memories";
import { Reveal, Section, SectionHeading } from "./Section";

export function Gallery() {
  const [index, setIndex] = useState<number | null>(null);
  const open = index !== null;

  const close = useCallback(() => setIndex(null), []);
  const step = useCallback((dir: number) => {
    setIndex((cur) => (cur === null ? cur : (cur + dir + photos.length) % photos.length));
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, step]);

  return (
    <Section id="memories" className="border-t border-border/40">
      <SectionHeading
        eyebrow="Memories"
        title="Three years, in frames"
        intro="Some of these are beautiful. Some are badly lit and blurry. Those are my favourites."
      />

      {photos.length === 0 ? (
        <Reveal className="mx-auto mt-16 max-w-md rounded-sm border border-dashed border-border p-10 text-center">
          <ImageIcon className="mx-auto size-6 text-gold-soft" />
          <p className="mt-4 text-sm text-muted-foreground">
            Add photos to <span className="text-foreground">public/assets/photos/</span> and list
            them in <span className="text-foreground">src/data/memories.ts</span>.
          </p>
        </Reveal>
      ) : (
        <div className="mt-16 gap-4 sm:columns-2 lg:columns-3 [&>*]:mb-4">
          {photos.map((photo, i) => (
            <Reveal key={photo.src} delay={(i % 3) * 90}>
              <button
                type="button"
                onClick={() => setIndex(i)}
                className="group relative block w-full overflow-hidden rounded-sm shadow-[var(--shadow-frame)]"
              >
                <img
                  src={photo.src}
                  alt={photo.caption ?? "A memory"}
                  loading="lazy"
                  className="w-full object-cover transition-transform duration-[1200ms] ease-[var(--ease-cinema)] group-hover:scale-[1.05]"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />
                {photo.caption ? (
                  <span className="absolute inset-x-0 bottom-0 translate-y-2 p-5 text-left font-serif text-base text-foreground/95 opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100">
                    {photo.caption}
                  </span>
                ) : null}
              </button>
            </Reveal>
          ))}
        </div>
      )}

      {open ? (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/97 backdrop-blur-md duration-300 animate-in fade-in"
          onClick={close}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={close}
            className="absolute top-5 right-5 rounded-full border border-border p-2.5 text-foreground/70 transition-colors hover:text-gold"
          >
            <X className="size-4" />
          </button>

          <div className="max-h-[80svh] w-full max-w-5xl px-4" onClick={(e) => e.stopPropagation()}>
            <img
              src={photos[index]!.src}
              alt={photos[index]!.caption ?? "A memory"}
              className="mx-auto max-h-[72svh] w-auto rounded-sm object-contain shadow-[var(--shadow-frame)] duration-500 animate-in zoom-in-95"
            />
            {photos[index]!.caption ? (
              <p className="mt-6 text-center font-serif text-lg text-foreground/90 italic">
                {photos[index]!.caption}
              </p>
            ) : null}
          </div>

          <div
            className="mt-8 flex items-center gap-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              aria-label="Previous photo"
              onClick={() => step(-1)}
              className="rounded-full border border-border p-3 text-foreground/70 transition-colors hover:border-gold/60 hover:text-gold"
            >
              <ChevronLeft className="size-4" />
            </button>
            <span className="text-[0.7rem] tracking-[0.3em] text-muted-foreground">
              {index + 1} / {photos.length}
            </span>
            <button
              type="button"
              aria-label="Next photo"
              onClick={() => step(1)}
              className="rounded-full border border-border p-3 text-foreground/70 transition-colors hover:border-gold/60 hover:text-gold"
            >
              <ChevronRight className="size-4" />
            </button>
          </div>
        </div>
      ) : null}
    </Section>
  );
}
