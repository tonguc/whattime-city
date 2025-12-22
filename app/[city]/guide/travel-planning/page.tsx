import { Metadata } from 'next'
import { cities } from '@/lib/cities'
import { notFound } from 'next/navigation'
import TravelPlanningContent from './TravelPlanningContent'

type Props = { params: Promise<{ city: string }> }
export async function generateStaticParams() { return [{ city: 'new-york' }] }
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Flying to New York: Flight Times, Jet Lag Tips & Arrival Guide | whattime.city`,
    description: `How long is the flight to NYC? Jet lag recovery tips, best arrival times, and airport-to-Manhattan transport guide.`,
    keywords: ['flight time to new york', 'jet lag new york', 'how long is flight to nyc from london', 'best time to arrive in new york', 'jfk to manhattan'],
  }
}
export default async function TravelPlanningPage({ params }: Props) {
  const { city: citySlug } = await params
  const city = cities.find(c => c.slug === citySlug)
  if (!city || citySlug !== 'new-york') notFound()
  return <TravelPlanningContent city={city} />
}
