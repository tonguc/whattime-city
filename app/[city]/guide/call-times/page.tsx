import { Metadata } from 'next'
import { cities } from '@/lib/cities'
import { notFound } from 'next/navigation'
import { getGuideConfig } from '@/lib/guide-content'
import CallTimesContent from './CallTimesContent'
import LondonCallTimesContent from './LondonCallTimesContent'
import TokyoCallTimesContent from './TokyoCallTimesContent'
import DubaiCallTimesContent from './DubaiCallTimesContent'
import SingaporeCallTimesContent from './SingaporeCallTimesContent'
import ParisCallTimesContent from './ParisCallTimesContent'
import SydneyCallTimesContent from './SydneyCallTimesContent'
import LosAngelesCallTimesContent from './LosAngelesCallTimesContent'

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
  
  if (!config) return { title: 'CallTimes' }
  
  // Dynamically access the correct page config
  const pageKey = 'call-times'.replace(/-([a-z])/g, (g) => g[1].toUpperCase()).replace(/-/g, '')
  const pageConfig = (config.pages as any)[pageKey]
  
  return {
    title: pageConfig?.title || 'CallTimes',
    description: pageConfig?.description || '',
    keywords: pageConfig?.keywords || [],
    openGraph: {
      title: pageConfig?.title || 'CallTimes',
      description: pageConfig?.description || '',
      type: 'article',
    },
    alternates: {
      canonical: `https://whattime.city/${citySlug}/guide/call-times/`,
    },
  }
}

export default async function CallTimesPage({ params }: Props) {
  const { city: citySlug } = await params
  const city = cities.find(c => c.slug === citySlug)
  const config = getGuideConfig(citySlug)
  
  if (!city || !config) notFound()
  
  switch (citySlug) {
    case 'london':
      return <LondonCallTimesContent city={city} />
    case 'tokyo':
      return <TokyoCallTimesContent city={city} />
    case 'dubai':
      return <DubaiCallTimesContent city={city} />
    case 'singapore':
      return <SingaporeCallTimesContent city={city} />
    case 'paris':
      return <ParisCallTimesContent city={city} />
    case 'sydney':
      return <SydneyCallTimesContent city={city} />
    case 'los-angeles':
      return <LosAngelesCallTimesContent city={city} />
    default:
      return <CallTimesContent city={city} />
  }
}
