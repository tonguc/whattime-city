import { Metadata } from 'next'
import { cities } from '@/lib/cities'
import { notFound } from 'next/navigation'
import { getGuideConfig } from '@/lib/guide-content'
import BusinessHoursContent from './BusinessHoursContent'
import LondonBusinessHoursContent from './LondonBusinessHoursContent'
import TokyoBusinessHoursContent from './TokyoBusinessHoursContent'
import DubaiBusinessHoursContent from './DubaiBusinessHoursContent'

type Props = {
  params: Promise<{ city: string }>
}

export async function generateStaticParams() {
  return [{ city: 'new-york' }, { city: 'london' }, { city: 'tokyo' }, { city: 'dubai' }]
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
  
  if (citySlug === 'london') {
    return <LondonBusinessHoursContent city={city} />
  }
  
  return <BusinessHoursContent city={city} />
}
