import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'whattime.city — World Clock & Time Zone Converter',
    short_name: 'whattime.city',
    description: 'Current local time in any city. Time zone converter, flight time calculator, meeting planner.',
    start_url: '/',
    display: 'browser',
    background_color: '#0f172a',
    theme_color: '#0f172a',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  }
}
