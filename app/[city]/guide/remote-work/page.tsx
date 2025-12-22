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
    title: `Working with NYC Teams Remotely | Time Zone Overlap & Meeting Times`,
    description: `Remote work guide for NYC collaboration. Find overlap hours with London, Tokyo, Sydney. Best meeting times, async tips, and NYC work culture. Visual overlap charts included.`,
    keywords: [
      'remote work new york time zone',
      'working with nyc team from europe',
      'time zone overlap calculator',
      'best meeting time new york london',
      'async communication nyc',
      'eastern time remote work',
      'schedule meetings across time zones',
      'nyc work culture remote',
    ],
    openGraph: {
      title: `Remote Work Guide: NYC Time Zone Collaboration`,
      description: `Time zone strategies, overlap hours, and async tips for working with New York teams.`,
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
  
  if (!city || citySlug !== 'new-york') notFound()
  
  return <RemoteWorkContent city={city} />
}
