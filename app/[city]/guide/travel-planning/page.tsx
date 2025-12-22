import { Metadata } from 'next'
import { cities } from '@/lib/cities'
import { notFound } from 'next/navigation'
import TravelPlanningContent from './TravelPlanningContent'

type Props = { params: Promise<{ city: string }> }
export async function generateStaticParams() { return [{ city: 'new-york' }] }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: citySlug } = await params
  return {
    title: `NYC Travel Guide 2025 | Flight Times, Jet Lag & Airport Tips`,
    description: `Flying to New York? Flight times from London (7h), Tokyo (14h), Sydney (22h). Jet lag recovery tips, best arrival times, JFK/EWR/LGA to Manhattan transport, and the 20-block walking rule.`,
    keywords: [
      'flight time to new york',
      'jet lag new york tips',
      'london to nyc flight time',
      'jfk to manhattan best way',
      'best time to arrive nyc',
      'newark vs jfk',
      'nyc airport transfer',
      'recover jet lag new york',
    ],
    openGraph: {
      title: `NYC Travel Planning Guide | Flights, Jet Lag & Getting Around`,
      description: `Everything you need to know before flying to New York City.`,
      type: 'article',
    },
    alternates: {
      canonical: `https://whattime.city/new-york/guide/travel-planning/`,
    },
  }
}
export default async function TravelPlanningPage({ params }: Props) {
  const { city: citySlug } = await params
  const city = cities.find(c => c.slug === citySlug)
  if (!city || citySlug !== 'new-york') notFound()
  return <TravelPlanningContent city={city} />
}
