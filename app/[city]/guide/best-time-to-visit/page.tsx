import { Metadata } from 'next'
import { cities } from '@/lib/cities'
import { notFound } from 'next/navigation'
import { getGuideConfig } from '@/lib/guide-content'
import BestTimeToVisitContent from './BestTimeToVisitContent'
import LondonBestTimeToVisitContent from './LondonBestTimeToVisitContent'
import TokyoBestTimeToVisitContent from './TokyoBestTimeToVisitContent'

type Props = {
  params: Promise<{ city: string }>
}

export async function generateStaticParams() {
  return [{ city: 'new-york' }, { city: 'london' }, { city: 'tokyo' }]
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
  
  if (citySlug === 'london') {
    return <LondonBestTimeToVisitContent city={city} />
  }
  
  return <BestTimeToVisitContent city={city} />
}
