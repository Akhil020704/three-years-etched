import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/data/memories";
import { Loader } from "@/components/anniversary/Loader";
import { Nav } from "@/components/anniversary/Nav";
import { Hero } from "@/components/anniversary/Hero";
import { Gallery } from "@/components/anniversary/Gallery";
import { Videos } from "@/components/anniversary/Videos";
import { LittleThings } from "@/components/anniversary/LittleThings";
import { Letter } from "@/components/anniversary/Letter";
import { Finale } from "@/components/anniversary/Finale";
import { MusicToggle } from "@/components/anniversary/MusicToggle";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: site.metaTitle },
      { name: "description", content: site.metaDescription },
      { property: "og:title", content: site.metaTitle },
      { property: "og:description", content: site.metaDescription },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen bg-background">
      <Loader />
      <Nav />
      <Hero />
      <Gallery />
      <Videos />
      <LittleThings />
      <Letter />
      <Finale />
      <MusicToggle />
    </main>
  );
}
