import { Metadata } from 'next'
import { cities } from '@/lib/cities'
import { notFound } from 'next/navigation'
import { getGuideConfig } from '@/lib/guide-content'
import BusinessHoursContent from './BusinessHoursContent'
import LondonBusinessHoursContent from './LondonBusinessHoursContent'
import TokyoBusinessHoursContent from './TokyoBusinessHoursContent'
import DubaiBusinessHoursContent from './DubaiBusinessHoursContent'
import SingaporeBusinessHoursContent from './SingaporeBusinessHoursContent'
import ParisBusinessHoursContent from './ParisBusinessHoursContent'
import SydneyBusinessHoursContent from './SydneyBusinessHoursContent'

type Props = {
  params: Promise<{ city: string }>
}

export async function generateStaticParams() {
  return [{ city: 'new-york' }, { city: 'london' }, { city: 'tokyo' }, { city: 'dubai' }, { city: 'singapore' }, { city: 'paris' }, { city: 'sydney' }]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: citySlug } = await params
  const config = getGuideConfig(citySlug)
  
  if (!config) return { title: 'Business Hours' }
  
  return {
    title: config.pages.businessHours.title,
    description: config.pages.businessHours.description,
    keywords: config.pages.businessHours.keywords,
    openGraph: {
      title: config.pages.businessHours.title,
      description: config.pages.businessHours.description,
      type: 'article',
    },
    alternates: {
      canonical: `https://whattime.city/${citySlug}/guide/business-hours/`,
    },
  }
}

export default async function BusinessHoursPage({ params }: Props) {
  const { city: citySlug } = await params
  const city = cities.find(c => c.slug === citySlug)
  const config = getGuideConfig(citySlug)
  
  if (!city || !config) notFound()
  
  switch (citySlug) {
    case 'london':
      return <LondonBusinessHoursContent city={city} />
    case 'tokyo':
      return <TokyoBusinessHoursContent city={city} />
    case 'dubai':
      return <DubaiBusinessHoursContent city={city} />
    case 'singapore':
      return <SingaporeBusinessHoursContent city={city} />
    case 'paris':
      return <ParisBusinessHoursContent city={city} />
    case 'sydney':
      return <SydneyBusinessHoursContent city={city} />
    default:
      return <BusinessHoursContent city={city} />
  }
}
