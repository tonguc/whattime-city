import { Metadata } from 'next'
import { cities } from '@/lib/cities'
import { getSupportedGuideCities } from '@/lib/guide-content'
import { notFound } from 'next/navigation'
import TwentyFourHoursContent from './TwentyFourHoursContent'

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
    title: `24 Hours in ${city.city}: Itinerary`,
    description: `Make the most of one day in ${city.city}! Hour-by-hour itinerary covering breakfast spots, must-see attractions, lunch, activities, dinner, and nightlife.`,
    keywords: [
      `24 hours in ${city.city}`,
      `one day in ${city.city}`,
      `${city.city} itinerary`,
      `${city.city} day trip`,
      `things to do ${city.city}`,
      `${city.city} one day guide`,
    ],
    openGraph: {
      title: `24 Hours in ${city.city} - Day Itinerary`,
      description: `The perfect day in ${city.city}: hour-by-hour guide to make the most of your visit.`,
    },
  }
}

export default async function TwentyFourHoursPage({ params }: PageProps) {
  const { city: citySlug } = await params
  const city = cities.find(c => c.slug === citySlug)
  
  if (!city) {
    notFound()
  }
  
  return <TwentyFourHoursContent city={city} />
}
