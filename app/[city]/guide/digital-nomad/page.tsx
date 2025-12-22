import { Metadata } from 'next'
import { cities } from '@/lib/cities'
import { notFound } from 'next/navigation'
import { getGuideConfig } from '@/lib/guide-content'
import DigitalNomadContent from './DigitalNomadContent'
import LondonDigitalNomadContent from './LondonDigitalNomadContent'

type Props = { params: Promise<{ city: string }> }

export async function generateStaticParams() {
  return [{ city: 'new-york' }, { city: 'london' }]
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
  return <DigitalNomadContent city={city} />
}
