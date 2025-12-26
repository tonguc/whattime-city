import { Metadata } from 'next'
import Link from 'next/link'
import { cities } from '@/lib/cities'
import { notFound } from 'next/navigation'
import { getGuideConfig, getSupportedGuideCities } from '@/lib/guide-content'
import GuideContent from './GuideContent'

type Props = {
  params: Promise<{ city: string }>
}

export async function generateStaticParams() {
  return getSupportedGuideCities().map(city => ({ city }))
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
