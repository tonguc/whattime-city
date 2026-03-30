import { SITE_URL } from '@/lib/constants'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { cities, getCityBySlug, getAllSlugs } from '@/lib/cities'
import CityPage from '@/components/CityPage'
import type { CitySEOData } from '@/core/types'

interface PageProps {
  params: Promise<{ city: string }>
}

// Tier 1+2 şehirleri build'de statik üret (~592 sayfa)
// Tier 3 şehirler (~1462) ilk request'te render edilip Vercel cache'e alınır
export async function generateStaticParams() {
  return cities
    .filter(c => (c.tier ?? 3) <= 2)
    .map(c => ({ city: c.slug }))
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

  let seoData: CitySEOData | null = null
  try {
    const fs = require('fs')
    const path = require('path')
    const jsonPath = path.join(process.cwd(), 'data', 'seo', `${slug}-seo.json`)
    if (fs.existsSync(jsonPath)) {
      seoData = JSON.parse(fs.readFileSync(jsonPath, 'utf-8')) as CitySEOData
    }
  } catch { seoData = null }

  const info = city.info
  // Keep title under 60 characters for SEO
  // Handle country-based slugs (e.g., /fiji/ vs /suva/) to avoid duplicate titles
  // Note: Layout template adds "| whattime.city" suffix automatically
  const isCountrySlug = slug.toLowerCase() === city.country.toLowerCase().replace(/\s+/g, '-')
  // Disambiguate same-name cities using state (e.g., Augusta, GA vs Augusta, ME)
  const location = city.stateCode
    ? `${city.city}, ${city.stateCode}`
    : `${city.city}, ${city.country}`
  const title = seoData?.seo_title || (isCountrySlug
    ? `Time in ${city.country} Now — ${city.city} Local Time`
    : `Current Time in ${location} Now`)
  const description = seoData?.seo_description || (info 
    ? `What time is it in ${city.city}? Check current local time, sunrise & sunset. Population: ${info.population}. Currency: ${info.currency} (${info.currencySymbol}). Phone: ${info.phoneCode}. Top attractions: ${info.attractions.slice(0, 3).join(', ')}.`
    : `What time is it in ${city.city} right now? Live clock showing current local time in ${city.city}, ${city.country}. Timezone: ${city.timezone}. Sunrise, sunset & time differences.`)
  
  return {
    title,
    description,
    openGraph: {
      title: seoData?.seo_title || `Current Time in ${location}`,
      description: seoData?.seo_description || (info
        ? `Live local time in ${city.city}. Population: ${info.population}. Currency: ${info.currencySymbol}. Top spots: ${info.attractions.slice(0, 2).join(', ')}.`
        : `Live local time in ${city.city}, ${city.country}. Check sunrise, sunset and weather.`),
      type: 'website',
      locale: 'en_US',
      siteName: 'whattime.city',
      url: `${SITE_URL}/${slug}/`
    },
    twitter: {
      card: 'summary_large_image',
      title: seoData?.seo_title || (city.stateCode ? `Time in ${city.city}, ${city.stateCode} Now` : `Time in ${city.city} Now`),
      description: seoData?.seo_description || (info
        ? `Current time in ${city.city}. ${info.population} people. ${info.currency} (${info.currencySymbol}).`
        : `Current local time in ${city.city}, ${city.country}. Live clock with sunrise & sunset.`)
    },
    alternates: {
      canonical: `${SITE_URL}/${slug}/`
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

  let seoData: CitySEOData | null = null
  try {
    const fs = require('fs')
    const path = require('path')
    const jsonPath = path.join(process.cwd(), 'data', 'seo', `${slug}-seo.json`)
    const tsPath = path.join(process.cwd(), 'data', 'seo', `${slug}-seo.ts`)
    if (fs.existsSync(jsonPath)) {
      seoData = JSON.parse(fs.readFileSync(jsonPath, 'utf-8')) as CitySEOData
    } else if (fs.existsSync(tsPath)) {
      const fileContent = fs.readFileSync(tsPath, 'utf-8')
      const match = fileContent.match(/export const \w+ = ([\s\S]*?) as const;/)
      if (match) seoData = JSON.parse(match[1]) as CitySEOData
    }
  } catch {
    seoData = null
  }
  
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
          { '@type': 'ListItem', position: 2, name: 'Cities', item: `${SITE_URL}/cities` },
          { '@type': 'ListItem', position: 3, name: city.stateCode ? `${city.city}, ${city.stateCode}` : `${city.city}, ${city.country}`, item: `${SITE_URL}/${slug}/` },
        ],
      }) }} />
      <CityPage initialCity={city} seoData={seoData} />
    </>
  )
}
