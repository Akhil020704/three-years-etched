import { timelineEvents } from "@/data/memories";
import { Reveal, Section, SectionHeading } from "./Section";
import { Heart, Sparkles, Calendar, Compass, Milestone } from "lucide-react";

export function Timeline() {
  return (
    <Section id="story" className="border-t border-border/40 relative">
      <SectionHeading
        eyebrow="Our Journey"
        title="Three Years Etched in Time"
        intro="A timeline of us — from the very first spark to where we stand today."
      />

      <Reveal className="mt-14 mx-auto max-w-4xl px-4">
        <div className="relative border-l-2 border-dashed border-gold/30 ml-4 sm:ml-32 space-y-12">
          {timelineEvents.map((event, index) => (
            <div key={event.title} className="relative group pl-8 sm:pl-12">
              {/* Timeline Node Heart */}
              <div className="absolute -left-[17px] top-1 flex size-8 items-center justify-center rounded-full border border-gold/60 bg-background text-gold shadow-[0_0_15px_rgba(212,175,55,0.3)] transition-transform duration-300 group-hover:scale-125 group-hover:border-rose-500 group-hover:text-rose-500">
                <Heart className="size-4 fill-current heart-pulse" />
              </div>

              {/* Date Column (Desktop side tag) */}
              <div className="sm:absolute sm:-left-36 sm:top-1 sm:w-28 sm:text-right font-sans text-xs tracking-widest text-gold-soft uppercase mb-2 sm:mb-0">
                <div className="flex items-center gap-1.5 sm:justify-end">
                  <Calendar className="size-3.5" />
                  <span>{event.date}</span>
                </div>
              </div>

              {/* Content Card */}
              <div className="rounded-lg border border-border/60 bg-card/40 p-6 backdrop-blur-md transition-all duration-300 hover:border-gold/50 hover:bg-card/70 hover:shadow-xl">
                {event.tag && (
                  <span className="inline-flex items-center gap-1 rounded-full border border-gold-soft/30 bg-gold/10 px-2.5 py-0.5 text-[0.65rem] font-sans tracking-widest text-gold uppercase mb-3">
                    <Sparkles className="size-3" /> {event.tag}
                  </span>
                )}
                <h3 className="font-serif text-xl sm:text-2xl text-foreground">
                  {event.title}
                </h3>
                <p className="mt-2 font-sans text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
