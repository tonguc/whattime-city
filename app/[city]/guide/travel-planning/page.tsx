import { Metadata } from 'next'
import { cities } from '@/lib/cities'
import { notFound } from 'next/navigation'
import { getGuideConfig } from '@/lib/guide-content'
import TravelPlanningContent from './TravelPlanningContent'
import LondonTravelPlanningContent from './LondonTravelPlanningContent'
import TokyoTravelPlanningContent from './TokyoTravelPlanningContent'
import DubaiTravelPlanningContent from './DubaiTravelPlanningContent'
import SingaporeTravelPlanningContent from './SingaporeTravelPlanningContent'

type Props = { params: Promise<{ city: string }> }

export async function generateStaticParams() {
  return [{ city: 'new-york' }, { city: 'london' }, { city: 'tokyo' }, { city: 'dubai' }, { city: 'singapore' }]
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
  return <TravelPlanningContent city={city} />
}
