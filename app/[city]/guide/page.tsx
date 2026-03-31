import { Metadata } from 'next'
import Link from 'next/link'
import { cities } from '@/lib/cities'
import { notFound } from 'next/navigation'
import { getGuideConfig, getSupportedGuideCities } from '@/lib/guide-content'
import GuideContent from './GuideContent'

type Props = {
  params: Promise<{ city: string }>
}

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
  
  if (!config) return { title: 'City Guide' }
  
  return {
    title: config.pages.overview.title,
    description: config.pages.overview.description,
    keywords: config.seo.keywords,
    openGraph: {
      title: config.seo.ogTitle,
      description: config.seo.ogDescription,
      type: 'article',
    },
    alternates: {
      canonical: `https://whattime.city/${citySlug}/guide/`,
    },
  }
}

export default async function GuidePage({ params }: Props) {
  const { city: citySlug } = await params
  const city = cities.find(c => c.slug === citySlug)
  const config = getGuideConfig(citySlug)
  
  if (!city || !config) notFound()
  
  return <GuideContent city={city} config={config} />
}
