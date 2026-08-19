# Our Three Years

I want you to help me build a beautiful, highly personal 3-year anniversary website for my girlfriend.

Context

My girlfriend and I are approaching our 3-year anniversary. I'm currently on a trip to Goa, so I won't be able to meet her in person for the anniversary.

I want to create a website for her containing our memories, photos, videos, our story, and a personal message.

This is emotionally important to me, so I don't want a generic "romantic website template." I want it to feel like our story.

There is also some uncertainty in our relationship right now. She has told me that she loves me but isn't sure about our future because she believes her parents may not agree to our marriage. She has also suggested that I leave her and even get back with my ex because she wants me to be happy.

Because of this, DO NOT make the website feel like emotional pressure, begging, manipulation, or a "please don't leave me" website.

Instead, the website should celebrate the three years we shared, our memories, the love, the experiences, and everything meaningful about our relationship.

The final message can be emotional and honest, but it should respect her feelings and freedom.

Overall Goal

Create a cinematic + classy + emotional anniversary website.

The experience should feel like opening a digital memory book.

Think:

Cinematic

Premium

Elegant

Emotional

Personal

Smooth animations

Beautiful typography

Subtle romantic atmosphere

Not childish

Not overly pink

Not cheesy

Not overloaded with animations

The website should feel like something I intentionally created for her.

Recommended Tech Stack

Use:

HTML

CSS

Vanilla JavaScript

Do NOT introduce React/Next.js/etc. unless there is a very strong reason.

Hosting:

GitHub repository

GitHub Pages

I want the website to be completely free to host.

Media Storage

I want to avoid paid cloud storage.

Use the GitHub repository for:

/assets/photos/
/assets/videos/


Photos can be stored directly in the repository.

For videos, design the website so it can support local .mp4 files from GitHub for small/compressed videos.

However, if GitHub is unsuitable for large videos, design the video section so that I can optionally use external video URLs later without changing the overall website.

IMPORTANT:

Do not assume that I already have the photos/videos.

Create a clean structure where I can simply place my files into folders and update a small JavaScript data structure or configuration file.

Website Structure

I want the website to have multiple sections.

1. Opening / Hero

The first screen should be cinematic.

Possible concept:

A dark background with subtle particles/light effects.

Text:

"Three Years."

Then:

"Three years of memories, laughter, fights, adventures, and a thousand little moments."

Then a button:

"Enter Our Story ❤️"

When clicked, smoothly transition into the story.

Do not use this exact copy if you can create something better.

The text should eventually be customized based on my actual story.

2. Our Story

Create a beautiful timeline.

Example:

The Beginning
↓
Our First Memories
↓
The Moments That Changed Everything
↓
Our Adventures
↓
The Random Little Things
↓
Three Years


Each timeline entry should support:

Date

Title

Short description

One or more photos

Optional video

Use elegant scroll animations.

I will later provide the actual dates and memories.

3. Photo Gallery

Create a premium photo gallery.

Requirements:

Masonry-style or elegant grid layout

Smooth hover effects

Click photo → fullscreen/lightbox

Previous/next navigation

Captions

Smooth transitions

Mobile responsive

Lazy loading where appropriate

I should be able to add photos simply by placing them in:

/assets/photos/


and adding their filename to a JavaScript array/config.

Example:

const photos = [
    {
        src: "assets/photos/01.jpg",
        caption: "Our first trip"
    },
    {
        src: "assets/photos/02.jpg",
        caption: "That random beautiful day"
    }
];


Make this easy for a non-expert to update.

4. Video Memories

Create a dedicated video section.

Each video should have:

Thumbnail/poster

Title

Short caption

Play button

Elegant video player

Fullscreen support

Example:

const videos = [
    {
        src: "assets/videos/memory1.mp4",
        title: "That day",
        caption: "One of my favourite memories."
    }
];


Make sure videos don't automatically play with sound.

Keep the design elegant.

5. "Little Things I Love About You"

Create a section that isn't just about major memories.

Examples:

The way you laugh

Our random conversations

The stupid jokes

The small fights

The way you care

The little moments nobody else knows about

Use animated cards or a beautiful scrolling layout.

I will provide the actual content later.

6. Memory Counter / Statistics

Create a tasteful "Our Three Years" section.

Possible counters:

3 Years

X Months

X Memories

X Photos

X Trips

Infinite little moments

Don't make fake numbers.

Make these configurable so I can enter the actual values.

7. Letter / Personal Message

Create a beautiful letter section.

This should look like a handwritten/personal letter rather than a normal webpage paragraph.

Include:

"To you,"

Then my message.

The letter should support:

Paragraphs

Line breaks

Subtle typing/reveal animation

Elegant typography

IMPORTANT:

Do not write the final letter yet.

First help me structure it.

I will give you my raw feelings and thoughts, and you can help turn them into a genuine message without making it manipulative or overly dramatic.

8. Final Section

The ending should be emotional but tasteful.

Something along the lines of:

"Whatever tomorrow looks like, these three years will always be a part of my story."

Then:

"Happy 3 Years ❤️"

But don't lock this copy yet.

We will decide the ending after I give you the actual story.

The final screen should have a cinematic fade-out.

Visual Design

I want:

Dark cinematic background

Black / deep charcoal tones

Warm white typography

Very subtle red/burgundy romantic accents

Gold accents where appropriate

Soft gradients

Glassmorphism only if tasteful

Elegant serif + modern sans-serif combination

Lots of breathing room

Premium photography presentation

Avoid:

Bright pink

Excessive hearts

Cartoon graphics

Cheap gradients

Generic Valentine's Day aesthetic

Too many floating hearts

Excessive animations

Clutter

Think:

cinematic movie + luxury photo album + personal love letter.

Animations

Use animations carefully.

Possible effects:

Fade-in

Slide-up

Parallax

Image reveal

Text reveal

Timeline animation

Smooth scrolling

Subtle particles

Cursor interaction on desktop

Lightbox transitions

The website must still perform well on mobile.

Respect:

prefers-reduced-motion


for users who don't want animations.

Music

I may want background music.

Do NOT autoplay music with sound because browsers usually block it and it can be annoying.

Instead, create a small elegant music button.

Something like:

🎵

Click → music starts.

Click again → music pauses.

I will provide the music file later.

Support:

/assets/music/song.mp3


Mobile Design

This is extremely important.

The website must work beautifully on:

iPhone

Android

Desktop

Tablet

Don't just make the desktop version and call it responsive.

The photo gallery, timeline, videos, typography and animations should all adapt properly.

Website Navigation

Create a minimal navigation system.

Possible sections:

Our Story
Memories
Videos
Little Things
Letter


On mobile, use a clean hamburger/menu or elegant bottom navigation if appropriate.

The navigation should not dominate the experience.

Loading Experience

Create a short cinematic loading screen.

Example:

A little something for you...


Then transition into:

Three Years.


Keep loading extremely short and don't fake-load unnecessarily.

Privacy / Security

This is a personal website.

Don't expose unnecessary personal information.

Don't include:

Phone numbers

Addresses

Private credentials

Personal IDs

If the website is publicly accessible through GitHub Pages, explain that anything stored in the repository can potentially be accessed by someone who knows the URL.

If necessary, explain safer alternatives for truly private photos/videos.

GitHub Structure

Design the project approximately like:

anniversary-website/
│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── script.js
│   └── memories.js
│
├── assets/
│   ├── photos/
│   ├── videos/
│   ├── music/
│   └── icons/
│
└── README.md


Keep the architecture simple.

Important Development Rule

DO NOT dump the entire website code immediately.

Build it with me step-by-step.

First:

Understand the concept.

Ask me for the information you actually need.

Create the project structure.

Build the visual foundation.

Build each section.

Add my real memories/content.

Add photos/videos.

Polish animations.

Optimize for mobile.

Prepare GitHub Pages deployment.

When giving code, clearly tell me:

Which file it belongs in

What I should replace

What I should add

Where photos/videos go

How to test it

First Conversation

Start by asking me for the following:

Relationship information

Our anniversary date

How we met

How our relationship started

5–10 important memories

Our favourite trips/places

Funny moments

Difficult moments we overcame

Things I love about her

Things that are uniquely "us"

Media

Approximate number of photos

Approximate number of videos

Approximate video sizes

Whether I have music I want to use

Design

Ask whether I want:

Cinematic + classy

More romantic

More minimal

More playful

My default preference is:

Cinematic + classy + emotional.

Most Important Rule

This website is not supposed to convince her to stay.

It is supposed to say:

"This is what these three years meant to me."

Make it beautiful enough that when she opens it, she feels the memories—not pressure.

Let's build something genuinely memorable.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://three-years-etched.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/17d0e9aa-9fb5-472c-938b-27f84ca5651b).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
