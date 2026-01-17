import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { cities, City } from '@/lib/cities'
import TimeComparisonContent from '@/components/TimeComparisonContent'

interface TimeComparePageProps {
  params: Promise<{ from: string; to: string }>
}

// ✅ FORCE DYNAMIC - Bu sayfa asla pre-render edilmez
// Build süresi: ~25 dakika → ~2 dakika
// SEO: Tool output - değer hub sayfalarda (/istanbul/, /london/)
export const dynamic = 'force-dynamic'

// Helper: Slug'dan şehir bulma
function getCityBySlug(slug: string): City | undefined {
  return cities.find(c => c.slug === slug)
}

// Dinamik SEO Metadata
export async function generateMetadata({ params }: TimeComparePageProps): Promise<Metadata> {
  const { from, to } = await params
  const fromCity = getCityBySlug(from)
  const toCity = getCityBySlug(to)
  
  if (!fromCity || !toCity) {
    return { 
      title: 'City Not Found - whattime.city',
      description: 'The requested city comparison could not be found.',
      robots: {
        index: false,
        follow: false,
      }
    }
  }
  
  const title = `${fromCity.city} to ${toCity.city} Time Difference | whattime.city`
  const description = `Current time in ${fromCity.city} vs ${toCity.city}. See live clocks, time difference, best time to call, and business hours overlap.`
  
  return {
    title,
    description,
    keywords: [
      `${fromCity.city} ${toCity.city} time difference`,
      `time in ${fromCity.city} vs ${toCity.city}`,
      `${fromCity.city} to ${toCity.city} time`,
      `best time to call ${toCity.city} from ${fromCity.city}`,
      'time zone converter',
      'world clock'
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
          alt: `${fromCity.city} to ${toCity.city} Time Comparison`
        }
      ]
    },
    // ✅ INDEX - Long-tail SEO value (e.g., "london to new york time")
    robots: {
      index: true,
      follow: true,
    }
  }
}

// Ana Sayfa Bileşeni
export default async function TimeComparePage({ params }: TimeComparePageProps) {
  const { from, to } = await params
  const fromCity = getCityBySlug(from)
  const toCity = getCityBySlug(to)
  
  // Eğer şehir veritabanında hiç yoksa 404 ver
  if (!fromCity || !toCity) {
    notFound()
  }
  
  return <TimeComparisonContent fromCity={fromCity} toCity={toCity} />
}