import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX, Music } from "lucide-react";
import { music } from "@/data/memories";

function getYouTubeId(url?: string) {
  if (!url) return null;
  const match = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]+)/);
  return match ? match[1] : null;
}

export function AmbientSound() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  if (!music.enabled) return null;

  const ytId = getYouTubeId(music.src);

  const toggleSound = async () => {
    if (ytId) {
      setIsPlaying((prev) => !prev);
      return;
    }

    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      try {
        audio.volume = 0.5;
        await audio.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    }
  };

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  return (
    <div className="fixed bottom-6 left-6 z-40">
      {ytId ? (
        isPlaying && (
          <iframe
            src={`https://www.youtube.com/embed/${ytId}?autoplay=1&loop=1&playlist=${ytId}`}
            allow="autoplay"
            className="hidden"
            title="Background Music"
          />
        )
      ) : (
        <audio ref={audioRef} src={music.src} loop preload="none" />
      )}

      <button
        type="button"
        onClick={toggleSound}
        className="group relative flex items-center gap-3 rounded-full border border-gold/30 bg-background/80 px-4 py-2.5 text-xs tracking-wider text-foreground backdrop-blur-md transition-all duration-300 hover:border-gold hover:bg-background/95 hover:text-gold shadow-lg"
        title={isPlaying ? "Mute background music" : "Play background music"}
      >
        {isPlaying ? (
          <>
            <div className="flex items-center gap-1">
              <span className="sound-bar" />
              <span className="sound-bar" />
              <span className="sound-bar" />
              <span className="sound-bar" />
            </div>
            <span className="font-serif italic text-gold">Playing Background Song</span>
            <Volume2 className="size-4 text-gold animate-pulse" />
          </>
        ) : (
          <>
            <Music className="size-4 text-gold-soft transition-transform group-hover:scale-110" />
            <span className="font-sans text-[0.7rem] uppercase tracking-widest text-muted-foreground group-hover:text-foreground">
              Soundscape
            </span>
            <VolumeX className="size-3.5 text-muted-foreground" />
          </>
        )}
      </button>
    </div>
  );
}
