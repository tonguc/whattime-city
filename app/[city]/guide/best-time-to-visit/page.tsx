import { Metadata } from 'next'
import { cities } from '@/lib/cities'
import { notFound } from 'next/navigation'
import { getGuideConfig } from '@/lib/guide-content'
import BestTimeToVisitContent from './BestTimeToVisitContent'
import LondonBestTimeToVisitContent from './LondonBestTimeToVisitContent'
import TokyoBestTimeToVisitContent from './TokyoBestTimeToVisitContent'
import DubaiBestTimeToVisitContent from './DubaiBestTimeToVisitContent'
import SingaporeBestTimeToVisitContent from './SingaporeBestTimeToVisitContent'
import ParisBestTimeToVisitContent from './ParisBestTimeToVisitContent'
import SydneyBestTimeToVisitContent from './SydneyBestTimeToVisitContent'
import Sydneytime-to-visitContent from './Sydneytime-to-visitContent'

type Props = {
  params: Promise<{ city: string }>
}

export async function generateStaticParams() {
  return [{ city: 'new-york' }, { city: 'london' }, { city: 'tokyo' }, { city: 'dubai' }, { city: 'singapore' }, { city: 'paris' }, { city: 'sydney' }]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: citySlug } = await params
  const config = getGuideConfig(citySlug)
  
  if (!config) return { title: 'Best Time to Visit' }
  
  return {
    title: config.pages.bestTimeToVisit.title,
    description: config.pages.bestTimeToVisit.description,
    keywords: config.pages.bestTimeToVisit.keywords,
    openGraph: {
      title: config.pages.bestTimeToVisit.title,
      description: config.pages.bestTimeToVisit.description,
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
  const config = getGuideConfig(citySlug)
  
  if (!city || !config) notFound()
  
  switch (citySlug) {
    case 'london':
      return <LondonBestTimeToVisitContent city={city} />
    case 'tokyo':
      return <TokyoBestTimeToVisitContent city={city} />
    case 'dubai':
      return <DubaiBestTimeToVisitContent city={city} />
    case 'singapore':
      return <SingaporeBestTimeToVisitContent city={city} />
    case 'paris':
    case 'sydney':
      return <SydneyBestTimeToVisitContent city={city} />
      return <ParisBestTimeToVisitContent city={city} />
    default:
      return <BestTimeToVisitContent city={city} />
  }
}
