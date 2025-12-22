import { Metadata } from 'next'
import { cities } from '@/lib/cities'
import { notFound } from 'next/navigation'
import RemoteWorkContent from './RemoteWorkContent'

type Props = {
  params: Promise<{ city: string }>
}

export async function generateStaticParams() {
  return [{ city: 'new-york' }]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: citySlug } = await params
  const city = cities.find(c => c.slug === citySlug)
  
  if (!city) return { title: 'Remote Work Guide' }
  
  return {
    title: `Working with New York Teams: Remote Work Time Zone Guide | whattime.city`,
    description: `How to coordinate with NYC colleagues across time zones. Best meeting times, overlap hours, and async communication tips for remote teams.`,
    keywords: [
      'working with new york team',
      'remote work time zones',
      'best time to schedule meetings with new york',
      'time zone overlap new york london',
      'async work east coast',
      'new york time zone for remote workers',
    ],
    openGraph: {
      title: `Remote Work Guide: Coordinating with NYC Teams`,
      description: `Time zone strategies for working with New York-based colleagues and clients.`,
      type: 'article',
    },
  }
}

export default async function RemoteWorkPage({ params }: Props) {
  const { city: citySlug } = await params
  const city = cities.find(c => c.slug === citySlug)
  
  if (!city || citySlug !== 'new-york') notFound()
  
  return <RemoteWorkContent city={city} />
}
