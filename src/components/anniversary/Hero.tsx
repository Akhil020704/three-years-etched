import { useState, useEffect } from "react";
import { ArrowDown, Heart, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-atmosphere.jpg";
import { site } from "@/data/memories";
import { Atmosphere } from "./Atmosphere";

export function Hero() {
  const [elapsed, setElapsed] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const startDate = new Date(site.startDate).getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const diff = Math.max(0, now - startDate);

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setElapsed({ days, hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="top" className="relative flex min-h-[100svh] items-center justify-center px-6 py-20">
      <img
        src={heroImage}
        alt=""
        aria-hidden
        width={1920}
        height={1200}
        className="absolute inset-0 size-full object-cover opacity-50 filter brightness-90 saturate-110"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ backgroundImage: "var(--gradient-veil)" }}
      />
      <div aria-hidden className="ember absolute inset-0 opacity-80" />
      <Atmosphere count={25} />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Anniversary Kicker */}
        <div className="fade-slow flex items-center justify-center gap-2" style={{ animationDelay: "1.8s" }}>
          <Heart className="size-4 text-rose-500 fill-rose-500 heart-pulse" />
          <p className="eyebrow">{site.heroKicker}</p>
          <Heart className="size-4 text-rose-500 fill-rose-500 heart-pulse" />
        </div>

        {/* Names */}
        <p
          className="fade-slow mt-6 font-script text-3xl text-gold-soft sm:text-5xl"
          style={{ animationDelay: "1.95s" }}
        >
          {site.names.her} &amp; {site.names.him}
        </p>

        {/* Title */}
        <h1
          className="fade-slow mt-3 font-serif text-5xl leading-[0.95] font-light tracking-tight text-foreground sm:text-7xl md:text-8xl"
          style={{ animationDelay: "2.1s" }}
        >
          {site.heroTitle}
        </h1>

        {/* Subtitle */}
        <p
          className="fade-slow mx-auto mt-6 max-w-xl font-sans text-sm leading-relaxed text-muted-foreground sm:text-base"
          style={{ animationDelay: "2.6s" }}
        >
          {site.heroSubtitle}
        </p>

        {/* Live Elapsed Time Counter */}
        <div
          className="fade-slow mt-10 grid grid-cols-4 gap-3 sm:gap-6 max-w-md mx-auto rounded-xl border border-gold/30 bg-background/60 p-4 backdrop-blur-md shadow-2xl"
          style={{ animationDelay: "2.9s" }}
        >
          <div>
            <span className="block font-serif text-xl sm:text-3xl text-gold">{elapsed.days}</span>
            <span className="text-[0.65rem] font-sans tracking-widest text-muted-foreground uppercase">Days</span>
          </div>
          <div>
            <span className="block font-serif text-xl sm:text-3xl text-gold">{elapsed.hours}</span>
            <span className="text-[0.65rem] font-sans tracking-widest text-muted-foreground uppercase">Hours</span>
          </div>
          <div>
            <span className="block font-serif text-xl sm:text-3xl text-gold">{elapsed.minutes}</span>
            <span className="text-[0.65rem] font-sans tracking-widest text-muted-foreground uppercase">Mins</span>
          </div>
          <div>
            <span className="block font-serif text-xl sm:text-3xl text-gold">{elapsed.seconds}</span>
            <span className="text-[0.65rem] font-sans tracking-widest text-muted-foreground uppercase">Secs</span>
          </div>
        </div>

        {/* Call to action */}
        <div className="fade-slow mt-10" style={{ animationDelay: "3.2s" }}>
          <a
            href="#memories"
            className="group inline-flex items-center gap-3 rounded-full border border-gold/50 bg-gold/5 px-8 py-4 text-[0.7rem] tracking-[0.3em] text-gold uppercase transition-all duration-500 hover:border-gold hover:bg-gold/20 hover:shadow-[0_0_25px_rgba(212,175,55,0.3)]"
          >
            <Sparkles className="size-3.5" />
            {site.heroButton}
            <ArrowDown className="size-3.5 transition-transform duration-500 group-hover:translate-y-1" />
          </a>
        </div>
      </div>

      <div
        aria-hidden
        className="shimmer absolute bottom-8 left-1/2 h-14 w-px -translate-x-1/2 bg-gradient-to-b from-transparent to-gold/60"
      />
    </section>
  );
}
