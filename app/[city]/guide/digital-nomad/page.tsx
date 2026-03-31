import { Metadata } from 'next'
import { cities } from '@/lib/cities'
import { notFound } from 'next/navigation'
import { getGuideConfig, getSupportedGuideCities } from '@/lib/guide-content'
import DigitalNomadContent from './DigitalNomadContent'
import LondonDigitalNomadContent from './LondonDigitalNomadContent'
import TokyoDigitalNomadContent from './TokyoDigitalNomadContent'
import DubaiDigitalNomadContent from './DubaiDigitalNomadContent'
import SingaporeDigitalNomadContent from './SingaporeDigitalNomadContent'
import ParisDigitalNomadContent from './ParisDigitalNomadContent'
import SydneyDigitalNomadContent from './SydneyDigitalNomadContent'
import LosAngelesDigitalNomadContent from './LosAngelesDigitalNomadContent'

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
  if (!config) return { title: 'Digital Nomad Guide' }
  return {
    title: config.pages.digitalNomad.title,
    description: config.pages.digitalNomad.description,
    keywords: config.pages.digitalNomad.keywords,
    alternates: { canonical: `https://whattime.city/${citySlug}/guide/digital-nomad/` },
  }
}

export default async function DigitalNomadPage({ params }: Props) {
  const { city: citySlug } = await params
  const city = cities.find(c => c.slug === citySlug)
  const config = getGuideConfig(citySlug)
  if (!city || !config) notFound()
  if (citySlug === 'london') return <LondonDigitalNomadContent city={city} />
  if (citySlug === 'tokyo') return <TokyoDigitalNomadContent city={city} />
  if (citySlug === 'dubai') return <DubaiDigitalNomadContent city={city} />
  if (citySlug === 'singapore') return <SingaporeDigitalNomadContent city={city} />
  if (citySlug === 'paris') return <ParisDigitalNomadContent city={city} />
  if (citySlug === 'sydney') return <SydneyDigitalNomadContent city={city} />
  return <DigitalNomadContent city={city} />
}
