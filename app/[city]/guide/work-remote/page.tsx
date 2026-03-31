import { Metadata } from 'next'
import { cities } from '@/lib/cities'
import { getSupportedGuideCities } from '@/lib/guide-content'
import { notFound } from 'next/navigation'
import WorkRemoteContent from './WorkRemoteContent'

interface PageProps {
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

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city: citySlug } = await params
  const city = cities.find(c => c.slug === citySlug)
  
  if (!city) return { title: 'Not Found' }
  
  return {
    title: `Work From ${city.city}: Remote Work Guide`,
    description: `Complete guide to working remotely from ${city.city}: coworking spaces, internet quality, cost of living, visa info, and timezone tips for digital nomads.`,
    keywords: [
      `remote work ${city.city}`,
      `digital nomad ${city.city}`,
      `coworking ${city.city}`,
      `work from ${city.city}`,
      `${city.city} for remote workers`,
      `${city.city} digital nomad visa`,
    ],
    openGraph: {
      title: `Work From ${city.city} - Remote Work Guide`,
      description: `Everything you need to know about working remotely from ${city.city}.`,
    },
  }
}

export default async function WorkRemotePage({ params }: PageProps) {
  const { city: citySlug } = await params
  const city = cities.find(c => c.slug === citySlug)
  
  if (!city) {
    notFound()
  }
  
  return <WorkRemoteContent city={city} />
}
