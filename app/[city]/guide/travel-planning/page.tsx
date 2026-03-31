import { Metadata } from 'next'
import { cities } from '@/lib/cities'
import { notFound } from 'next/navigation'
import { getGuideConfig, getSupportedGuideCities } from '@/lib/guide-content'
import TravelPlanningContent from './TravelPlanningContent'
import LondonTravelPlanningContent from './LondonTravelPlanningContent'
import TokyoTravelPlanningContent from './TokyoTravelPlanningContent'
import DubaiTravelPlanningContent from './DubaiTravelPlanningContent'
import SingaporeTravelPlanningContent from './SingaporeTravelPlanningContent'
import ParisTravelPlanningContent from './ParisTravelPlanningContent'
import SydneyTravelPlanningContent from './SydneyTravelPlanningContent'
import LosAngelesTravelPlanningContent from './LosAngelesTravelPlanningContent'

type Props = { params: Promise<{ city: string }> }

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



export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: citySlug } = await params
  const config = getGuideConfig(citySlug)
  if (!config) return { title: 'Travel Planning' }
  return {
    title: config.pages.travelPlanning.title,
    description: config.pages.travelPlanning.description,
    keywords: config.pages.travelPlanning.keywords,
    alternates: { canonical: `https://whattime.city/${citySlug}/guide/travel-planning/` },
  }
}

export default async function TravelPlanningPage({ params }: Props) {
  const { city: citySlug } = await params
  const city = cities.find(c => c.slug === citySlug)
  const config = getGuideConfig(citySlug)
  if (!city || !config) notFound()
  if (citySlug === 'london') return <LondonTravelPlanningContent city={city} />
  if (citySlug === 'tokyo') return <TokyoTravelPlanningContent city={city} />
  if (citySlug === 'dubai') return <DubaiTravelPlanningContent city={city} />
  if (citySlug === 'singapore') return <SingaporeTravelPlanningContent city={city} />
  if (citySlug === 'paris') return <ParisTravelPlanningContent city={city} />
  if (citySlug === 'sydney') return <SydneyTravelPlanningContent city={city} />
  return <TravelPlanningContent city={city} />
}
