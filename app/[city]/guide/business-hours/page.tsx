import { Metadata } from 'next'
import { cities } from '@/lib/cities'
import { notFound } from 'next/navigation'
import BusinessHoursContent from './BusinessHoursContent'

type Props = {
  params: Promise<{ city: string }>
}

export async function generateStaticParams() {
  return [{ city: 'new-york' }]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: citySlug } = await params
  const city = cities.find(c => c.slug === citySlug)
  
  if (!city) return { title: 'Business Hours' }
  
  return {
    title: `NYC Business Hours 2025 | Banks, Stores, Restaurants & More`,
    description: `What time do businesses open in NYC? Complete guide to New York store hours, bank schedules, restaurant times, museum hours, and government offices. Updated daily.`,
    keywords: [
      'nyc business hours',
      'new york store hours',
      'what time do banks open nyc',
      'nyc restaurant hours',
      'new york post office hours',
      'when do stores close in manhattan',
      'nyc sunday hours',
      'museum hours new york',
    ],
    openGraph: {
      title: `NYC Business Hours 2025 | Complete Opening Times Guide`,
      description: `When everything opens and closes in New York City - stores, banks, restaurants, museums, and more.`,
      type: 'article',
    },
    alternates: {
      canonical: `https://whattime.city/${citySlug}/guide/business-hours/`,
    },
  }
}

export default async function BusinessHoursPage({ params }: Props) {
  const { city: citySlug } = await params
  const city = cities.find(c => c.slug === citySlug)
  
  if (!city || citySlug !== 'new-york') notFound()
  
  return <BusinessHoursContent city={city} />
}
