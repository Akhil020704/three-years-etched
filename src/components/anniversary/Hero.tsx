import { ArrowDown } from "lucide-react";
import heroImage from "@/assets/hero-atmosphere.jpg";
import { site } from "@/data/memories";
import { Atmosphere } from "./Atmosphere";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100svh] items-center justify-center px-6">
      <img
        src={heroImage}
        alt=""
        aria-hidden
        width={1920}
        height={1200}
        className="absolute inset-0 size-full object-cover opacity-60"
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ backgroundImage: "var(--gradient-veil)" }}
      />
      <div aria-hidden className="ember absolute inset-0 opacity-70" />
      <Atmosphere count={22} />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <p className="fade-slow eyebrow" style={{ animationDelay: "1.8s" }}>
          {site.heroKicker}
        </p>
        <p
          className="fade-slow mt-6 font-script text-3xl text-gold-soft sm:text-4xl"
          style={{ animationDelay: "1.95s" }}
        >
          {site.names.her} &amp; {site.names.him}
        </p>
        <h1
          className="fade-slow mt-4 font-serif text-5xl leading-[0.95] font-light tracking-tight sm:text-7xl md:text-8xl"
          style={{ animationDelay: "2.1s" }}
        >
          {site.heroTitle}
        </h1>
        <p
          className="fade-slow mx-auto mt-8 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base"
          style={{ animationDelay: "2.6s" }}
        >
          {site.heroSubtitle}
        </p>
        <div className="fade-slow mt-12" style={{ animationDelay: "3.1s" }}>
          <a
            href="#memories"
            className="group inline-flex items-center gap-3 rounded-full border border-gold/40 px-8 py-4 text-[0.7rem] tracking-[0.28em] text-gold uppercase transition-all duration-500 hover:border-gold hover:bg-gold/10"
          >
            {site.heroButton}
            <ArrowDown className="size-3.5 transition-transform duration-500 group-hover:translate-y-0.5" />
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
