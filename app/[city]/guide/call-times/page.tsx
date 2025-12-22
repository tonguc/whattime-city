import { Metadata } from 'next'
import { cities } from '@/lib/cities'
import { notFound } from 'next/navigation'
import CallTimesContent from './CallTimesContent'

type Props = {
  params: Promise<{ city: string }>
}

export async function generateStaticParams() {
  return [{ city: 'new-york' }]
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city: citySlug } = await params
  return {
    title: `Best Time to Call New York 2025 | From UK, India, Australia & More`,
    description: `When to call NYC? Best calling times from London, Mumbai, Tokyo, Sydney, Dubai. Business hours overlap and optimal windows for personal calls. Avoid awkward timing.`,
    keywords: [
      'best time to call new york',
      'best time to call usa from uk',
      'call new york from london time',
      'call nyc from india what time',
      'calling usa from australia best time',
      'new york phone hours',
      'when to call american business',
      'nyc time for international calls',
    ],
    openGraph: {
      title: `Best Time to Call New York | International Calling Guide`,
      description: `Optimal calling times to NYC from anywhere in the world. Business and personal call windows.`,
      type: 'article',
    },
    alternates: {
      canonical: `https://whattime.city/${citySlug}/guide/call-times/`,
    },
  }
}

export default async function CallTimesPage({ params }: Props) {
  const { city: citySlug } = await params
  const city = cities.find(c => c.slug === citySlug)
  if (!city || citySlug !== 'new-york') notFound()
  return <CallTimesContent city={city} />
}
