import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { cities, City, getTier1Cities } from '@/lib/cities'
import TimeComparisonContent from '@/components/TimeComparisonContent'

interface TimeComparePageProps {
  params: Promise<{ from: string; to: string }>
}

// Get city by slug
function getCityBySlug(slug: string): City | undefined {
  return cities.find(c => c.slug === slug)
}

// Generate static params for top city combinations
export async function generateStaticParams() {
  const tier1 = getTier1Cities()
  const tier1Slugs = tier1.map(c => c.slug)
  
  // Popular tier 2 cities to include
  const popularTier2 = [
    'istanbul', 'moscow', 'berlin', 'madrid', 'barcelona', 'rome', 'amsterdam',
    'bangkok', 'seoul', 'mumbai', 'delhi', 'shanghai', 'beijing',
    'sao-paulo', 'mexico-city', 'toronto', 'chicago', 'los-angeles',
    'san-francisco', 'miami', 'seattle', 'boston', 'dallas',
    'cairo', 'johannesburg', 'lagos', 'nairobi',
    'melbourne', 'auckland', 'jakarta', 'manila', 'kuala-lumpur',
    'riyadh', 'tel-aviv', 'doha', 'abu-dhabi'
  ]
  
  const allSlugs = Array.from(new Set([...tier1Slugs, ...popularTier2]))
  
  const params: { from: string; to: string }[] = []
  
  // Generate all combinations
  for (const from of allSlugs) {
    for (const to of allSlugs) {
      if (from !== to) {
        // Verify both cities exist
        if (getCityBySlug(from) && getCityBySlug(to)) {
          params.push({ from, to })
        }
      }
    }
  }
  
  return params
}

// Dynamic metadata for SEO
export async function generateMetadata({ params }: TimeComparePageProps): Promise<Metadata> {
  const { from, to } = await params
  const fromCity = getCityBySlug(from)
  const toCity = getCityBySlug(to)
  
  if (!fromCity || !toCity) {
    return { title: 'City Not Found - whattime.city' }
  }
  
  const title = `${fromCity.city} to ${toCity.city} Time Difference | whattime.city`
  const description = `Current time in ${fromCity.city} vs ${toCity.city}. See live clocks, time difference, best time to call, business hours overlap, and schedule meetings across time zones.`
  
  return {
    title,
    description,
    keywords: [
      `${fromCity.city} ${toCity.city} time difference`,
      `time in ${fromCity.city} vs ${toCity.city}`,
      `${fromCity.city} to ${toCity.city} time`,
      `best time to call ${toCity.city} from ${fromCity.city}`,
      `${fromCity.city} ${toCity.city} time zone`,
      'time zone converter',
      'world clock'
    ],
    openGraph: {
      title: `${fromCity.city} ↔ ${toCity.city} Time Converter`,
      description,
      type: 'website',
      siteName: 'whattime.city',
      url: `https://whattime.city/time/${from}/${to}`
    },
    twitter: {
      card: 'summary_large_image',
      title: `${fromCity.city} ↔ ${toCity.city} Time`,
      description
    },
    alternates: {
      canonical: `https://whattime.city/time/${from}/${to}`
    }
  }
}

export default async function TimeComparePage({ params }: TimeComparePageProps) {
  const { from, to } = await params
  const fromCity = getCityBySlug(from)
  const toCity = getCityBySlug(to)
  
  if (!fromCity || !toCity) {
    notFound()
  }
  
  return <TimeComparisonContent fromCity={fromCity} toCity={toCity} />
}
