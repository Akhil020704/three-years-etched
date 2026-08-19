import { littleThings, stats } from "@/data/memories";
import { Reveal, Section, SectionHeading } from "./Section";

export function LittleThings() {
  return (
    <Section id="little-things" className="border-t border-border/40">
      <div aria-hidden className="ember pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative">
        <SectionHeading
          eyebrow="Little Things"
          title="The parts that never made it to a photo"
        />

        <ul className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {littleThings.map((thing, i) => (
            <li key={thing}>
              <Reveal delay={(i % 3) * 110}>
                <div className="h-full rounded-sm border border-border/60 bg-card/40 p-7 backdrop-blur-sm transition-all duration-700 hover:-translate-y-1 hover:border-gold/40">
                  <span className="font-serif text-sm text-gold-soft">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-4 font-serif text-lg leading-snug font-light text-foreground/90">
                    {thing}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>

        <div className="mt-24 grid grid-cols-2 gap-10 border-t border-border/50 pt-16 md:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 90} className="text-center">
              <p className="gold-text font-serif text-5xl font-light md:text-6xl">{s.value}</p>
              <p className="mt-3 text-[0.65rem] tracking-[0.3em] text-muted-foreground uppercase">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
