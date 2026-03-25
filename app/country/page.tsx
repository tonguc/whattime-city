import { Metadata } from 'next'
import CountriesContent from '@/components/CountriesContent'

export const metadata: Metadata = {
  title: 'Time Zones by Country — Current Local Time, 192 Countries',
  description: 'Explore current local time and time zone for countries worldwide. Albania, Austria, Brazil, Iran, Japan and more — find any country\'s exact time instantly.',
  keywords: ['time zones by country', 'world time zones', 'countries time zones', 'international time zones', 'country local time', 'albania time zone', 'austria time zone', 'brazil time zone'],
  openGraph: {
    title: 'Time Zones by Country — 192 Countries',
    description: 'Current local time and time zone info for countries worldwide. Find any country instantly.',
    type: 'website',
    siteName: 'whattime.city',
    url: 'https://whattime.city/country/'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Time Zones by Country — 192 Countries',
    description: 'Current local time and time zone for countries worldwide. Find any country instantly.'
  },
  alternates: {
    canonical: 'https://whattime.city/country/'
  }
}

export default function CountriesPage() {
  return <CountriesContent />
}
