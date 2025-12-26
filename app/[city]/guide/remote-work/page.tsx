import { Metadata } from 'next'
import { cities } from '@/lib/cities'
import { notFound } from 'next/navigation'
import { getGuideConfig } from '@/lib/guide-content'
import RemoteWorkContent from './RemoteWorkContent'
import LondonRemoteWorkContent from './LondonRemoteWorkContent'
import TokyoRemoteWorkContent from './TokyoRemoteWorkContent'
import DubaiRemoteWorkContent from './DubaiRemoteWorkContent'
import SingaporeRemoteWorkContent from './SingaporeRemoteWorkContent'
import ParisRemoteWorkContent from './ParisRemoteWorkContent'
import SydneyRemoteWorkContent from './SydneyRemoteWorkContent'
import LosAngelesRemoteWorkContent from './LosAngelesRemoteWorkContent'

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
  
  if (!config) return { title: 'RemoteWork' }
  
  // Dynamically access the correct page config
  const pageKey = 'remote-work'.replace(/-([a-z])/g, (g) => g[1].toUpperCase()).replace(/-/g, '')
  const pageConfig = (config.pages as any)[pageKey]
  
  return {
    title: pageConfig?.title || 'RemoteWork',
    description: pageConfig?.description || '',
    keywords: pageConfig?.keywords || [],
    openGraph: {
      title: pageConfig?.title || 'RemoteWork',
      description: pageConfig?.description || '',
      type: 'article',
    },
    alternates: {
      canonical: `https://whattime.city/${citySlug}/guide/remote-work/`,
    },
  }
}

export default async function RemoteWorkPage({ params }: Props) {
  const { city: citySlug } = await params
  const city = cities.find(c => c.slug === citySlug)
  const config = getGuideConfig(citySlug)
  
  if (!city || !config) notFound()
  
  switch (citySlug) {
    case 'london':
      return <LondonRemoteWorkContent city={city} />
    case 'tokyo':
      return <TokyoRemoteWorkContent city={city} />
    case 'dubai':
      return <DubaiRemoteWorkContent city={city} />
    case 'singapore':
      return <SingaporeRemoteWorkContent city={city} />
    case 'paris':
      return <ParisRemoteWorkContent city={city} />
    case 'sydney':
      return <SydneyRemoteWorkContent city={city} />
    case 'los-angeles':
      return <LosAngelesRemoteWorkContent city={city} />
    default:
      return <RemoteWorkContent city={city} />
  }
}
