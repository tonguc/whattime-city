import { Metadata } from 'next'
import WorldMap from '@/components/WorldMap'

export const metadata: Metadata = {
  title: 'World Time Map - Live Clock on Every Continent | whattime.city',
  description: 'Interactive world map showing current local time in major cities. See day and night zones, compare time zones across continents.',
  openGraph: {
    title: 'World Time Map - Live Clock on Every Continent',
    description: 'Interactive world map showing current local time in major cities worldwide.',
    type: 'website',
    siteName: 'whattime.city',
    url: 'https://whattime.city/map'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'World Time Map | whattime.city',
    description: 'Interactive world map with live clocks in every major city.'
  },
  alternates: {
    canonical: 'https://whattime.city/map'
  }
}

export default function MapPage() {
  return <WorldMap />
}
