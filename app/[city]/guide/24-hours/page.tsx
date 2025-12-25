import { Metadata } from 'next'
import { cities } from '@/lib/cities'
import { notFound } from 'next/navigation'
import { getGuideConfig } from '@/lib/guide-content'
import TwentyFourHoursContent from './TwentyFourHoursContent'
import LondonTwentyFourHoursContent from './LondonTwentyFourHoursContent'
import TokyoTwentyFourHoursContent from './TokyoTwentyFourHoursContent'
import DubaiTwentyFourHoursContent from './DubaiTwentyFourHoursContent'
import SingaporeTwentyFourHoursContent from './SingaporeTwentyFourHoursContent'
import ParisTwentyFourHoursContent from './ParisTwentyFourHoursContent'
import Sydney24HoursContent from './Sydney24HoursContent'

type Props = {
  params: Promise<{ city: string }>
}

export async function generateStaticParams() {
  return [{ city: 'new-york' }, { city: 'london' }, { city: 'tokyo' }, { city: 'dubai' }, { city: 'singapore' }, { city: 'paris' }, { city: 'sydney' }]
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
  
  switch (citySlug) {
    case 'london':
      return <LondonTwentyFourHoursContent city={city} />
    case 'tokyo':
      return <TokyoTwentyFourHoursContent city={city} />
    case 'dubai':
      return <DubaiTwentyFourHoursContent city={city} />
    case 'singapore':
      return <SingaporeTwentyFourHoursContent city={city} />
    case 'paris':
      return <ParisTwentyFourHoursContent city={city} />
    case 'sydney':
      return <Sydney24HoursContent city={city} />
    default:
      return <TwentyFourHoursContent city={city} />
  }
}
