import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { cities } from '@/lib/cities'
import SunPageClient from './SunPageClient'
import { SITE_URL } from '@/lib/constants'

interface PageProps {
  params: Promise<{ city: string }>
}

// ISR: remaining cities generated on first request, cached 24h
export const revalidate = 86400
export const dynamicParams = true

// Only pre-render tier 1 cities at build time (~41 pages)
// Tier 2+ generated on first request via ISR
export async function generateStaticParams() {
  return cities
    .filter(c => c.tier === 1)
    .map(c => ({ city: c.slug }))
}

// Timezone abbreviation helper (best-effort, server-side)
function getTzAbbr(timezone: string): string {
  try {
    const parts = new Intl.DateTimeFormat('en-US', {
      timeZone: timezone,
      timeZoneName: 'short',
    })
      .formatToParts(new Date())
    const tzPart = parts.find(p => p.type === 'timeZoneName')
    return tzPart?.value ?? timezone
  } catch {
    return timezone
  }
}

// DST helper — checks if timezone observes DST by comparing Jan and Jul offsets
function observesDST(timezone: string): boolean {
  try {
    const jan = new Date(2026, 0, 1)
    const jul = new Date(2026, 6, 1)
    const fmt = (d: Date) =>
      Number(
        new Intl.DateTimeFormat('en-US', {
          timeZone: timezone,
          hour: 'numeric',
          hour12: false,
        }).format(d)
      )
    return fmt(jan) !== fmt(jul)
  } catch {
    return false
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city: slug } = await params
  const city = cities.find(c => c.slug === slug)

  if (!city) {
    return { title: 'Sunrise & Sunset — whattime.city' }
  }

  const tzAbbr = getTzAbbr(city.timezone)
  const cityLabel = city.stateCode ? `${city.city}, ${city.stateCode}` : city.city

  return {
    title: `Sunrise & Sunset in ${cityLabel} Today — ${tzAbbr} Sun Times`,
    description: `Today's sunrise and sunset times in ${city.city}, ${city.country}. Live sun calculator with dawn, dusk, daylight hours, and monthly sun chart for ${city.city}.`,
    openGraph: {
      title: `Sunrise & Sunset in ${cityLabel} Today`,
      description: `Live sunrise, sunset, dawn, and dusk times for ${city.city}. See daylight hours and monthly sun chart.`,
      type: 'website',
      locale: 'en_US',
      siteName: 'whattime.city',
      url: `${SITE_URL}/${slug}/sun/`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `Sunrise & Sunset in ${cityLabel} Today`,
      description: `Today's sun times for ${city.city}. Dawn, sunrise, solar noon, sunset, dusk.`,
    },
    alternates: {
      canonical: `${SITE_URL}/${slug}/sun/`,
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default async function SunPage({ params }: PageProps) {
  const { city: slug } = await params
  const city = cities.find(c => c.slug === slug)

  if (!city) notFound()

  const tzAbbr = getTzAbbr(city.timezone)
  const hasDST = observesDST(city.timezone)
  const cityLabel = city.stateCode ? `${city.city}, ${city.stateCode}` : city.city

  // Serializable city data for client component
  const cityData = {
    slug: city.slug,
    city: city.city,
    cityLabel,
    country: city.country,
    countryCode: city.countryCode,
    timezone: city.timezone,
    tzAbbr,
    hasDST,
    lat: city.lat,
    lng: city.lng,
  }

  // FAQ schema answers (server-rendered for Google)
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `What time is sunrise in ${city.city} today?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Sunrise time in ${city.city} varies by season. The sun rises earlier in summer and later in winter. Use the live sun calculator above for today's exact sunrise time in ${city.timezone} timezone.`,
        },
      },
      {
        '@type': 'Question',
        name: `What time does the sun set in ${city.city}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Sunset in ${city.city} depends on the time of year and Daylight Saving Time status. The live calculator above shows today's exact sunset time in ${city.city} (${city.timezone}).`,
        },
      },
      {
        '@type': 'Question',
        name: `How many hours of daylight does ${city.city} get today?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Daylight hours in ${city.city} range from roughly 9 hours in winter to 15 hours in summer (varies by latitude: ${city.lat.toFixed(1)}°). See the exact figure for today in the live sun card above.`,
        },
      },
      {
        '@type': 'Question',
        name: `Does ${city.city} observe Daylight Saving Time?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: hasDST
            ? `Yes, ${city.city} observes Daylight Saving Time. Clocks shift forward in spring and back in autumn, affecting sunrise and sunset times by one hour.`
            : `No, ${city.city} does not observe Daylight Saving Time. Sunrise and sunset times shift gradually through the year due to the Earth's orbit, but there is no abrupt one-hour clock change.`,
        },
      },
    ],
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
      {
        '@type': 'ListItem',
        position: 2,
        name: cityLabel,
        item: `${SITE_URL}/${slug}/`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Sunrise & Sunset',
        item: `${SITE_URL}/${slug}/sun/`,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <SunPageClient city={cityData} />
    </>
  )
}
