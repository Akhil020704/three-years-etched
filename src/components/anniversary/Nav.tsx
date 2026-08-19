import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { href: "#story", label: "Our Story" },
  { href: "#memories", label: "Memories" },
  { href: "#videos", label: "Videos" },
  { href: "#little-things", label: "Little Things" },
  { href: "#letter", label: "Letter" },
];

export function Nav() {
  const [solid, setSolid] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-700",
        solid
          ? "border-b border-border/60 bg-background/80 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="font-serif text-lg tracking-[0.25em] text-gold-soft">
          III
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[0.7rem] tracking-[0.2em] text-muted-foreground uppercase transition-colors hover:text-gold"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="rounded-full border border-border p-2 text-foreground/80 transition-colors hover:text-gold md:hidden"
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </nav>

      <div
        className={cn(
          "overflow-hidden border-t border-border/50 bg-background/95 backdrop-blur-xl transition-[max-height] duration-500 md:hidden",
          open ? "max-h-80" : "max-h-0",
        )}
      >
        <ul className="px-6 py-4">
          {links.map((l) => (
            <li key={l.href} className="border-b border-border/40 last:border-0">
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-4 font-serif text-xl text-foreground/90"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
