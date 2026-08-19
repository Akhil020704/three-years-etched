import { useState, useRef } from "react";
import { Photo } from "@/data/memories";
import { X, Maximize2, UploadCloud, Heart, Sparkles } from "lucide-react";

interface PolaroidCollageProps {
  photos: Photo[];
}

export function PolaroidCollage({ photos }: PolaroidCollageProps) {
  const [activePhotoIndex, setActivePhotoIndex] = useState<number | null>(null);
  const touchX = useRef<number | null>(null);

  const samplePolaroids: Photo[] = [
    { src: "", caption: "Our first trip together", date: "August 2023", location: "Goa Beach" },
    { src: "", caption: "Unfiltered laughter & late night talks", date: "October 2023", location: "Cozy Corner" },
    { src: "", caption: "That rainy evening in July", date: "July 2024", location: "Our Secret Spot" },
    { src: "", caption: "Stargazing & endless promises", date: "December 2024", location: "Under the Sky" },
  ];

  const displayList = photos.length > 0 ? photos : samplePolaroids;

  const tiltRotations = ["-rotate-2", "rotate-3", "-rotate-3", "rotate-2", "-rotate-1", "rotate-4"];

  const handleNext = () => {
    if (activePhotoIndex === null) return;
    setActivePhotoIndex((activePhotoIndex + 1) % displayList.length);
  };

  const handlePrev = () => {
    if (activePhotoIndex === null) return;
    setActivePhotoIndex((activePhotoIndex - 1 + displayList.length) % displayList.length);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchX.current = e.touches[0]?.clientX ?? null;
  };
  
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchX.current === null) return;
    const dx = (e.changedTouches[0]?.clientX ?? 0) - touchX.current;
    touchX.current = null;
    if (Math.abs(dx) > 40) {
      if (dx < 0) handleNext();
      else handlePrev();
    }
  };

  return (
    <div className="relative mx-auto w-full max-w-6xl py-8">
      {/* Grid of Polaroid Cards */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {displayList.map((photo, i) => {
          const tilt = tiltRotations[i % tiltRotations.length];
          const hasImage = Boolean(photo.src);

          return (
            <div
              key={photo.src || `polaroid-placeholder-${i}`}
              onClick={() => setActivePhotoIndex(i)}
              className={`polaroid-frame group relative cursor-pointer rounded-xs p-4 pb-6 transition-all duration-500 hover:z-30 ${tilt}`}
            >
              {/* Tape visual effect */}
              <div className="absolute -top-3 left-1/2 h-4 w-12 -translate-x-1/2 rotate-1 bg-amber-100/40 backdrop-blur-xs shadow-xs border-x border-amber-200/50" />

              {/* Photo Frame Container */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-neutral-900 shadow-inner">
                {hasImage ? (
                  <img
                    src={photo.src}
                    alt={photo.caption || `Memory ${i + 1}`}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="flex size-full flex-col items-center justify-center bg-gradient-to-br from-neutral-800 to-neutral-900 p-6 text-center text-neutral-400">
                    <Heart className="size-8 text-rose-500/70 animate-pulse" />
                    <p className="mt-3 font-serif text-sm italic text-neutral-300">
                      {photo.caption || "A Memory Etched in Time"}
                    </p>
                    <span className="mt-2 text-[0.65rem] tracking-wider text-gold-soft uppercase">
                      Drop photo in public/assets/photos/
                    </span>
                  </div>
                )}

                {/* Expand Hover Hint */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
                  <span className="flex items-center gap-2 rounded-full border border-gold/40 bg-black/60 px-3 py-1.5 font-sans text-xs tracking-wider text-gold shadow-lg">
                    <Maximize2 className="size-3.5" /> View Memory
                  </span>
                </div>
              </div>

              {/* Polaroid Handwritten Footer */}
              <div className="mt-4 flex flex-col px-1 text-center">
                <p className="font-serif text-base text-neutral-800 italic leading-snug">
                  {photo.caption || `Memory #${i + 1}`}
                </p>
                <div className="mt-2 flex items-center justify-between text-[0.7rem] font-sans tracking-wider text-neutral-500 uppercase">
                  <span>{photo.date || "3 Years"}</span>
                  <span className="flex items-center gap-1 text-rose-700/80">
                    <Sparkles className="size-3" /> {photo.location || "Us"}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Guidance badge if using placeholders */}
      {photos.length === 0 && (
        <div className="mt-10 rounded-lg border border-gold-soft/20 bg-card/60 p-5 text-center backdrop-blur-md">
          <div className="mx-auto flex size-10 items-center justify-center rounded-full bg-gold/10 text-gold-soft">
            <UploadCloud className="size-5" />
          </div>
          <p className="mt-3 font-serif text-base text-foreground/90 italic">
            "Your photos go here — simply add images to <code className="text-gold-soft">public/assets/photos/</code> and list them in <code className="text-gold-soft">src/data/memories.ts</code>."
          </p>
        </div>
      )}

      {/* Lightbox Dialog Modal */}
      {activePhotoIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 px-4 backdrop-blur-lg animate-in fade-in duration-300"
          onClick={() => setActivePhotoIndex(null)}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <button
            type="button"
            aria-label="Close modal"
            onClick={() => setActivePhotoIndex(null)}
            className="absolute top-6 right-6 rounded-full border border-white/20 bg-white/10 p-3 text-white backdrop-blur transition-all hover:bg-white/20 hover:text-gold"
          >
            <X className="size-5" />
          </button>

          <div
            className="relative w-full max-w-4xl rounded-sm p-2 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            {displayList[activePhotoIndex].src ? (
              <img
                src={displayList[activePhotoIndex].src}
                alt={displayList[activePhotoIndex].caption || "Memory"}
                className="mx-auto max-h-[75vh] rounded-xs object-contain shadow-2xl"
              />
            ) : (
              <div className="mx-auto flex aspect-[4/3] max-h-[60vh] max-w-2xl flex-col items-center justify-center rounded-sm border border-gold/30 bg-neutral-900 p-8 text-neutral-300">
                <Heart className="size-14 text-rose-500/80 animate-pulse" />
                <h3 className="mt-4 font-serif text-2xl text-foreground">
                  {displayList[activePhotoIndex].caption}
                </h3>
                <p className="mt-2 font-sans text-sm text-gold-soft">
                  {displayList[activePhotoIndex].date} — {displayList[activePhotoIndex].location}
                </p>
              </div>
            )}

            {displayList[activePhotoIndex].caption && (
              <p className="mt-6 font-serif text-xl text-foreground/95 italic">
                "{displayList[activePhotoIndex].caption}"
              </p>
            )}

            <div className="mt-4 flex items-center justify-between text-xs tracking-widest text-neutral-400">
              <button
                type="button"
                onClick={handlePrev}
                className="rounded-full border border-white/10 px-4 py-2 hover:border-gold hover:text-gold"
              >
                ← Previous
              </button>
              <span>
                {activePhotoIndex + 1} / {displayList.length}
              </span>
              <button
                type="button"
                onClick={handleNext}
                className="rounded-full border border-white/10 px-4 py-2 hover:border-gold hover:text-gold"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
