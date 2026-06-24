import type { MetadataRoute } from 'next';

/**
 * PWA manifest — makes LeaderCRM installable ("Add to Home Screen") with a
 * standalone, app-like shell. Next serves this at /manifest.webmanifest.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'LeaderCRM',
    short_name: 'LeaderCRM',
    description:
      'The CRM built for field leaders. Track relationships, follow up faster, and grow your team.',
    start_url: '/dashboard',
    scope: '/',
    display: 'standalone',
    orientation: 'portrait',
    background_color: '#ffffff',
    theme_color: '#06163E',
    categories: ['business', 'productivity'],
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png' },
      {
        src: '/icon-maskable-512.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  };
}
