import { Metadata } from 'next'
import { cities } from '@/lib/cities'
import { notFound } from 'next/navigation'
import { getGuideConfig } from '@/lib/guide-content'
import DigitalNomadContent from './DigitalNomadContent'
import LondonDigitalNomadContent from './LondonDigitalNomadContent'
import TokyoDigitalNomadContent from './TokyoDigitalNomadContent'
import DubaiDigitalNomadContent from './DubaiDigitalNomadContent'
import SingaporeDigitalNomadContent from './SingaporeDigitalNomadContent'
import ParisDigitalNomadContent from './ParisDigitalNomadContent'
import SydneyDigitalNomadContent from './SydneyDigitalNomadContent'
import LosAngelesDigitalNomadContent from './LosAngelesDigitalNomadContent'

type Props = {
  params: Promise<{ city: string }>
}

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
  
  if (!config) return { title: 'DigitalNomad' }
  
  // Dynamically access the correct page config
  const pageKey = 'digital-nomad'.replace(/-([a-z])/g, (g) => g[1].toUpperCase()).replace(/-/g, '')
  const pageConfig = (config.pages as any)[pageKey]
  
  return {
    title: pageConfig?.title || 'DigitalNomad',
    description: pageConfig?.description || '',
    keywords: pageConfig?.keywords || [],
    openGraph: {
      title: pageConfig?.title || 'DigitalNomad',
      description: pageConfig?.description || '',
      type: 'article',
    },
    alternates: {
      canonical: `https://whattime.city/${citySlug}/guide/digital-nomad/`,
    },
  }
}

export default async function DigitalNomadPage({ params }: Props) {
  const { city: citySlug } = await params
  const city = cities.find(c => c.slug === citySlug)
  const config = getGuideConfig(citySlug)
  
  if (!city || !config) notFound()
  
  switch (citySlug) {
    case 'london':
      return <LondonDigitalNomadContent city={city} />
    case 'tokyo':
      return <TokyoDigitalNomadContent city={city} />
    case 'dubai':
      return <DubaiDigitalNomadContent city={city} />
    case 'singapore':
      return <SingaporeDigitalNomadContent city={city} />
    case 'paris':
      return <ParisDigitalNomadContent city={city} />
    case 'sydney':
      return <SydneyDigitalNomadContent city={city} />
    case 'los-angeles':
      return <LosAngelesDigitalNomadContent city={city} />
    default:
      return <DigitalNomadContent city={city} />
  }
}
