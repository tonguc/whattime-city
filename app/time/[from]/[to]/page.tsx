import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { cities, City } from '@/lib/cities'
import TimeComparisonContent from '@/components/TimeComparisonContent'

interface TimeComparePageProps {
  params: Promise<{ from: string; to: string }>
}

// ✅ KRİTİK AYAR: Listede olmayan şehirler için dinamik üretime izin ver
// Bu sayede 395 şehrin hepsi çalışır (404 hatası olmaz)
export const dynamicParams = true

// ✅ ISR: Sayfaları 24 saatte bir (86400 saniye) yenile
export const revalidate = 86400

// Helper: Slug'dan şehir bulma
function getCityBySlug(slug: string): City | undefined {
  return cities.find(c => c.slug === slug)
}

// ✅ SADECE POPÜLER ŞEHİRLER İÇİN STATİK SAYFA ÜRET
// Build süresini kısa tutar (~2 dakika), sunucuyu yormaz.
export async function generateStaticParams() {
  // Strateji: Sadece veritabanındaki ilk 100 şehri "Popüler" kabul et
  // (Eğer cities.ts nüfusa göre sıralıysa en büyük 100 şehri alır)
  const POPULAR_CITY_COUNT = 100
  const tier1Cities = cities.slice(0, POPULAR_CITY_COUNT)
  const tier1Slugs = tier1Cities.map(c => c.slug)
  
  const params: { from: string; to: string }[] = []
  
  console.log(`\n🌍 === VERCEL STATIC GENERATION STRATEGY ===`)
  console.log(`📊 Total cities: ${cities.length}`)
  console.log(`⭐ Pre-rendering top: ${tier1Slugs.length} cities`)
  
  // Sadece Popüler x Popüler kombinasyonlarını üret
  for (const from of tier1Slugs) {
    for (const to of tier1Slugs) {
      if (from !== to) {
        params.push({ from, to })
      }
    }
  }
  
  console.log(`✅ Static pages generated: ${params.length.toLocaleString()}`)
  console.log(`🚀 Hybrid Mode: Remaining ${(cities.length * cities.length - params.length).toLocaleString()} combinations will render on-demand.`)
  
  return params
}

// Dinamik SEO Metadata
export async function generateMetadata({ params }: TimeComparePageProps): Promise<Metadata> {
  const { from, to } = await params
  const fromCity = getCityBySlug(from)
  const toCity = getCityBySlug(to)
  
  if (!fromCity || !toCity) {
    return { 
      title: 'City Not Found - whattime.city',
      description: 'The requested city comparison could not be found.'
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
    alternates: {
      canonical: `https://whattime.city/time/${from}/${to}/`
    },
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