import { Metadata } from 'next'
import { cities } from '@/lib/cities'
import { notFound } from 'next/navigation'
import { getGuideConfig, getSupportedGuideCities } from '@/lib/guide-content'
import TimeDifferenceContent from './TimeDifferenceContent'
import LondonTimeDifferenceContent from './LondonTimeDifferenceContent'
import TokyoTimeDifferenceContent from './TokyoTimeDifferenceContent'
import DubaiTimeDifferenceContent from './DubaiTimeDifferenceContent'
import SingaporeTimeDifferenceContent from './SingaporeTimeDifferenceContent'
import ParisTimeDifferenceContent from './ParisTimeDifferenceContent'
import SydneyTimeDifferenceContent from './SydneyTimeDifferenceContent'
import LosAngelesTimeDifferenceContent from './LosAngelesTimeDifferenceContent'

type Props = { params: Promise<{ city: string }> }

// ISR: other cities generated on first request, cached 24h
export const revalidate = 86400
export const dynamicParams = true

// Only pre-render top 8 cities with custom guide content at build time
// Remaining 13 cities are ISR
const TOP_GUIDE_CITIES = [
  'london', 'new-york', 'tokyo', 'dubai',
  'singapore', 'paris', 'sydney', 'istanbul'
]
export async function generateStaticParams() {
  return TOP_GUIDE_CITIES.map(city => ({ city }))
}



export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: citySlug } = await params
  const config = getGuideConfig(citySlug)
  if (!config) return { title: 'Time Difference' }
  return {
    title: config.pages.timeDifference.title,
    description: config.pages.timeDifference.description,
    keywords: config.pages.timeDifference.keywords,
    alternates: { canonical: `https://whattime.city/${citySlug}/guide/time-difference/` },
  }
}

export default async function TimeDifferencePage({ params }: Props) {
  const { city: citySlug } = await params
  const city = cities.find(c => c.slug === citySlug)
  const config = getGuideConfig(citySlug)
  if (!city || !config) notFound()
  if (citySlug === 'london') return <LondonTimeDifferenceContent city={city} />
  if (citySlug === 'tokyo') return <TokyoTimeDifferenceContent city={city} />
  if (citySlug === 'dubai') return <DubaiTimeDifferenceContent city={city} />
  if (citySlug === 'singapore') return <SingaporeTimeDifferenceContent city={city} />
  if (citySlug === 'paris') return <ParisTimeDifferenceContent city={city} />
  if (citySlug === 'sydney') return <SydneyTimeDifferenceContent city={city} />
  return <TimeDifferenceContent city={city} />
}
