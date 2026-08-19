import { useState } from "react";
import { letter } from "@/data/memories";
import { Reveal, Section } from "./Section";
import { Sparkles, Stamp, Heart } from "lucide-react";

export function Letter() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Section id="letter" className="border-t border-border/40 relative">
      <div className="mx-auto max-w-3xl px-4">
        {/* Letter Container Card */}
        <div className="relative rounded-lg border border-gold/30 bg-gradient-to-b from-card/90 via-card/70 to-card/90 px-8 py-16 shadow-[0_20px_80px_rgba(0,0,0,0.8)] backdrop-blur-md sm:px-16 sm:py-20">
          {/* Top Decorative Border Accent */}
          <span
            aria-hidden
            className="absolute inset-x-8 top-8 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"
          />

          {/* Interactive Wax Seal Toggle */}
          <div className="absolute -top-6 left-1/2 -translate-x-1/2">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="group flex size-12 items-center justify-center rounded-full border border-gold/60 bg-rose-950 text-rose-300 shadow-[0_0_20px_rgba(159,18,57,0.8)] transition-all duration-300 hover:scale-110 hover:border-gold hover:text-gold"
              title={isOpen ? "Close letter" : "Open letter wax seal"}
            >
              <Stamp className="size-6 transition-transform group-hover:rotate-12" />
            </button>
          </div>

          <div className="text-center pt-2">
            <span className="eyebrow">A Personal Letter</span>
            <h2 className="mt-6 font-serif text-3xl font-light italic text-foreground sm:text-5xl">
              {letter.salutation}
            </h2>
          </div>

          {/* Letter Body Content */}
          {isOpen && (
            <div className="mt-10 space-y-6 animate-in fade-in duration-700">
              {letter.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="font-serif text-lg leading-[2.1] text-foreground/90 sm:text-xl font-light tracking-wide"
                >
                  {p}
                </p>
              ))}

              <div className="pt-8 border-t border-gold/20 flex items-center justify-between">
                <div className="flex items-center gap-2 text-rose-500/80">
                  <Heart className="size-4 fill-current heart-pulse" />
                  <span className="font-sans text-xs tracking-widest uppercase text-muted-foreground">Etched in Heart</span>
                </div>
                <p className="font-serif text-xl sm:text-2xl text-gold-soft italic">
                  {letter.signature}
                </p>
              </div>
            </div>
          )}

          {/* Bottom Decorative Line */}
          <span
            aria-hidden
            className="absolute inset-x-8 bottom-8 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"
          />
        </div>
      </div>
    </Section>
  );
}
