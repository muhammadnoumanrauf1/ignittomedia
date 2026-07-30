import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/_next/'],
      },
      {
        // Full AI Search Engine Crawlers (AEO / GEO / AISEO)
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'ClaudeBot',
          'PerplexityBot',
          'Google-Extended',
          'Applebot-Extended',
          'Amazonbot',
          'Bytespider',
          'CCBot',
          'cohere-ai',
          'Diffbot',
        ],
        allow: '/',
      },
    ],
    sitemap: 'https://ignittomedia.com/sitemap.xml',
    host: 'https://ignittomedia.com',
  };
}
