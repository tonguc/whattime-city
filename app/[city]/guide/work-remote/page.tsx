import { Metadata } from 'next'
import { cities } from '@/lib/cities'
import { notFound } from 'next/navigation'
import WorkRemoteContent from './WorkRemoteContent'

interface PageProps {
  params: Promise<{ city: string }>
}

export async function generateStaticParams() {
  return cities.map((city) => ({
    city: city.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city: citySlug } = await params
  const city = cities.find(c => c.slug === citySlug)
  
  if (!city) return { title: 'Not Found' }
  
  return {
    title: `Work From ${city.city}: Remote Work & Digital Nomad Guide`,
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
