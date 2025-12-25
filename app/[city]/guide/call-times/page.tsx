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

type Props = { params: Promise<{ city: string }> }

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
  if (!config) return { title: 'Best Time to Call' }
  return {
    title: config.pages.callTimes.title,
    description: config.pages.callTimes.description,
    keywords: config.pages.callTimes.keywords,
    alternates: { canonical: `https://whattime.city/${citySlug}/guide/call-times/` },
  }
}

export default async function CallTimesPage({ params }: Props) {
  const { city: citySlug } = await params
  const city = cities.find(c => c.slug === citySlug)
  const config = getGuideConfig(citySlug)
  if (!city || !config) notFound()
  if (citySlug === 'london') return <LondonCallTimesContent city={city} />
  if (citySlug === 'tokyo') return <TokyoCallTimesContent city={city} />
  if (citySlug === 'dubai') return <DubaiCallTimesContent city={city} />
  if (citySlug === 'singapore') return <SingaporeCallTimesContent city={city} />
  if (citySlug === 'paris') return <ParisCallTimesContent city={city} />
  if (citySlug === 'sydney') return <SydneyCallTimesContent city={city} />
  if (citySlug === 'los-angeles') return <LosAngelesCallTimesContent city={city} />
  return <CallTimesContent city={city} />
}
