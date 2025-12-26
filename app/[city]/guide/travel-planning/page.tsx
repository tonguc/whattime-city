import { Metadata } from 'next'
import { cities } from '@/lib/cities'
import { notFound } from 'next/navigation'
import { getGuideConfig } from '@/lib/guide-content'
import TravelPlanningContent from './TravelPlanningContent'
import LondonTravelPlanningContent from './LondonTravelPlanningContent'
import TokyoTravelPlanningContent from './TokyoTravelPlanningContent'
import DubaiTravelPlanningContent from './DubaiTravelPlanningContent'
import SingaporeTravelPlanningContent from './SingaporeTravelPlanningContent'
import ParisTravelPlanningContent from './ParisTravelPlanningContent'
import SydneyTravelPlanningContent from './SydneyTravelPlanningContent'
import LosAngelesTravelPlanningContent from './LosAngelesTravelPlanningContent'

type Props = {
  params: Promise<{ city: string }>
}

export async function generateStaticParams() {
  return [
    { city: 'new-york' },
    { city: 'london' },
    { city: 'tokyo' },
    { city: 'dubai' },
    { city: 'singapore' },
    { city: 'paris' },
    { city: 'sydney' },
    { city: 'los-angeles' }
  ]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: citySlug } = await params
  const config = getGuideConfig(citySlug)
  
  if (!config) return { title: 'TravelPlanning' }
  
  const pageKey = 'travel-planning'.replace(/-([a-z])/g, (g: string) => g[1].toUpperCase()).replace(/-/g, '')
  const pageConfig = (config.pages as any)[pageKey]
  
  return {
    title: pageConfig?.title || 'TravelPlanning',
    description: pageConfig?.description || '',
    keywords: pageConfig?.keywords || [],
    openGraph: {
      title: pageConfig?.title || 'TravelPlanning',
      description: pageConfig?.description || '',
      type: 'article',
    },
    alternates: {
      canonical: `https://whattime.city/${citySlug}/guide/travel-planning/`,
    },
  }
}

export default async function TravelPlanningPage({ params }: Props) {
  const { city: citySlug } = await params
  const city = cities.find(c => c.slug === citySlug)
  const config = getGuideConfig(citySlug)
  
  if (!city || !config) notFound()
  
  switch (citySlug) {
    case 'london':
      return <LondonTravelPlanningContent city={city} />
    case 'tokyo':
      return <TokyoTravelPlanningContent city={city} />
    case 'dubai':
      return <DubaiTravelPlanningContent city={city} />
    case 'singapore':
      return <SingaporeTravelPlanningContent city={city} />
    case 'paris':
      return <ParisTravelPlanningContent city={city} />
    case 'sydney':
      return <SydneyTravelPlanningContent city={city} />
    case 'los-angeles':
      return <LosAngelesTravelPlanningContent city={city} />
    default:
      return <TravelPlanningContent city={city} />
  }
}
