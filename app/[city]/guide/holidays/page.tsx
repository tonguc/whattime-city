import { Metadata } from 'next'
import { cities } from '@/lib/cities'
import { notFound } from 'next/navigation'
import { getGuideConfig } from '@/lib/guide-content'
import HolidaysContent from './HolidaysContent'
import LondonHolidaysContent from './LondonHolidaysContent'
import TokyoHolidaysContent from './TokyoHolidaysContent'
import DubaiHolidaysContent from './DubaiHolidaysContent'
import SingaporeHolidaysContent from './SingaporeHolidaysContent'
import ParisHolidaysContent from './ParisHolidaysContent'
import SydneyHolidaysContent from './SydneyHolidaysContent'
import LosAngelesHolidaysContent from './LosAngelesHolidaysContent'

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
  
  if (!config) return { title: 'Holidays' }
  
  const pageKey = 'holidays'.replace(/-([a-z])/g, (g: string) => g[1].toUpperCase()).replace(/-/g, '')
  const pageConfig = (config.pages as any)[pageKey]
  
  return {
    title: pageConfig?.title || 'Holidays',
    description: pageConfig?.description || '',
    keywords: pageConfig?.keywords || [],
    openGraph: {
      title: pageConfig?.title || 'Holidays',
      description: pageConfig?.description || '',
      type: 'article',
    },
    alternates: {
      canonical: `https://whattime.city/${citySlug}/guide/holidays/`,
    },
  }
}

export default async function HolidaysPage({ params }: Props) {
  const { city: citySlug } = await params
  const city = cities.find(c => c.slug === citySlug)
  const config = getGuideConfig(citySlug)
  
  if (!city || !config) notFound()
  
  switch (citySlug) {
    case 'london':
      return <LondonHolidaysContent city={city} />
    case 'tokyo':
      return <TokyoHolidaysContent city={city} />
    case 'dubai':
      return <DubaiHolidaysContent city={city} />
    case 'singapore':
      return <SingaporeHolidaysContent city={city} />
    case 'paris':
      return <ParisHolidaysContent city={city} />
    case 'sydney':
      return <SydneyHolidaysContent city={city} />
    case 'los-angeles':
      return <LosAngelesHolidaysContent city={city} />
    default:
      return <HolidaysContent city={city} />
  }
}
