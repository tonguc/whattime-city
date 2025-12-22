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
    title: `New York Business Hours: Banks, Offices, Stores & Government | whattime.city`,
    description: `Complete guide to business hours in New York City. When banks open, store hours, post office times, and government office schedules. Updated for 2025.`,
    keywords: [
      'new york business hours',
      'nyc bank hours',
      'what time do stores close in new york',
      'new york post office hours',
      'nyc government office hours',
      'are banks open saturday new york',
    ],
    openGraph: {
      title: `New York Business Hours Guide 2025`,
      description: `When everything opens and closes in NYC - banks, stores, offices, and more.`,
      type: 'article',
    },
  }
}

export default async function BusinessHoursPage({ params }: Props) {
  const { city: citySlug } = await params
  const city = cities.find(c => c.slug === citySlug)
  
  if (!city || citySlug !== 'new-york') notFound()
  
  return <BusinessHoursContent city={city} />
}
