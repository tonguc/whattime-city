import { Metadata } from 'next'
import { cities } from '@/lib/cities'
import { notFound } from 'next/navigation'
import { getGuideConfig, getSupportedGuideCities } from '@/lib/guide-content'
import HolidaysContent from './HolidaysContent'
import LondonHolidaysContent from './LondonHolidaysContent'
import TokyoHolidaysContent from './TokyoHolidaysContent'
import DubaiHolidaysContent from './DubaiHolidaysContent'
import SingaporeHolidaysContent from './SingaporeHolidaysContent'
import ParisHolidaysContent from './ParisHolidaysContent'
import SydneyHolidaysContent from './SydneyHolidaysContent'
import LosAngelesHolidaysContent from './LosAngelesHolidaysContent'
import NewYorkHolidaysContent from './NewYorkHolidaysContent'
import IstanbulHolidaysContent from './IstanbulHolidaysContent'

type Props = { params: Promise<{ city: string }> }

export async function generateStaticParams() {
  return getSupportedGuideCities().map(city => ({ city }))
}



export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: citySlug } = await params
  const config = getGuideConfig(citySlug)
  if (!config) return { title: 'Public Holidays' }
  return {
    title: config.pages.holidays.title,
    description: config.pages.holidays.description,
    keywords: config.pages.holidays.keywords,
    alternates: { canonical: `https://whattime.city/${citySlug}/guide/holidays/` },
  }
}

export default async function HolidaysPage({ params }: Props) {
  const { city: citySlug } = await params
  const city = cities.find(c => c.slug === citySlug)
  const config = getGuideConfig(citySlug)
  if (!city || !config) notFound()
  if (citySlug === 'london') return <LondonHolidaysContent city={city} />
  if (citySlug === 'tokyo') return <TokyoHolidaysContent city={city} />
  if (citySlug === 'dubai') return <DubaiHolidaysContent city={city} />
  if (citySlug === 'singapore') return <SingaporeHolidaysContent city={city} />
  if (citySlug === 'paris') return <ParisHolidaysContent city={city} />
  if (citySlug === 'sydney') return <SydneyHolidaysContent city={city} />
  if (citySlug === 'istanbul') return <IstanbulHolidaysContent city={city} />
  if (citySlug === 'los-angeles') return <LosAngelesHolidaysContent city={city} />
  if (citySlug === 'new-york') return <NewYorkHolidaysContent city={city} />
  return <HolidaysContent city={city} />
}
