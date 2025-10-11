import type { Project } from "./types";

export const projects: Project[] = [
  {
    id: "sv-robot",
    slug: "hellbent-robot-visuals",
    title: "HELLBENT Tour Visuals — “Robot” Sequence",
    year: 2025,
    roles: ["VFX", "Motion"],
    tags: ["Stage Visuals", "3D", "Notch/AE"],
    summary:
      "Animated robot character, shader-driven scans, and sound-reactive FX delivered as show-ready loops.",
    cover: "/covers/cloonee.jpg",      // placeholder
    mediaType: "image",
    mediaSrc: "/public/videos/cloonee.mp4",   // placeholder
  },
  {
    id: "mv-dream",
    slug: "music-video-dream-sequence",
    title: "Music Video — “Dream Sequence”",
    year: 2024,
    roles: ["Editor", "VFX"],
    tags: ["Music Videos", "Compositing", "Color"],
    summary:
      "Edit, cleanup, matchmove, and stylized grade to achieve a surreal dreamlike aesthetic.",
    cover: "/vercel.svg",
    mediaType: "image",
    mediaSrc: "/vercel.svg",
  },
  {
    id: "vis-citrus",
    slug: "visualizer-citrus-energy",
    title: "Visualizer — Citrus Energy Campaign",
    year: 2025,
    roles: ["Motion", "Design"],
    tags: ["Visualizers", "2D/3D", "Brand"],
    summary:
      "Hybrid 2D/3D visualizer series for streaming platforms and social media rollout.",
    cover: "/vercel.svg",
    mediaType: "image",
    mediaSrc: "/vercel.svg",
  },
  {
    id: "tv-glitch",
    slug: "tv-glitch-bloom",
    title: "TV Broadcast Package — “GLITCH BLOOM”",
    year: 2023,
    roles: ["Design", "Motion"],
    tags: ["TV", "Broadcast", "AE"],
    summary:
      "Animated openers and lower-third transitions for a TV network package inspired by glitch art.",
    cover: "/vercel.svg",
    mediaType: "image",
    mediaSrc: "/vercel.svg",
  },
];


