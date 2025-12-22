import { Metadata } from 'next'
import { cities } from '@/lib/cities'
import { notFound } from 'next/navigation'
import DigitalNomadContent from './DigitalNomadContent'

type Props = { params: Promise<{ city: string }> }
export async function generateStaticParams() { return [{ city: 'new-york' }] }
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Digital Nomad Guide to NYC: Coworking, Cafes & WiFi | whattime.city`,
    description: `Work remotely from New York City. Best coworking spaces, cafes with WiFi, cost of living, and time zone tips for digital nomads.`,
    keywords: ['digital nomad new york', 'coworking nyc', 'best cafes to work from nyc', 'remote work new york city', 'wifi cafes manhattan'],
  }
}
export default async function DigitalNomadPage({ params }: Props) {
  const { city: citySlug } = await params
  const city = cities.find(c => c.slug === citySlug)
  if (!city || citySlug !== 'new-york') notFound()
  return <DigitalNomadContent city={city} />
}
