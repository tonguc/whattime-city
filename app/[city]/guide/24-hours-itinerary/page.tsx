import { Metadata } from 'next'
import { cities } from '@/lib/cities'
import { notFound } from 'next/navigation'
import TwentyFourHoursContent from './TwentyFourHoursContent'

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
    title: `24 Hours in ${city.city}: Perfect Day Itinerary & Hour-by-Hour Guide`,
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
