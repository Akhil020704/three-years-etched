import { finale } from "@/data/memories";
import { Atmosphere } from "./Atmosphere";
import { Reveal } from "./Section";
import { WishLanterns } from "./WishLanterns";
import { Heart } from "lucide-react";

export function Finale() {
  return (
    <section className="relative flex min-h-[90svh] flex-col items-center justify-center overflow-hidden border-t border-border/40 px-6 py-20 text-center">
      <div aria-hidden className="ember absolute inset-0 opacity-70" />
      <Atmosphere count={18} />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent to-background"
      />

      <div className="relative z-10 mx-auto w-full max-w-4xl">
        <Reveal>
          <p className="font-serif text-2xl leading-relaxed font-light text-foreground/90 sm:text-3xl md:text-4xl italic">
            "{finale.line}"
          </p>
        </Reveal>

        {/* Interactive Wish Lantern Sky */}
        <Reveal delay={200} className="w-full">
          <WishLanterns />
        </Reveal>

        <Reveal delay={400}>
          <div className="hairline mx-auto mt-6 w-32" />
          <div className="mt-8 flex items-center justify-center gap-2">
            <Heart className="size-6 text-rose-500 fill-rose-500 heart-pulse" />
            <p className="gold-text font-serif text-4xl font-light tracking-tight sm:text-6xl">
              {finale.wish}
            </p>
            <Heart className="size-6 text-rose-500 fill-rose-500 heart-pulse" />
          </div>
        </Reveal>

        <Reveal delay={600}>
          <p className="mt-10 text-[0.65rem] tracking-[0.35em] text-muted-foreground uppercase">
            Three Years Etched in Time — Made with Love
          </p>
        </Reveal>
      </div>
    </section>
  );
}
