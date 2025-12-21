import { Metadata } from 'next'
import CountriesContent from '@/components/CountriesContent'

export const metadata: Metadata = {
  title: 'Time Zones by Country - All Countries List | whattime.city',
  description: 'Browse time zones for 80+ countries worldwide. Find current local time, daylight saving info, and timezone details for any country.',
  keywords: ['time zones by country', 'world time zones', 'countries time zones', 'international time zones', 'country time list'],
  openGraph: {
    title: 'Time Zones by Country - World Time Zone Guide',
    description: 'Complete list of countries and their time zones. Find current time anywhere in the world.',
    type: 'website',
    siteName: 'whattime.city',
    url: 'https://whattime.city/country'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Time Zones by Country | whattime.city',
    description: 'Browse time zones for 80+ countries worldwide.'
  },
  alternates: {
    canonical: 'https://whattime.city/country'
  }
}

export default function CountriesPage() {
  return <CountriesContent />
}
