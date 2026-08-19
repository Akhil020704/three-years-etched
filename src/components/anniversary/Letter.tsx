import { letter } from "@/data/memories";
import { Reveal, Section } from "./Section";

export function Letter() {
  return (
    <Section id="letter" className="border-t border-border/40">
      <Reveal className="mx-auto max-w-2xl">
        <div className="relative rounded-sm border border-gold/20 bg-card/50 px-7 py-14 shadow-[var(--shadow-frame)] backdrop-blur-sm sm:px-14 sm:py-20">
          <span
            aria-hidden
            className="absolute inset-x-6 top-6 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent"
          />
          <p className="eyebrow text-center">A letter</p>
          <h2 className="mt-8 font-serif text-3xl font-light italic sm:text-4xl">
            {letter.salutation}
          </h2>

          <div className="mt-8 space-y-6">
            {letter.paragraphs.map((p, i) => (
              <Reveal key={i} delay={i * 120}>
                <p className="font-serif text-[1.05rem] leading-[1.9] text-foreground/85 sm:text-lg">
                  {p}
                </p>
              </Reveal>
            ))}
          </div>

          <p className="mt-12 text-right font-serif text-lg text-gold-soft italic">
            {letter.signature}
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
