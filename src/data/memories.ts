/* =========================================================================
 *  THE ONLY FILE YOU NEED TO EDIT
 * =========================================================================
 *  Everything on the website — the timeline, photos, videos, little things,
 *  the counters, the letter and the ending — is written below.
 *
 *  WHERE DO FILES GO?
 *    photos  ->  public/assets/photos/     use as "/assets/photos/01.jpg"
 *    videos  ->  public/assets/videos/     use as "/assets/videos/clip.mp4"
 *    music   ->  public/assets/music/      use as "/assets/music/song.mp3"
 *
 *  Big videos (over ~50 MB) are a bad fit for a repo. In that case upload
 *  them anywhere (Google Drive direct link, Cloudflare R2, YouTube) and put
 *  the URL in `src` (for a normal file) or `embedUrl` (for YouTube/Vimeo).
 *  Nothing else about the site has to change.
 * ========================================================================= */

export const site = {
  /** Shown on the very first loading screen. */
  loadingLine: "a little something for you…",

  /** Hero */
  heroKicker: "23 . 08 . 2023",
  heroTitle: "Three Years.",
  heroSubtitle:
    "Three years of memories, laughter, fights, adventures — and a thousand small moments nobody else will ever know about.",
  heroButton: "Enter our story",

  /** Tab title / social preview */
  metaTitle: "Three Years — Our Story",
  metaDescription:
    "A quiet memory book for three years of us: our story, our photos, our videos, and everything in between.",
};

/* -------------------------------------------------------------------------
 *  1. OUR STORY  (timeline)
 *  Add / remove entries freely. Photos and video are optional.
 * ---------------------------------------------------------------------- */
export type TimelineEntry = {
  date: string;
  title: string;
  text: string;
  photos?: string[];
  video?: string;
};

export const timeline: TimelineEntry[] = [
  {
    date: "23 August 2023",
    title: "The Beginning",
    text: "Two strangers on Snapchat. No mutual friends, no reason, no plan — just a message that could have gone nowhere and somehow went everywhere. I still think about how easily we could have missed each other.",
    photos: [],
  },
  {
    date: "Add the date",
    title: "Our First Memories",
    text: "Replace this with the first thing that felt real — the first call that lasted too long, the first time we met, the first time it stopped feeling like a coincidence.",
    photos: [],
  },
  {
    date: "Add the date",
    title: "The Moments That Changed Everything",
    text: "The turning point. Write it the way you remember it, not the way it should sound.",
    photos: [],
  },
  {
    date: "2026",
    title: "Goa",
    text: "The one we promised ourselves at the start of the year — and actually kept. There are only a few places left that we haven't covered together.",
    photos: [],
  },
  {
    date: "Every ordinary day",
    title: "The Random Little Things",
    text: "The unremarkable evenings that turned out to be the ones I remember best.",
    photos: [],
  },
  {
    date: "23 August 2026",
    title: "Three Years",
    text: "Here. Still us.",
    photos: [],
  },
];

/* -------------------------------------------------------------------------
 *  2. PHOTO GALLERY
 *  Drop files into public/assets/photos/ then list them here.
 * ---------------------------------------------------------------------- */
export type Photo = { src: string; caption?: string };

export const photos: Photo[] = [
  // { src: "/assets/photos/01.jpg", caption: "Our first trip" },
  // { src: "/assets/photos/02.jpg", caption: "That random beautiful day" },
];

/* -------------------------------------------------------------------------
 *  3. VIDEO MEMORIES
 *  Either a local/hosted file (src) OR a YouTube/Vimeo embed (embedUrl).
 *  `poster` is an optional still image shown before playing.
 * ---------------------------------------------------------------------- */
export type Video = {
  title: string;
  caption?: string;
  src?: string;
  embedUrl?: string;
  poster?: string;
};

export const videos: Video[] = [
  // { src: "/assets/videos/memory1.mp4", poster: "/assets/photos/01.jpg",
  //   title: "That day", caption: "One of my favourite memories." },
  // { embedUrl: "https://www.youtube.com/embed/XXXXXXX",
  //   title: "Goa", caption: "Too big for the repo — hosted elsewhere." },
];

/* -------------------------------------------------------------------------
 *  4. LITTLE THINGS I LOVE ABOUT YOU
 * ---------------------------------------------------------------------- */
export const littleThings: string[] = [
  "The way you laugh before the joke is even finished.",
  "Our conversations that start about nothing and last for hours.",
  "The stupid jokes only the two of us find funny.",
  "The small fights, and how quickly they stop mattering.",
  "The way you care about people without announcing it.",
  "The moments nobody else knows about.",
];

/* -------------------------------------------------------------------------
 *  5. COUNTERS — put real numbers only.
 * ---------------------------------------------------------------------- */
export const stats: { value: string; label: string }[] = [
  { value: "3", label: "Years" },
  { value: "36", label: "Months" },
  { value: "1", label: "Trip to Goa" },
  { value: "∞", label: "Little moments" },
];

/* -------------------------------------------------------------------------
 *  6. THE LETTER
 *  A skeleton to fill in. Each string is one paragraph.
 *  Keep it honest and gentle — this is not a place to ask for anything.
 * ---------------------------------------------------------------------- */
export const letter = {
  salutation: "To you,",
  paragraphs: [
    "[Open simply. Where you are as you write this, and who you're writing to.]",
    "[What these three years actually gave you — name one or two real moments, not general words.]",
    "[Something you learned from her, or something she changed in you without trying.]",
    "[Say plainly that whatever she decides about the future, none of this becomes less true, and that her peace matters to you.]",
    "[Close with gratitude. No requests, no promises she has to answer.]",
  ],
  signature: "— always, in some way",
};

/* -------------------------------------------------------------------------
 *  7. THE ENDING
 * ---------------------------------------------------------------------- */
export const finale = {
  line: "Whatever tomorrow looks like, these three years will always be part of my story.",
  wish: "Happy 3 Years",
};

/* -------------------------------------------------------------------------
 *  MUSIC — put a file at public/assets/music/song.mp3 and set enabled: true.
 *  Never autoplays with sound; she taps the note to start it.
 * ---------------------------------------------------------------------- */
export const music = {
  enabled: false,
  src: "/assets/music/song.mp3",
};
