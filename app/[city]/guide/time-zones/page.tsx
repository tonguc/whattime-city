import { Metadata } from 'next'
import { cities } from '@/lib/cities'
import { getSupportedGuideCities } from '@/lib/guide-content'
import { notFound } from 'next/navigation'
import TimeZonesContent from './TimeZonesContent'

interface PageProps {
  params: Promise<{ city: string }>
}

// ISR: other cities generated on first request, cached 24h
export const revalidate = 86400
export const dynamicParams = true

// Only pre-render top 8 cities with custom guide content at build time
// Remaining 13 cities are ISR
const TOP_GUIDE_CITIES = [
  'london', 'new-york', 'tokyo', 'dubai',
  'singapore', 'paris', 'sydney', 'istanbul'
]
export async function generateStaticParams() {
  return TOP_GUIDE_CITIES.map(city => ({ city }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city: citySlug } = await params
  const city = cities.find(c => c.slug === citySlug)
  
  if (!city) return { title: 'Not Found' }
  
  return {
    title: `${city.city} Time Zone — UTC Offset & DST`,
    description: `${city.city} timezone explained: current local time, UTC offset, daylight saving time changes, and time difference from major world cities.`,
    keywords: [
      `${city.city} time zone`,
      `${city.city} current time`,
      `${city.city} UTC offset`,
      `${city.city} DST`,
      `time in ${city.city}`,
      `${city.city} time difference`,
    ],
    openGraph: {
      title: `${city.city} Time Zone Guide`,
      description: `Everything about ${city.city} timezone: current time, UTC offset, and DST changes.`,
    },
  }
}

export default async function TimeZonesPage({ params }: PageProps) {
  const { city: citySlug } = await params
  const city = cities.find(c => c.slug === citySlug)
  
  if (!city) {
    notFound()
  }
  
  return <TimeZonesContent city={city} />
}
