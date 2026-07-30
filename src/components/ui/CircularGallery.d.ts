import { ComponentType, Ref } from 'react';

export interface CircularGalleryItem {
  text: string;
  image?: string;
  video?: string;
}

export interface CircularGalleryProps {
  items: CircularGalleryItem[];
  bend?: number;
  textColor?: string;
  borderRadius?: number;
  font?: string;
  fontUrl?: string;
  scrollSpeed?: number;
  scrollEase?: number;
  autoScrollSpeed?: number;
  onItemClick?: (index: number) => void;
  ref?: Ref<{ next: () => void; prev: () => void }>;
}

declare const CircularGallery: ComponentType<CircularGalleryProps>;
export default CircularGallery;
