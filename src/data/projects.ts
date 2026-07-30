export type AspectRatio = "16:9" | "9:16" | "1:1" | "4:5";

export interface Project {
  id: string;
  title: string;
  thumbnail?: string;
  videoUrl: string;
  aspectRatio: AspectRatio;
  category: string;
  tags: string[];
  description: string;
}

export const projects: Project[] = [
  {
    id: "tech-vision",
    title: "TechVision Concept",
    thumbnail: 'https://assets.cdn.filesafe.space/0fHl1lFzaTIrwq0wzwCw/media/6a6b202dac1586969821d8ea.png',
    videoUrl: "https://assets.cdn.filesafe.space/0fHl1lFzaTIrwq0wzwCw/media/6a689cdc2cfe8da14c951bc7.mp4",
    aspectRatio: "16:9",
    category: "Tech & Corporate",
    tags: ["Motion Graphics", "Promo", "B-roll"],
    description: "A fast-paced promotional video for a tech startup, showcasing dynamic transitions and sound design."
  },
  {
    id: "creator-x",
    title: "Creator X Shorts",
    // thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200&auto=format&fit=crop",
    videoUrl: "https://assets.cdn.filesafe.space/0fHl1lFzaTIrwq0wzwCw/media/6a689cdc2cfe8da14c951bc2.mp4",
    aspectRatio: "9:16",
    category: "Short-Form",
    tags: ["TikTok", "Reels", "Captions"],
    description: "High-retention vertical edits designed specifically for Instagram Reels and TikTok algorithms."
  },
  {
    id: "velocity-brands",
    title: "Velocity Brands",
    thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2942&auto=format&fit=crop",
    videoUrl: "https://assets.cdn.filesafe.space/0fHl1lFzaTIrwq0wzwCw/media/6a68a186b4176d3727edfc67.mp4",
    aspectRatio: "16:9",
    category: "Commercial",
    tags: ["Automotive", "Color Grading", "Cinematic"],
    description: "A premium automotive commercial edit featuring aggressive color grading and intense pacing."
  },
  {
    id: "studio-focus",
    title: "Studio Focus",
    thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop",
    videoUrl: "https://assets.cdn.filesafe.space/0fHl1lFzaTIrwq0wzwCw/media/6a68a186b7fe5a8e318c2f92.mp4",
    aspectRatio: "9:16",
    category: "Podcast",
    tags: ["Interview", "Multicam", "Shorts"],
    description: "Multi-cam podcast editing with seamless angle switching and punch-in emphasis."
  },
  {
    id: "creative-labs",
    title: "Creative Labs",
    thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940&auto=format&fit=crop",
    videoUrl: "https://assets.cdn.filesafe.space/0fHl1lFzaTIrwq0wzwCw/media/6a689c7c2cfe8da14c94a020.mp4",
    aspectRatio: "1:1",
    category: "Social Ad",
    tags: ["Facebook Ads", "Direct Response", "VFX"],
    description: "A conversion-optimized video ad formatted 1:1 for perfect display on Facebook and Instagram feeds."
  },
  {
    id: "nextgen-media",
    title: "NextGen Media",
    thumbnail: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2940&auto=format&fit=crop",
    videoUrl: "https://assets.cdn.filesafe.space/0fHl1lFzaTIrwq0wzwCw/media/6a689d29d1438d5c4eb3c208.mp4",
    aspectRatio: "4:5",
    category: "Event Highlight",
    tags: ["Event", "Music Sync", "Dynamic"],
    description: "A high-energy recap of a major conference, perfectly synced to the beat of an upbeat electronic track."
  }
];
