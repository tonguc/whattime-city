import { Metadata } from 'next'
import { cities } from '@/lib/cities'
import { notFound } from 'next/navigation'
import { getGuideConfig } from '@/lib/guide-content'
import TwentyFourHoursContent from './TwentyFourHoursContent'
import LondonTwentyFourHoursContent from './LondonTwentyFourHoursContent'
import TokyoTwentyFourHoursContent from './TokyoTwentyFourHoursContent'
import DubaiTwentyFourHoursContent from './DubaiTwentyFourHoursContent'

type Props = {
  params: Promise<{ city: string }>
}

export async function generateStaticParams() {
  return [{ city: 'new-york' }, { city: 'london' }, { city: 'tokyo' }, { city: 'dubai' }]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: citySlug } = await params
  const config = getGuideConfig(citySlug)
  
  if (!config) return { title: '24 Hours Guide' }
  
  return {
    title: config.pages.twentyFourHours.title,
    description: config.pages.twentyFourHours.description,
    keywords: config.pages.twentyFourHours.keywords,
    openGraph: {
      title: config.pages.twentyFourHours.title,
      description: config.pages.twentyFourHours.description,
      type: 'article',
    },
    alternates: {
      canonical: `https://whattime.city/${citySlug}/guide/24-hours/`,
    },
  }
}

export default async function TwentyFourHoursPage({ params }: Props) {
  const { city: citySlug } = await params
  const city = cities.find(c => c.slug === citySlug)
  const config = getGuideConfig(citySlug)
  
  if (!city || !config) notFound()
  
  if (citySlug === 'london') {
    return <LondonTwentyFourHoursContent city={city} />
  }
  
  return <TwentyFourHoursContent city={city} />
}
