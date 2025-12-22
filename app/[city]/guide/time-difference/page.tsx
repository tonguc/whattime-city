import { Metadata } from 'next'
import { cities } from '@/lib/cities'
import { notFound } from 'next/navigation'
import TimeDifferenceContent from './TimeDifferenceContent'

type Props = { params: Promise<{ city: string }> }
export async function generateStaticParams() { return [{ city: 'new-york' }] }
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `New York Time Difference: NYC vs London, Tokyo, Dubai & More | whattime.city`,
    description: `How many hours ahead or behind is New York? Time difference from NYC to major world cities with DST explanations.`,
    keywords: ['new york time difference', 'nyc time vs london', 'time difference new york london', 'how many hours behind is new york', 'est vs gmt'],
  }
}
export default async function TimeDifferencePage({ params }: Props) {
  const { city: citySlug } = await params
  const city = cities.find(c => c.slug === citySlug)
  if (!city || citySlug !== 'new-york') notFound()
  return <TimeDifferenceContent city={city} />
}
