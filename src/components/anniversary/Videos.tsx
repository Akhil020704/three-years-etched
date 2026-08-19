import { useState } from "react";
import { Film, Play } from "lucide-react";
import { videos } from "@/data/memories";
import { Reveal, Section, SectionHeading } from "./Section";

function getYouTubeDetails(url?: string) {
  if (!url) return null;
  const match = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]+)/);
  if (match && match[1]) {
    return {
      videoId: match[1],
      embedUrl: `https://www.youtube.com/embed/${match[1]}`,
      defaultPoster: `https://img.youtube.com/vi/${match[1]}/hqdefault.jpg`,
    };
  }
  return null;
}

function VideoCard({ video }: { video: (typeof videos)[number] }) {
  const [active, setActive] = useState(false);

  const yt = getYouTubeDetails(video.embedUrl || video.src);
  const finalEmbedUrl = yt ? yt.embedUrl : video.embedUrl;
  const finalPoster = video.poster || (yt ? yt.defaultPoster : undefined);

  return (
    <figure className="group overflow-hidden rounded-sm border border-border/60 bg-card/40 shadow-[var(--shadow-frame)]">
      <div className="relative aspect-video bg-background">
        {active ? (
          finalEmbedUrl ? (
            <iframe
              src={`${finalEmbedUrl}${finalEmbedUrl.includes("?") ? "&" : "?"}autoplay=1`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
              allowFullScreen
              className="size-full border-0"
            />
          ) : (
            <video
              src={video.src}
              poster={finalPoster}
              controls
              autoPlay
              playsInline
              preload="metadata"
              className="size-full object-cover"
            />
          )
        ) : (
          <button
            type="button"
            onClick={() => setActive(true)}
            aria-label={`Play ${video.title}`}
            className="relative size-full"
          >
            {finalPoster ? (
              <img
                src={finalPoster}
                alt=""
                loading="lazy"
                className="size-full object-cover opacity-80 transition-all duration-[1200ms] group-hover:scale-105 group-hover:opacity-100"
              />
            ) : (
              <span aria-hidden className="ember absolute inset-0" />
            )}
            <span className="absolute inset-0 flex items-center justify-center">
              <span className="flex size-16 items-center justify-center rounded-full border border-gold/50 bg-background/50 backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:bg-gold/15">
                <Play className="ml-0.5 size-5 text-gold" />
              </span>
            </span>
          </button>
        )}
      </div>
      <figcaption className="p-6">
        <h3 className="font-serif text-xl font-light">{video.title}</h3>
        {video.caption ? (
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{video.caption}</p>
        ) : null}
      </figcaption>
    </figure>
  );
}

export function Videos() {
  return (
    <Section id="videos" className="border-t border-border/40">
      <SectionHeading
        eyebrow="Moving Pictures"
        title="The ones with sound"
        intro="Turn the volume up when you're ready. Nothing plays on its own."
      />

      {videos.length === 0 ? (
        <Reveal className="mx-auto mt-16 max-w-md rounded-sm border border-dashed border-border p-10 text-center">
          <Film className="mx-auto size-6 text-gold-soft" />
          <p className="mt-4 text-sm text-muted-foreground">
            Small clips go in <span className="text-foreground">public/assets/videos/</span>. For
            large ones, paste a hosted link or a YouTube embed URL in{" "}
            <span className="text-foreground">src/data/memories.ts</span>.
          </p>
        </Reveal>
      ) : (
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {videos.map((v, i) => (
            <Reveal key={v.title + i} delay={i * 100}>
              <VideoCard video={v} />
            </Reveal>
          ))}
        </div>
      )}
    </Section>
  );
}
