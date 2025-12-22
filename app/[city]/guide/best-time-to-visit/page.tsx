import { Metadata } from 'next'
import { cities } from '@/lib/cities'
import { notFound } from 'next/navigation'
import BestTimeToVisitContent from './BestTimeToVisitContent'

type Props = {
  params: Promise<{ city: string }>
}

export async function generateStaticParams() {
  return [{ city: 'new-york' }]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: citySlug } = await params
  const city = cities.find(c => c.slug === citySlug)
  
  if (!city) return { title: 'Best Time to Visit' }
  
  return {
    title: `Best Time to Visit NYC 2025 | Weather, Crowds & Prices by Month`,
    description: `When to visit New York? Month-by-month guide with weather, tourist crowds, hotel prices, and major events. Plus: Manhattanhenge dates and secret locals-only timing tips.`,
    keywords: [
      'best time to visit new york',
      'best month to visit nyc',
      'new york weather by month',
      'cheapest time to visit new york',
      'nyc crowd calendar',
      'manhattanhenge 2025 dates',
      'new york in fall',
      'nyc christmas time',
      'avoid crowds new york',
    ],
    openGraph: {
      title: `Best Time to Visit NYC 2025 | Complete Month-by-Month Guide`,
      description: `Weather, crowds, prices, and events - find the perfect time for your New York trip.`,
      type: 'article',
    },
    alternates: {
      canonical: `https://whattime.city/${citySlug}/guide/best-time-to-visit/`,
    },
  }
}

export default async function BestTimeToVisitPage({ params }: Props) {
  const { city: citySlug } = await params
  const city = cities.find(c => c.slug === citySlug)
  
  if (!city || citySlug !== 'new-york') notFound()
  
  return <BestTimeToVisitContent city={city} />
}
