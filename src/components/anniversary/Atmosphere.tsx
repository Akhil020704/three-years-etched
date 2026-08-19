import { useMemo } from "react";

/** Subtle drifting embers/dust. Purely decorative. */
export function Atmosphere({ count = 18 }: { count?: number }) {
  const dots = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        left: (i * 97) % 100,
        size: 1 + ((i * 13) % 3),
        dur: 18 + ((i * 7) % 16),
        delay: -((i * 3.3) % 20),
        dx: ((i % 5) - 2) * 18,
        op: 0.25 + ((i % 4) * 0.12),
      })),
    [count],
  );

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((d, i) => (
        <span
          key={i}
          className="particle absolute bottom-0 rounded-full bg-gold"
          style={{
            left: `${d.left}%`,
            width: d.size,
            height: d.size,
            opacity: d.op,
            ["--dur" as string]: `${d.dur}s`,
            ["--delay" as string]: `${d.delay}s`,
            ["--dx" as string]: `${d.dx}px`,
          }}
        />
      ))}
    </div>
  );
}
