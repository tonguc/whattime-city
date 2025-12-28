import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { cities, City, getTier1Cities } from '@/lib/cities'
import TimeComparisonContent from '@/components/TimeComparisonContent'

interface TimeComparePageProps {
  params: Promise<{ from: string; to: string }>
}

// ✅ CRITICAL: Enable dynamic params for cities not in generateStaticParams
// This allows ANY city combination to work, not just pre-generated ones
export const dynamicParams = true

// ✅ ISR: Revalidate pages every 24 hours
// Pre-rendered pages stay fresh, dynamic pages get cached after first request
export const revalidate = 86400 // 24 hours

// Get city by slug
function getCityBySlug(slug: string): City | undefined {
  return cities.find(c => c.slug === slug)
}

// Generate static params for POPULAR city combinations ONLY
// Thanks to dynamicParams = true, other combinations render on-demand (still SSR!)
export async function generateStaticParams() {
  const tier1 = getTier1Cities()
  const tier1Slugs = tier1.map(c => c.slug)
  
  // Get Tier 2 cities for static pre-rendering
  const tier2Cities = cities.filter(c => {
    const tier = typeof c.tier === 'number' ? c.tier : parseInt(c.tier || '999')
    return tier === 2
  })
  const tier2Slugs = tier2Cities.map(c => c.slug)
  
  // Combine Tier 1 + Tier 2 for static generation
  const popularSlugs = Array.from(new Set([...tier1Slugs, ...tier2Slugs]))
  
  const params: { from: string; to: string }[] = []
  
  console.log(`\n🌍 === STATIC GENERATION STRATEGY ===`)
  console.log(`📊 Total cities in database: ${cities.length}`)
  console.log(`⭐ Tier 1 cities: ${tier1Slugs.length}`)
  console.log(`⭐ Tier 2 cities: ${tier2Slugs.length}`)
  console.log(`📦 Static pre-render: ${popularSlugs.length} cities`)
  
  // Generate all combinations for popular cities
  for (const from of popularSlugs) {
    for (const to of popularSlugs) {
      if (from !== to) {
        params.push({ from, to })
      }
    }
  }
  
  console.log(`\n✅ Static pages to generate: ${params.length.toLocaleString()}`)
  console.log(`🚀 Dynamic params enabled: Other ${(cities.length - popularSlugs.length)} cities will render on-demand`)
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
          url: `https://whattime.city/og-image.png`, // You can create dynamic OG images later
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
