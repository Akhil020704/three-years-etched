/* =========================================================================
 *  THE ONLY FILE YOU NEED TO EDIT
 * =========================================================================
 *  Everything on the website — the photos, videos, little things,
 *  the counters, the letter, timeline, and the ending — is written below.
 *
 *  WHERE DO FILES GO?
 *    photos  ->  public/assets/photos/     use as "/assets/photos/01.jpg"
 *    videos  ->  public/assets/videos/     use as "/assets/videos/clip.mp4"
 *    music   ->  public/assets/music/      use as "/assets/music/song.mp3"
 * ========================================================================= */

export const site = {
  /** Your names — shown in the nav and hero. */
  names: { her: "Manasa", him: "Akhilesh" },

  /** Anniversary start date for live counter (YYYY-MM-DD) */
  startDate: "2023-08-23T00:00:00",

  /** Shown on the very first loading screen. */
  loadingLine: "a little something for you…",

  /** Hero */
  heroKicker: "23 . 08 . 2023",
  heroTitle: "Three Years.",
  heroSubtitle:
    "Three years of memories, laughter, fights, adventures — and a thousand quiet moments nobody else will ever know about.",
  heroButton: "Enter Our Memories",

  /** Tab title / social preview */
  metaTitle: "Three Years — Our Story",
  metaDescription:
    "A quiet memory book for three years of us: our story, our photos, our videos, and everything in between.",
};

/* -------------------------------------------------------------------------
 *  2. PHOTO GALLERY & POLAROID COLLAGE
 *  Drop files into public/assets/photos/ then list them here.
 *  You can add date and location if you'd like them to appear on Polaroids.
 * ---------------------------------------------------------------------- */
export type Photo = {
  src: string;
  caption?: string;
  date?: string;
  location?: string;
};

export const photos: Photo[] = [
  // Example uploaded photo slots:
  { src: "/assets/photos/1.jpeg", caption: "Our first trip together", date: "Aug 2023", location: "Goa" },
  { src: "/assets/photos/2.jpg", caption: "Our first photoshoot <3", location: "Ananthagiri" },
  { src: "/assets/photos/3.jpg", caption: "Those laughs get my heart every time", date: "Oct 2023" },
  { src: "/assets/photos/4.png", caption: "Love looks like this💕", date: "Feb 2024" },
  { src: "/assets/photos/5.jpg", caption: "This letter will last longer than our lives💘", date: "Feb 2024" },
];

/* -------------------------------------------------------------------------
 *  3. OUR STORY TIMELINE
 * ---------------------------------------------------------------------- */
export type TimelineEvent = {
  date: string;
  title: string;
  description: string;
  tag?: string;
};

export const timelineEvents: TimelineEvent[] = [
  {
    date: "Immemorial Date",
    title: "Where It All Began",
    description: "The spark that started our 3-year journey. The truth & dare and late-night romantic talks will be forever etched in my heart.",
    tag: "Beginning",
  },
  {
    date: "First Date 3 years ago - 23/08/2023",
    title: "Beginning of my Golden Days",
    description: "Exploring new places, holding hands in every moment, and watching the city together.",
    tag: "Travel",
  },
  {
    date: "Late Night Talks",
    title: "A Thousand Small Moments",
    description: "Chats that lasted until sunrise, sharing dreams, exploring romance, fears, and stupid jokes nobody else got.",
    tag: "Memories",
  },
  {
    date: "Every Day",
    title: "Daily dose of you",
    description: "My life couldn't get better than our office lives where I get to see you every day.",
    tag: "Daily",
  },
  {
    date: "Three Years Etched",
    title: "Looking Back with Love",
    description: "1,095 days of growing together, caring for each other, and holding a place in each other's hearts.",
    tag: "Milestone",
  },
];

/* -------------------------------------------------------------------------
 *  4. VIDEO MEMORIES
 * ---------------------------------------------------------------------- */
export type Video = {
  title: string;
  caption?: string;
  src?: string;
  embedUrl?: string; // Standard YouTube link (watch, share, embed, shorts) or iframe URL
  poster?: string;   // Optional thumbnail (auto-fetched for YouTube videos if omitted)
};

export const videos: Video[] = [
  // {
  //   title: "My everything",
  //   caption: "The Computer and Images weren't enough to capture our Journey",
  //   src: "/assets/videos/memory1.mp4",
  //   poster: "/assets/photos/01.jpg",
  // },
  // Example for adding YouTube videos (supports any YouTube URL or embed link):
  {
    title: "Amour2",
    caption: "No camera or screen could ever capture our most of the journey",
    embedUrl: "https://youtu.be/fwFX0l5jGIU?si=KMTnI_pMBP4XPeQt",
  },
];

/* -------------------------------------------------------------------------
 *  5. LITTLE THINGS I LOVE ABOUT YOU
 * ---------------------------------------------------------------------- */
export const littleThings: string[] = [
  "The way you laugh before the joke is even finished.",
  "Our conversations that start about nothing and last for hours.",
  "The stupid jokes only the two of us find funny.",
  "The small fights, and how quickly they stop mattering.",
  "The way you care about people without announcing it.",
  "The quiet moments nobody else will ever know about.",
  "Fun fact is, there's a song called Manasa in Munna movie where the titles were Manasa and Sona, the song which my sisters would sing for me saying the song has my name. but after i met you, that was not only for me, it was for both of us"
];

/* -------------------------------------------------------------------------
 *  6. COUNTERS
 * ---------------------------------------------------------------------- */
export const stats: { value: string; label: string }[] = [
  { value: "3", label: "Years Together" },
  { value: "36", label: "Months of Love" },
  { value: "1,095", label: "Days & Counting" },
  { value: "∞", label: "Quiet Moments" },
];

/* -------------------------------------------------------------------------
 *  7. THE LETTER
 * ---------------------------------------------------------------------- */
export const letter = {
  salutation: "Manasaaaaaa,",
  paragraphs: [
    "To my Manasa,",
    "3 years, Manasa... seriously. Sometimes I still can't believe we came this far. We were just two people who started talking, and somehow you became such a big part of my life.",
    "I remember so many small things about us. The stupid talks, the random fights, laughing for no reason, annoying each other, missing each other, and all those little moments which maybe looked normal to everyone else but meant so much to me.",
    "You became a person I could tell everything to.",
    "And somewhere in these 3 years, you became my home.",
    "I've come to the stage where I can't even stay a day without you, even if I stayed my mind and heart would always be thinking about. ",
    "I don't how to stay without you, I don't know how to live without you",
    "There were things I wanted in my life, one of them was you, and I got you, I got you for 3 years, I got you for 1095 days, I got you for 26280 hours",
    "There wasn't a single day whenever I was in temple and I didn't wished for you",
    "You were always my No.1 wish to god, just asking him please don't take away her from me",
    "I miss the way you hold my hand",
    "I miss the way you tease me",
    "I miss the way you were such a cutiepie for me",
    "I know things are not the same now. I know you're scared about the future. I know your parents, marriage, everything is making you think differently. And honestly, I don't know what is going to happen to us either.",
    "But Manasa, I want you to know one thing.",
    "I never loved you because I was sure that everything would be easy.",
    "I loved you because you were you.",
    "Even when we fought. Even when you made me angry. Even when I didn't understand you. Even when things between us were not perfect.",
    "I still wanted you.",
    "And hearing you say that you want me to leave you and be happy... I don't know how to explain how much that hurts me.",
    "Because you are the person I was happy with.",
    "I know you want me to be happy, but you don't have to decide that for me.",
    "Still, I don't want this letter to make you feel guilty. I don't want you to stay because you feel bad for me. I don't want you to choose me because I cried or because I wrote this.",
    "I just want you to know what you meant to me.",
    "You gave me 3 years of memories that I will never forget.",
    "And if someday everything works out for us, I'll be the happiest person.",
    "And if life takes us somewhere else... I don't know how I'll accept that right now.",
    "But I'll always be thankful that I got to know you, love you, annoy you, fight with you, laugh with you, and call you mine for these 3 years.",
    "Manasa, I really really love you.",
    "Maybe I don't always show it in the right way.",
    "Maybe I say stupid things.",
    "Maybe I get angry.",
    "Maybe I overthink.",
    "But my feelings for you were never fake.",
    "I only wish that you'd forget this 'I won't marry this guy thing', and I'm sure you'll do it.",
    "Not even once.",
    "Happy 3 years, my love.",
    "Thank you for being such a big part of my life.",
    "And thank you for all the little memories that nobody else knows about.",
    "I don't know what our next chapter will be.",
    "But I know one thing...",
    "I'll always be glad that my story had you in it.Thank you ra! ❤️",
    "Still for today my heart waits for your 'I love you Akhilesh', even calling my name is such a big thing for me like I will be in clouds.",
    "I love you is such a small word for you Manasa, my definition for Love was and is Manasa, may be It would be if I say",
    "I Manasa you💘"
  ],
  signature: "— with love, Akhilesh",
};

/* -------------------------------------------------------------------------
 *  8. THE ENDING
 * ---------------------------------------------------------------------- */
export const finale = {
  line: "Whatever tomorrow looks like, these three years will always be the sweetest part of my story. Thank youuuu soooo much Nayakiiii for being in my life💕",
  wish: "Happy 3 Years 💘",
};

/* -------------------------------------------------------------------------
 *  MUSIC & SOUNDSCAPE
 * ---------------------------------------------------------------------- */
export const music = {
  enabled: true,
  src: "/assets/music/song.mp3", // Place your audio file in public/assets/music/ OR paste a YouTube video link / MP3 link here!
};
