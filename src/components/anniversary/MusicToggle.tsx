import { useEffect, useRef, useState } from "react";
import { Music, Pause } from "lucide-react";
import { music } from "@/data/memories";

export function MusicToggle() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    return () => audioRef.current?.pause();
  }, []);

  if (!music.enabled) return null;

  const toggle = async () => {
    const el = audioRef.current;
    if (!el) return;
    if (playing) {
      el.pause();
      setPlaying(false);
      return;
    }
    try {
      el.volume = 0.5;
      await el.play();
      setPlaying(true);
    } catch {
      setPlaying(false);
    }
  };

  return (
    <>
      <audio ref={audioRef} src={music.src} loop preload="none" />
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? "Pause music" : "Play music"}
        className="fixed right-5 bottom-5 z-40 rounded-full border border-gold/35 bg-background/70 p-3.5 text-gold backdrop-blur-md transition-all duration-500 hover:border-gold hover:bg-gold/10"
      >
        {playing ? <Pause className="size-4" /> : <Music className="size-4" />}
      </button>
    </>
  );
}
