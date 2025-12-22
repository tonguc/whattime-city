import { Metadata } from 'next'
import { cities } from '@/lib/cities'
import { notFound } from 'next/navigation'
import { getGuideConfig } from '@/lib/guide-content'
import TimeDifferenceContent from './TimeDifferenceContent'
import LondonTimeDifferenceContent from './LondonTimeDifferenceContent'

type Props = { params: Promise<{ city: string }> }

export async function generateStaticParams() {
  return [{ city: 'new-york' }, { city: 'london' }]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: citySlug } = await params
  const config = getGuideConfig(citySlug)
  if (!config) return { title: 'Time Difference' }
  return {
    title: config.pages.timeDifference.title,
    description: config.pages.timeDifference.description,
    keywords: config.pages.timeDifference.keywords,
    alternates: { canonical: `https://whattime.city/${citySlug}/guide/time-difference/` },
  }
}

export default async function TimeDifferencePage({ params }: Props) {
  const { city: citySlug } = await params
  const city = cities.find(c => c.slug === citySlug)
  const config = getGuideConfig(citySlug)
  if (!city || !config) notFound()
  if (citySlug === 'london') return <LondonTimeDifferenceContent city={city} />
  return <TimeDifferenceContent city={city} />
}
