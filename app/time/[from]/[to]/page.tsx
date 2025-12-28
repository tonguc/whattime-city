import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { cities, City, getTier1Cities } from '@/lib/cities'
import TimeComparisonContent from '@/components/TimeComparisonContent'

interface TimeComparePageProps {
  params: Promise<{ from: string; to: string }>
}

// ✅ CRITICAL: Enable dynamic params for cities not in generateStaticParams
export const dynamicParams = true

// ✅ ISR: Revalidate pages every 24 hours
export const revalidate = 86400

// Get city by slug
function getCityBySlug(slug: string): City | undefined {
  return cities.find(c => c.slug === slug)
}

// ✅ Generate static params for TIER 1 CITIES ONLY
// Keep build fast (~50K pages, ~3 min build)
// Other combinations render on-demand (thanks to dynamicParams = true)
export async function generateStaticParams() {
  // ✅ ONLY TIER 1 CITIES (most popular, ~225 cities)
  const tier1 = getTier1Cities()
  const tier1Slugs = tier1.map(c => c.slug)
  
  const params: { from: string; to: string }[] = []
  
  console.log(`\n🌍 === STATIC GENERATION STRATEGY (TIER 1 ONLY) ===`)
  console.log(`📊 Total cities in database: ${cities.length}`)
  console.log(`⭐ Tier 1 cities (most popular): ${tier1Slugs.length}`)
  console.log(`📦 Static pre-render: ${tier1Slugs.length} cities`)
  
  // Generate all combinations for Tier 1 cities only
  for (const from of tier1Slugs) {
    for (const to of tier1Slugs) {
      if (from !== to) {
        params.push({ from, to })
      }
    }
  }
  
  const totalCombinations = tier1Slugs.length * (tier1Slugs.length - 1)
  
  console.log(`\n✅ Static pages to generate: ${params.length.toLocaleString()}`)
  console.log(`🚀 Dynamic params enabled: Other ${(cities.length - tier1Slugs.length)} cities will render on-demand`)
  console.log(`📈 Total possible combinations: ${(cities.length * (cities.length - 1)).toLocaleString()}`)
  console.log(`⏱️  Estimated build time: ~3-5 minutes`)
  console.log(`💾 ISR enabled: Pages revalidate every 24 hours\n`)
  
  return params
}

// Dynamic metadata for perfect SEO
export async function generateMetadata({ params }: TimeComparePageProps): Promise<Metadata> {
  const { from, to } = await params
  const fromCity = getCityBySlug(from)
  const toCity = getCityBySlug(to)
  
  if (!fromCity || !toCity) {
    return { 
      title: 'City Not Found - whattime.city',
      description: 'The requested city time comparison could not be found.'
    }
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
      'world clock',
      `${fromCity.city} time`,
      `${toCity.city} time`
    ],
    openGraph: {
      title: `${fromCity.city} ↔ ${toCity.city} Time Converter`,
      description,
      type: 'website',
      siteName: 'whattime.city',
      url: `https://whattime.city/time/${from}/${to}/`,
      images: [
        {
          url: `https://whattime.city/og-image.png`,
          width: 1200,
          height: 630,
          alt: `${fromCity.city} to ${toCity.city} Time Difference`
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: `${fromCity.city} ↔ ${toCity.city} Time`,
      description,
      images: ['https://whattime.city/og-image.png']
    },
    alternates: {
      canonical: `https://whattime.city/time/${from}/${to}/`
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
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
