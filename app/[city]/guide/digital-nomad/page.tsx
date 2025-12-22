import { Metadata } from 'next'
import { cities } from '@/lib/cities'
import { notFound } from 'next/navigation'
import DigitalNomadContent from './DigitalNomadContent'

type Props = { params: Promise<{ city: string }> }
export async function generateStaticParams() { return [{ city: 'new-york' }] }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: citySlug } = await params
  return {
    title: `Digital Nomad NYC Guide 2025 | Coworking, WiFi Cafes & Costs`,
    description: `Work remotely from New York. Best coworking spaces ($200-600/mo), laptop-friendly cafes, free WiFi spots, cost of living breakdown, and visa options for digital nomads.`,
    keywords: [
      'digital nomad new york',
      'best coworking spaces nyc',
      'cafes with wifi manhattan',
      'remote work new york city',
      'nyc cost of living digital nomad',
      'work from cafe brooklyn',
      'free wifi nyc',
      'wework nyc day pass',
    ],
    openGraph: {
      title: `NYC Digital Nomad Guide 2025 | Remote Work in New York`,
      description: `Everything digital nomads need to know about working remotely from NYC.`,
      type: 'article',
    },
    alternates: {
      canonical: `https://whattime.city/new-york/guide/digital-nomad/`,
    },
  }
}
export default async function DigitalNomadPage({ params }: Props) {
  const { city: citySlug } = await params
  const city = cities.find(c => c.slug === citySlug)
  if (!city || citySlug !== 'new-york') notFound()
  return <DigitalNomadContent city={city} />
}
