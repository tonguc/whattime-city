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
    title: `Best Time to Visit New York: Month-by-Month Guide 2025 | whattime.city`,
    description: `When should you visit NYC? Complete guide to New York weather by month, crowds, prices, and events. Find the perfect time for your trip.`,
    keywords: [
      'best time to visit new york',
      'best month to visit nyc',
      'new york weather by month',
      'cheapest time to visit new york',
      'worst time to visit nyc',
      'new york in december',
      'new york in spring',
    ],
    openGraph: {
      title: `Best Time to Visit New York City - 2025 Guide`,
      description: `Month-by-month breakdown of NYC weather, crowds, prices, and events.`,
      type: 'article',
    },
  }
}

export default async function BestTimeToVisitPage({ params }: Props) {
  const { city: citySlug } = await params
  const city = cities.find(c => c.slug === citySlug)
  
  if (!city || citySlug !== 'new-york') notFound()
  
  return <BestTimeToVisitContent city={city} />
}
