import { finale } from "@/data/memories";
import { Atmosphere } from "./Atmosphere";
import { Reveal } from "./Section";

export function Finale() {
  return (
    <section className="relative flex min-h-[85svh] items-center justify-center overflow-hidden border-t border-border/40 px-6 text-center">
      <div aria-hidden className="ember absolute inset-0 opacity-60" />
      <Atmosphere count={14} />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-b from-transparent to-background"
      />

      <div className="relative z-10 mx-auto max-w-2xl">
        <Reveal>
          <p className="font-serif text-2xl leading-relaxed font-light text-foreground/85 sm:text-3xl md:text-4xl">
            {finale.line}
          </p>
        </Reveal>
        <Reveal delay={300}>
          <div className="hairline mx-auto mt-12 w-32" />
          <p className="gold-text mt-12 font-serif text-4xl font-light tracking-tight sm:text-5xl">
            {finale.wish}
          </p>
        </Reveal>
        <Reveal delay={600}>
          <p className="mt-10 text-[0.65rem] tracking-[0.32em] text-muted-foreground uppercase">
            made for you, by hand
          </p>
        </Reveal>
      </div>
    </section>
  );
}
