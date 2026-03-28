import { Metadata } from 'next'
import WorldMap from '@/components/WorldMap'

export const metadata: Metadata = {
  title: 'Time Zone Map — World Time Zones With Live Clocks',
  description: 'Interactive time zone map showing all world time zones with live clocks. See current time in every country, UTC offsets, day/night overlay, and time differences at a glance.',
  openGraph: {
    title: 'Time Zone Map — World Time Zones With Live Clocks',
    description: 'Interactive time zone map with live clocks for every major city. See day and night zones, UTC offsets, and compare time zones worldwide.',
    type: 'website',
    siteName: 'whattime.city',
    url: 'https://whattime.city/map/'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Time Zone Map — Live World Time Zones',
    description: 'Interactive world time zone map with live clocks in every major city.'
  },
  alternates: {
    canonical: 'https://whattime.city/map/'
  }
}

export default function MapPage() {
  return <WorldMap />
}
