import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { cities, getCityBySlug, getAllSlugs } from '@/lib/cities'
import CityPage from '@/components/CityPage'

interface PageProps {
  params: Promise<{ city: string }>
}

// Statik sayfa oluşturma için tüm şehir slug'larını döndür
export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({
    city: slug,
  }))
}

// Dinamik metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city: slug } = await params
  const city = getCityBySlug(slug)
  
  if (!city) {
    return {
      title: 'City Not Found - whattime.city'
    }
  }

  let seoData: any = null
  try {
    const fs = require('fs')
    const path = require('path')
    const jsonPath = path.join(process.cwd(), 'data', 'seo', `${slug}-seo.json`)
    if (fs.existsSync(jsonPath)) {
      seoData = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'))
    }
  } catch { seoData = null }

  const info = city.info
  // Keep title under 60 characters for SEO
  // Handle country-based slugs (e.g., /fiji/ vs /suva/) to avoid duplicate titles
  // Note: Layout template adds "| whattime.city" suffix automatically
  const isCountrySlug = slug.toLowerCase() === city.country.toLowerCase().replace(/\s+/g, '-')
  const title = seoData?.seo_title || (isCountrySlug
    ? `Time in ${city.country} Now - ${city.city} Local Time`
    : `Current Time in ${city.city}, ${city.country}`)
  const description = seoData?.seo_description || (info 
    ? `What time is it in ${city.city}? Check current local time, sunrise & sunset. Population: ${info.population}. Currency: ${info.currency} (${info.currencySymbol}). Phone: ${info.phoneCode}. Top attractions: ${info.attractions.slice(0, 3).join(', ')}.`
    : `What time is it in ${city.city} right now? Check current local time, sunrise at, sunset times, and weather in ${city.city}, ${city.country}. Timezone: ${city.timezone}.`)
  
  return {
    title,
    description,
    openGraph: {
      title: `Current Time in ${city.city} - What Time Is It Now?`,
      description: info 
        ? `Live local time in ${city.city}. Population: ${info.population}. Currency: ${info.currencySymbol}. Top spots: ${info.attractions.slice(0, 2).join(', ')}.`
        : `Live local time in ${city.city}, ${city.country}. Check sunrise, sunset and weather.`,
      type: 'website',
      locale: 'en_US',
      siteName: 'whattime.city',
      url: `https://whattime.city/${slug}`
    },
    twitter: {
      card: 'summary_large_image',
      title: `Time in ${city.city} Now | whattime.city`,
      description: info
        ? `Current time in ${city.city}. ${info.population} people. ${info.currency} (${info.currencySymbol}).`
        : `Current local time in ${city.city}, ${city.country}. Live clock with sunrise & sunset.`
    },
    alternates: {
      canonical: `https://whattime.city/${slug}`
    },
    robots: {
      index: true,
      follow: true
    }
  }
}

export default async function Page({ params }: PageProps) {
  const { city: slug } = await params
  const city = getCityBySlug(slug)
  
  if (!city) {
    notFound()
  }

  let seoData = null
  try {
    const fs = require('fs')
    const path = require('path')
    const jsonPath = path.join(process.cwd(), 'data', 'seo', `${slug}-seo.json`)
    const tsPath = path.join(process.cwd(), 'data', 'seo', `${slug}-seo.ts`)
    if (fs.existsSync(jsonPath)) {
      seoData = JSON.parse(fs.readFileSync(jsonPath, 'utf-8'))
    } else if (fs.existsSync(tsPath)) {
      const fileContent = fs.readFileSync(tsPath, 'utf-8')
      const match = fileContent.match(/export const \w+ = ([\s\S]*?) as const;/)
      if (match) seoData = JSON.parse(match[1])
    }
  } catch {
    seoData = null
  }
  
  return (
    <CityPage initialCity={city} seoData={seoData} />
  )
}
