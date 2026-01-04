import { Metadata } from 'next'
import { cities } from '@/lib/cities'
import { notFound } from 'next/navigation'
import TravelGuideContent from './TravelGuideContent'

interface PageProps {
  params: Promise<{ city: string }>
}

export async function generateStaticParams() {
  return cities.map((city) => ({
    city: city.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city: citySlug } = await params
  const city = cities.find(c => c.slug === citySlug)
  
  if (!city) return { title: 'Not Found' }
  
  return {
    title: `${city.city} Travel Guide: Best Time to Visit, Holidays & Planning Tips`,
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
