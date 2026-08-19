import { useState, useRef, useEffect } from "react";
import { Sparkles, Heart } from "lucide-react";

interface Lantern {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  opacity: number;
  message: string;
}

const MESSAGES = [
  "Thank you for 3 wonderful years",
  "Always in my heart",
  "Goa sunsets & endless talks",
  "Every moment with you mattered",
  "Your happiness comes first",
  "Forever grateful for us",
  "A thousand sweet memories",
];

export function WishLanterns() {
  const [lanterns, setLanterns] = useState<Lantern[]>([]);
  const nextId = useRef(1);

  const addLantern = (clientX?: number, clientY?: number) => {
    const x = clientX ?? Math.random() * (window.innerWidth - 100) + 50;
    const y = clientY ?? window.innerHeight - 100;
    const message = MESSAGES[Math.floor(Math.random() * MESSAGES.length)];

    const newLantern: Lantern = {
      id: nextId.current++,
      x,
      y,
      size: Math.random() * 16 + 24,
      speed: Math.random() * 0.8 + 0.6,
      opacity: 0.95,
      message,
    };

    setLanterns((prev) => [...prev.slice(-15), newLantern]);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setLanterns((prev) =>
        prev
          .map((l) => ({
            ...l,
            y: l.y - l.speed,
            opacity: l.y < 100 ? l.opacity - 0.015 : l.opacity,
          }))
          .filter((l) => l.opacity > 0)
      );
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      onClick={(e) => addLantern(e.clientX, e.clientY)}
      className="relative my-12 mx-auto h-[380px] w-full max-w-5xl cursor-pointer overflow-hidden rounded-xl border border-gold/30 bg-gradient-to-b from-neutral-950 via-background to-neutral-950 p-6 text-center shadow-2xl"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.12),transparent_70%)]" />

      {/* Instructional text */}
      <div className="relative z-10 flex flex-col items-center justify-center pt-8">
        <span className="flex items-center gap-2 rounded-full border border-gold-soft/30 bg-gold/10 px-3 py-1 text-xs font-sans tracking-widest text-gold uppercase">
          <Sparkles className="size-3.5 animate-spin" /> Interactive Memory Sky
        </span>
        <h4 className="mt-3 font-serif text-2xl sm:text-3xl text-foreground">
          Release a Wish into the Sky
        </h4>
        <p className="mt-2 font-sans text-xs sm:text-sm text-muted-foreground italic">
          Tap or click anywhere on this canvas to release a glowing memory lantern into the night.
        </p>
      </div>

      {/* Floating Lantern Elements */}
      {lanterns.map((l) => (
        <div
          key={l.id}
          className="absolute z-20 pointer-events-none flex flex-col items-center -translate-x-1/2 transition-transform duration-100"
          style={{
            left: `${l.x}px`,
            top: `${l.y}px`,
            opacity: l.opacity,
          }}
        >
          {/* Glowing lantern body */}
          <div
            className="flex items-center justify-center rounded-t-full bg-gradient-to-t from-amber-500 via-rose-500 to-amber-300 p-2 shadow-[0_0_25px_rgba(245,158,11,0.8)]"
            style={{ width: `${l.size}px`, height: `${l.size * 1.3}px` }}
          >
            <Heart className="size-3 fill-amber-100 text-amber-100 animate-pulse" />
          </div>
          <span className="mt-1 max-w-[160px] rounded-md bg-black/60 px-2 py-0.5 font-serif text-[0.7rem] text-amber-200 backdrop-blur-xs">
            {l.message}
          </span>
        </div>
      ))}
    </div>
  );
}
