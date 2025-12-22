import { Metadata } from 'next'
import { cities } from '@/lib/cities'
import { notFound } from 'next/navigation'
import TimeDifferenceContent from './TimeDifferenceContent'

type Props = { params: Promise<{ city: string }> }
export async function generateStaticParams() { return [{ city: 'new-york' }] }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: citySlug } = await params
  return {
    title: `NYC Time Difference Calculator | EST/EDT vs World Cities`,
    description: `New York time difference to London (+5h), Tokyo (+14h), Dubai (+9h), Sydney (+16h) and 50+ cities. EST vs GMT explained. Live converter included.`,
    keywords: [
      'new york time difference',
      'nyc vs london time',
      'est vs gmt hours',
      'new york tokyo time difference',
      'how far ahead is new york from california',
      'eastern time vs uk time',
      'nyc dubai time difference',
      'est edt difference',
    ],
    openGraph: {
      title: `NYC Time Difference | EST vs World Time Zones`,
      description: `How many hours ahead or behind is New York? Complete time difference guide with DST info.`,
      type: 'article',
    },
    alternates: {
      canonical: `https://whattime.city/new-york/guide/time-difference/`,
    },
  }
}
export default async function TimeDifferencePage({ params }: Props) {
  const { city: citySlug } = await params
  const city = cities.find(c => c.slug === citySlug)
  if (!city || citySlug !== 'new-york') notFound()
  return <TimeDifferenceContent city={city} />
}
