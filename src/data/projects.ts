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

export const projects: Project[] = [{
  id: "hook-driven-concept",
  title: "Hook-Driven Concept",
  thumbnail: 'https://assets.cdn.filesafe.space/0fHl1lFzaTIrwq0wzwCw/media/6a6b2a6ecdfcf049563bd4d5.png',
  videoUrl: "https://assets.cdn.filesafe.space/0fHl1lFzaTIrwq0wzwCw/media/6a689cdc2cfe8da14c951bc7.mp4",
  aspectRatio: "16:9",
  category: "CREATOR & BUSINESS",
  tags: ["Talking Head", "Pattern Interrupt", "Retention Edit"],
  description: "A YouTube edit structured around Iman Gadzhi's front loaded hook a punchy cold open and rapid pattern interrupt cuts in the first 10–15 seconds that state the payoff before the talking head settles into normal pace."
},
{
  id: "youtube-longform-content",
  title: "Youtube Long form Content",
  // thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200&auto=format&fit=crop",
  videoUrl: "https://assets.cdn.filesafe.space/0fHl1lFzaTIrwq0wzwCw/media/6a689cdc2cfe8da14c951bc2.mp4",
  aspectRatio: "16:9",
  category: "LONG FORM",
  tags: ["YT Content", "Motion Graphics", "Fast Pacing"],
  description: "A YouTube edit structured around Iman Gadzhi's front loaded hook a punchy cold open and rapid pattern interrupt cuts in the first 10, 15 seconds that state the payoff before the talking head settles into normal pace."
},
{
  id: "intention-system",
  title: "Intention System",
  thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=2942&auto=format&fit=crop",
  videoUrl: "https://assets.cdn.filesafe.space/0fHl1lFzaTIrwq0wzwCw/media/6a68a186b4176d3727edfc67.mp4",
  aspectRatio: "16:9",
  category: "MOTION GRAPHICS",
  tags: ["Brand Identity", "Kinetic Type", "Mockup Reveal"],
  description: "A from-scratch motion graphics piece, not an edit; kinetic typography animated through packaging, UI, and color-story mockups to visualize a brand system."
},
{
  id: "social-media-motion-graphics",
  title: "Social Media Motion Graphics",
  thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop",
  videoUrl: "https://assets.cdn.filesafe.space/0fHl1lFzaTIrwq0wzwCw/media/6a68a186b7fe5a8e318c2f92.mp4",
  aspectRatio: "9:16",
  category: "Motion Graphics & Animation",
  tags: ["Motion Graphics", "Social Media", " UI Animation"],
  description: "This is a sample of the custom motion graphics and dynamic visual assets we create for our clients' websites and brand pages. It demonstrates our capability to design eye-catching, professional animations."
},
{
  id: "snappy-real-estate-edit",
  title: "Snappy Real Estate Edit",
  thumbnail: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2940&auto=format&fit=crop",
  videoUrl: "https://assets.cdn.filesafe.space/0fHl1lFzaTIrwq0wzwCw/media/6a689d942cfe8da14c9581c9.mp4",
  aspectRatio: "9:16",
  category: "Real Estate",
  tags: ["High Retention Editing", "SpeedRamping", "VideoPacing", "VFX"],
  description: "A fast-paced real estate editing style uses rapid cuts, precise speed ramping, and rhythmic beat syncs instead of slow pans to maximize viewer retention and maintain visual momentum from the first second."
},
{
  id: "premium-instagram-reels",
  title: "Premium Instagram Reels",
  thumbnail: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2940&auto=format&fit=crop",
  videoUrl: "https://assets.cdn.filesafe.space/0fHl1lFzaTIrwq0wzwCw/media/6a689d29d1438d5c4eb3c208.mp4",
  aspectRatio: "4:5",
  category: "Premium Social Content",
  tags: ["Instagram Reels", "Scroll Stop Hook", "Viral Pacing"],
  description: "A premium short form edit bold kinetic typography over a direct-to-camera hook, graded and paced to feel high-production despite the vertical format."
}
];
