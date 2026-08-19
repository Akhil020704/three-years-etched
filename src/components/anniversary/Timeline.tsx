import { timeline } from "@/data/memories";
import { Reveal, Section, SectionHeading } from "./Section";

export function Timeline() {
  return (
    <Section id="story">
      <SectionHeading
        eyebrow="Our Story"
        title="How we got here"
        intro="Not everything is here. Only the parts I keep returning to."
      />

      <div className="relative mt-20 md:mt-28">
        <div
          aria-hidden
          className="absolute top-0 bottom-0 left-[7px] w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent md:left-1/2"
        />

        <ol className="space-y-16 md:space-y-28">
          {timeline.map((entry, i) => {
            const right = i % 2 === 1;
            return (
              <li key={`${entry.title}-${i}`} className="relative pl-10 md:pl-0">
                <span
                  aria-hidden
                  className="absolute top-2 left-0 size-[15px] rounded-full border border-gold/60 bg-background md:left-1/2 md:-translate-x-1/2"
                >
                  <span className="absolute inset-[3px] rounded-full bg-gold/70" />
                </span>

                <div
                  className={
                    right
                      ? "md:ml-auto md:w-[calc(50%-3rem)] md:pl-0"
                      : "md:w-[calc(50%-3rem)] md:text-right"
                  }
                >
                  <Reveal>
                    <p className="eyebrow">{entry.date}</p>
                    <h3 className="mt-3 font-serif text-2xl font-light sm:text-3xl">
                      {entry.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                      {entry.text}
                    </p>

                    {entry.photos && entry.photos.length > 0 ? (
                      <div className="mt-6 grid grid-cols-2 gap-3">
                        {entry.photos.map((p) => (
                          <img
                            key={p}
                            src={p}
                            alt={entry.title}
                            loading="lazy"
                            className="h-40 w-full rounded-sm object-cover shadow-[var(--shadow-frame)] transition-transform duration-700 hover:scale-[1.02]"
                          />
                        ))}
                      </div>
                    ) : null}

                    {entry.video ? (
                      <video
                        src={entry.video}
                        controls
                        playsInline
                        preload="metadata"
                        className="mt-6 w-full rounded-sm shadow-[var(--shadow-frame)]"
                      />
                    ) : null}
                  </Reveal>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </Section>
  );
}
