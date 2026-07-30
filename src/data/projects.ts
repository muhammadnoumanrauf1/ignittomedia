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
  thumbnail: 'https://assets.cdn.filesafe.space/0fHl1lFzaTIrwq0wzwCw/media/6a6b2e13cf81b06f054b1852.jpg',
  videoUrl: "https://assets.cdn.filesafe.space/0fHl1lFzaTIrwq0wzwCw/media/6a689cdc2cfe8da14c951bc7.mp4",
  aspectRatio: "16:9",
  category: "CREATOR & BUSINESS",
  tags: ["Talking Head", "Pattern Interrupt", "Retention Edit"],
  description: "A YouTube edit structured around Iman Gadzhi's front loaded hook a punchy cold open and rapid pattern interrupt cuts in the first 10–15 seconds that state the payoff before the talking head settles into normal pace."
},
{
  id: "youtube-longform-content",
  title: "Youtube Long form Content",
  thumbnail: "https://assets.cdn.filesafe.space/0fHl1lFzaTIrwq0wzwCw/media/6a6b2a6ecdfcf049563bd4d5.png",
  videoUrl: "https://assets.cdn.filesafe.space/0fHl1lFzaTIrwq0wzwCw/media/6a689cdc2cfe8da14c951bc2.mp4",
  aspectRatio: "16:9",
  category: "LONG FORM",
  tags: ["YT Content", "Motion Graphics", "Fast Pacing"],
  description: "A YouTube edit structured around Iman Gadzhi's front loaded hook a punchy cold open and rapid pattern interrupt cuts in the first 10, 15 seconds that state the payoff before the talking head settles into normal pace."
},
{
  id: "motion-branding",
  title: "Motion Branding",
  thumbnail: "https://assets.cdn.filesafe.space/0fHl1lFzaTIrwq0wzwCw/media/6a6b3105f982994d15830c7f.jpg",
  videoUrl: "https://assets.cdn.filesafe.space/0fHl1lFzaTIrwq0wzwCw/media/6a68a186b4176d3727edfc67.mp4",
  aspectRatio: "16:9",
  category: "MOTION GRAPHICS",
  tags: ["Brand Identity", "Kinetic Type", "Mockup Reveal"],
  description: "A from-scratch motion graphics piece, not an edit; kinetic typography animated through packaging, UI, and color-story mockups to visualize a brand system."
},
{
  id: "social-media-motion-graphics",
  title: "Social Media Motion Graphics",
  thumbnail: "https://assets.cdn.filesafe.space/0fHl1lFzaTIrwq0wzwCw/media/6a6b3444a4c8a1a2c3919c55.jpg",
  videoUrl: "https://assets.cdn.filesafe.space/0fHl1lFzaTIrwq0wzwCw/media/6a68a186b7fe5a8e318c2f92.mp4",
  aspectRatio: "9:16",
  category: "Motion Graphics & Animation",
  tags: ["Motion Graphics", "Social Media", " UI Animation"],
  description: "This is a sample of the custom motion graphics and dynamic visual assets we create for our clients' websites and brand pages. It demonstrates our capability to design eye-catching, professional animations."
},
{
  id: "snappy-real-estate-edit",
  title: "Snappy Real Estate Edit",
  thumbnail: "https://assets.cdn.filesafe.space/0fHl1lFzaTIrwq0wzwCw/media/6a6b35f2497cd89d245bda17.jpg",
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
