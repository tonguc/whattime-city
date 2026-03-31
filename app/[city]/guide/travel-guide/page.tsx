import { Metadata } from 'next'
import { cities } from '@/lib/cities'
import { getSupportedGuideCities } from '@/lib/guide-content'
import { notFound } from 'next/navigation'
import TravelGuideContent from './TravelGuideContent'

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
    title: `${city.city} Travel Guide — When to Visit`,
    description: `Plan your trip to ${city.city}: best seasons to visit, public holidays, travel tips, and essential timing information for ${city.country}.`,
    keywords: [
      `best time to visit ${city.city}`,
      `${city.city} travel guide`,
      `${city.city} holidays`,
      `${city.city} vacation planning`,
      `when to visit ${city.city}`,
      `${city.city} tourist season`,
    ],
    openGraph: {
      title: `${city.city} Complete Travel Guide`,
      description: `Best time to visit, holidays, and travel planning for ${city.city}.`,
    },
  }
}

export default async function TravelGuidePage({ params }: PageProps) {
  const { city: citySlug } = await params
  const city = cities.find(c => c.slug === citySlug)
  
  if (!city) {
    notFound()
  }
  
  return <TravelGuideContent city={city} />
}
