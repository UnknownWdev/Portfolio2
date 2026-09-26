export const GITHUB_URL = "https://github.com/UnknownWdev?tab=repositories";
export const LINKEDIN_URL =
  "https://www.linkedin.com/in/awal-lasisi-375a32299";

export interface Project {
  index: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  url: string;
  screenshot: string;
  tint: string;
}

export const PROJECTS: Project[] = [
  {
    index: "01",
    title: "Berserk — The Complete Guide",
    category: "Interactive Editorial",
    description:
      "A sprawling fan guide to Kentaro Miura's dark-fantasy epic — story arcs, 3D-tilting character cards, adaptation reviews and an atmospheric gallery, engineered as a long-form interactive reading experience.",
    tags: ["React", "Tailwind CSS", "Long-form UI", "Animation"],
    url: "https://berserk-xi.vercel.app/",
    screenshot:
      "https://image.thum.io/get/width/1600/crop/1000/noanimate/https://berserk-xi.vercel.app/",
    tint: "#7c1d1d",
  },
  {
    index: "02",
    title: "Awal — Landscape Studio",
    category: "Studio Landing Page",
    description:
      "A premium web presence for a Riyadh-based landscaping & urban-design practice — service disciplines, a five-step methodology timeline and client testimonials wrapped in an elegant, biophilic art direction.",
    tags: ["React", "Landing Page", "Responsive", "Art Direction"],
    url: "https://landscape-rosy-eight.vercel.app/",
    screenshot:
      "https://image.thum.io/get/width/1600/crop/1000/noanimate/https://landscape-rosy-eight.vercel.app/",
    tint: "#2f5d3a",
  },
  {
    index: "03",
    title: "Ember & Oak",
    category: "Hospitality Website",
    description:
      "A story-first restaurant experience built around a 900°C wood-fired oven — warm typography, brand storytelling and founders' narrative that turn a neighbourhood spot into a destination.",
    tags: ["React", "Brand Storytelling", "UI Design"],
    url: "https://ember-oak-vert-delta.vercel.app/",
    screenshot:
      "https://image.thum.io/get/width/1600/crop/1000/noanimate/https://ember-oak-vert-delta.vercel.app/",
    tint: "#8a4b1f",
  },
  {
    index: "04",
    title: "Mindful Notes",
    category: "Full-Stack Blog App",
    description:
      "A clean blogging platform with live search and post publishing — my take on a complete CRUD application, focused on readable typography and a friction-free writing flow end to end.",
    tags: ["React", "Node.js", "CRUD", "Search"],
    url: "https://intern-six-rho.vercel.app/",
    screenshot:
      "https://image.thum.io/get/width/1600/crop/1000/noanimate/https://intern-six-rho.vercel.app/",
    tint: "#33415c",
  },
];

export interface Skill {
  name: string;
  level: number;
}

export const SKILLS: Skill[] = [
  { name: "HTML5", level: 92 },
  { name: "CSS3", level: 88 },
  { name: "JavaScript", level: 85 },
  { name: "React", level: 86 },
  { name: "TypeScript", level: 78 },
  { name: "Node.js", level: 72 },
];

export const MARQUEE_ITEMS = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "TypeScript",
  "Node.js",
  "Tailwind CSS",
  "Vite",
  "Git & GitHub",
  "Responsive Design",
];
