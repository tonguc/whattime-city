import { Metadata } from 'next'
import CitiesContent from '@/components/CitiesContent'

export const metadata: Metadata = {
  title: 'All Cities - World Clock for 250+ Cities | whattime.city',
  description: 'Browse current local time for 250+ cities worldwide. Find any city alphabetically with our comprehensive world clock directory.',
  keywords: ['world clock cities', 'all cities time zones', 'city time list', 'world time by city', 'international city times', 'global city clock'],
  openGraph: {
    title: 'All Cities - World Clock Directory | whattime.city',
    description: 'Complete list of 250+ cities with current local time. Browse alphabetically or search to find any city.',
    type: 'website',
    siteName: 'whattime.city',
    url: 'https://whattime.city/cities'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'All Cities - World Clock | whattime.city',
    description: 'Browse current local time for 250+ cities worldwide.'
  },
  alternates: {
    canonical: 'https://whattime.city/cities'
  }
}

export default function CitiesPage() {
  return <CitiesContent />
}
